from rest_framework import serializers
from .models import Currency

class CurrencySerializer(serializers.ModelSerializer):

    class Meta:
        db_table = 'currency'
        model = Currency 
        fields = ('pk', 't', 'prediction', 'realVal')
