# Generated by Django 3.0.4 on 2020-03-28 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20200323_2202'),
    ]

    operations = [
        migrations.DeleteModel(
            name='File',
        ),
        migrations.AddField(
            model_name='country',
            name='status',
            field=models.CharField(choices=[('dz', 'Danger zone'), ('hd', 'Half danger'), ('sz', 'Sade zone')], default='dz', max_length=2),
            preserve_default=False,
        ),
    ]
