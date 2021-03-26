from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .serializers import AlgorithmSerializer
from .models import Algorithm
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET'])
def Algorithms(request):
    if request.method == 'GET':
        try: 
           algorithms = Algorithm.objects.all()
        except:
           return HttpResponse(status=404)           
        algorithms_serializer = AlgorithmSerializer(algorithms, many=True)
        return JsonResponse(algorithms_serializer.data, safe=False,status=200)
