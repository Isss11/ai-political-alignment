from django.db import migrations
# Not sure if this should be here
def create_data(apps, schema_editor):
    Classification = apps.get_model('Classifications', 'Classification')
    Classification(name="Joe Silver", email="joe@email.com", document="22342342", phone="00000000").save()

class Migration(migrations.Migration):

    dependencies = [
        ('Classifications', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]