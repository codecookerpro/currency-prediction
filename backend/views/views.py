from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.http import JsonResponse

# Create your views here.
@api_view(['GET'])
def getPredict(request):
  prediction = [1, 2, 3, 4, 5]

  response = JsonResponse({
    "prediction": prediction
  })
  response['Access-Control-Allow-Origin'] = '*'

  return response

