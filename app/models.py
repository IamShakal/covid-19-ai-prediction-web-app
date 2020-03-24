from django.db.models import Model, CASCADE, CharField, EmailField, SlugField, BigIntegerField, IntegerField, PositiveIntegerField, DecimalField, PositiveSmallIntegerField, TextField, ForeignKey, URLField, BooleanField, DateTimeField, DateField, OneToOneField, ManyToManyField, ImageField, FileField
from django.core.exceptions import ValidationError

from django.utils import timezone

from app.artificial_intelligence.Requests import create_files, extract_country


# Constants

CONTINENTS = (
	('af','Africa'),
	('eu', 'Europe'),
	('as','Asia'),
	('na','North America'),
	('au','Australia'),
	('st','South America'),
)

PREDICTIONS_FILE_EXTENSIONS =  ('csv',) 


# End Constants


class Image( Model ):

    url = URLField( blank = True )
    image = ImageField( upload_to = "images", blank = True )

    def clean(self):
        if ( not( self.url or self.image ) ):
            raise ValidationError("Two fields are empty, at lease fill one !")
    @property
    def src(self):
    	if ( self.image ):
    		return self.image.url
    	else:
    		return self.url        
            
    def __str__(self):

        if ( self.image ):
            return self.image.url
        else:
            return self.url

class File( Model ):
	name = CharField( max_length=100 )
	file = FileField()

	def clean(self):
		errors={}
		# validate prediction_files
		extension =  self.file.name[-3:]
		if  ( extension not in PREDICTIONS_FILE_EXTENSIONS ):
			errors['file'] = 'Invalid type'

		if ( errors ):
			raise ValidationError(errors)

	def __str__(self):
		return self.name

class Country(Model):

	name = CharField( max_length=100, unique=True )
	continent = CharField( max_length=2, choices=CONTINENTS )
	image = OneToOneField( Image, on_delete=CASCADE )

	# confirmed_time_series = ForeignKey( File, on_delete=CASCADE, related_name="confirmed_series", null=True, blank=True )
	# death_time_series = ForeignKey( File, on_delete=CASCADE, related_name="deaths_series", null=True, blank=True )
	# recovered_time_series = ForeignKey( File, on_delete=CASCADE, related_name="recovered_series", null=True, blank=True )

	# population = BigIntegerField( default=0 )
	cases = BigIntegerField( default=0 )
	deaths = BigIntegerField( default=0 )
	recovered = BigIntegerField( default=0 )

	creation_date = DateField( default=timezone.now )
		
	@property
	def formated_continent(self):
		# return the full name of continent
		code = self.continent
		for i  in CONTINENTS:
			if ( i[0] == code ):
				return i[1]
		return code


	class Meta:
		verbose_name_plural = "Countries"


	def clean(self):
		errors={}

		# validate if name exists in the file
		
		country_data = extract_country( [self.name,] )[self.name]

		if ( country_data['deaths'] == 0 and  country_data['cases'] == 0 and country_data['recovered'] == 0 ):
			errors['name'] = 'Invalid country name or the country has no cases, deaths, recovered';


		if ( errors ):
			raise ValidationError(errors)


	def save( self, *args, **kwargs ):
	   	country_data = extract_country( [self.name,] )[self.name]
	   	self.deaths = country_data['deaths']
	   	self.cases = country_data['cases']
	   	self.Recovered = country_data['recovered']
	   	super(Country, self).save(*args, **kwargs)

	def __str__(self):
		return '{}, {}'.format( self.formated_continent,  self.name )
