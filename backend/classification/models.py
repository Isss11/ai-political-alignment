from django.db import models
from django.utils import timezone

class Classification(models.Model):
    text = models.CharField("Text", max_length=4096, blank=False, null=False)
    party = models.CharField("Party", max_length=128, default="Liberal", blank=False, null=False)
    model_version = models.CharField("Model Version", max_length=128, blank=False, null=False)
    date_created = models.DateField("Date Created", default=timezone.now(), blank=False, null=False)
    date_updated = models.DateField("Date Updated", default=timezone.now(), blank=False, null=False)

    def __str__(self):
        return self.text