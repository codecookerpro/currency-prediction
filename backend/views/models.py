from django.db import models

class Currency(models.Model):
    t = models.IntegerField(blank=False)
    prediction = models.RealField(blank=True, null=True)
    realVal = models.RealField(blank=True, null=True)

    def __str__(self):
        return self.name