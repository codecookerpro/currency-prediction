from django.db import models

class Currency(models.Model):
    t = models.IntegerField(blank=False, primary_key=True)
    prediction = models.FloatField(blank=True, null=True)
    realVal = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = 'currency'

    def __str__(self):
        return self.t