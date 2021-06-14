from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.http import JsonResponse
from .predict import *

# Create your views here.
@api_view(['GET'])
def predict(request):
  prediction = getPrediction()

  response = JsonResponse({
    "prediction": json.dumps(prediction.tolist())
  })
  response['Access-Control-Allow-Origin'] = '*'

  return response

