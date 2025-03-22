from django.db import models
import datetime

class Classification(models.Model):
    text = models.CharField("Text", max_length=2048, default="No Information Provided")
    party = models.CharField("Party", max_length=128, default="Liberal")
    date_created = models.DateField("Date Created", default=datetime.date.today())
    date_updated = models.DateField("Date Updated", default=datetime.date.today())

    def __str__(self):
        return self.text