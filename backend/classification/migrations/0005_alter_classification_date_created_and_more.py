# Generated by Django 4.2.20 on 2025-04-06 17:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classification', '0004_classification_model_version_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classification',
            name='date_created',
            field=models.DateField(default=datetime.datetime(2025, 4, 6, 17, 31, 34, 123134, tzinfo=datetime.timezone.utc), verbose_name='Date Created'),
        ),
        migrations.AlterField(
            model_name='classification',
            name='date_updated',
            field=models.DateField(default=datetime.datetime(2025, 4, 6, 17, 31, 34, 123154, tzinfo=datetime.timezone.utc), verbose_name='Date Updated'),
        ),
    ]
