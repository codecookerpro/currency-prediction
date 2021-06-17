from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.http import JsonResponse
from .models import Currency
from .serializers import *

import json
import time

# Create your views here.
@api_view(['GET'])
def getPredict(request, predinterval):

    if predinterval == "minone":
        data = Currency.objects.filter(t > (int(time.time()) - 100000))
    else:
        data = Currency.objects.all()

    serializer = CurrencySerializer(data, context={'request': request}, many=True)

    prediction = serializer.data

    # if predinterval == "minone":
    #     prediction = [1, 2]
    # elif predinterval == "minten":
    #     prediction = [1, 2, 3]
    # else:
    #     prediction = [0]

    response = JsonResponse({
      "prediction": prediction
    })
    response['Access-Control-Allow-Origin'] = '*'

    return response

