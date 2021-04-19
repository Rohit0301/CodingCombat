# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .serializers import DataStructureSerializer,DataStructureVideoSerializer,DataStructureBlogSerializer,DataStructureQuestionSerializer
from .models import DataStructure,DataStructureVideo,DataStructureBlog,DataStructureQuestion
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET'])
def DataStructures(request):
    if request.method == 'GET':
        try: 
           DataStructures = DataStructure.objects.all()
        except:
           return HttpResponse(status=404)           
        DataStructures_serializer = DataStructureSerializer(DataStructures, many=True)
        return JsonResponse(DataStructures_serializer.data, safe=False,status=200)

@api_view(['GET'])
def DataStructurevideos(request,datastructure):
    if request.method=='GET':
        try:
            DataStructure_videos=DataStructure.objects.get(DataStructure_Name=datastructure).datastructurevideo_set.all()
        except:
            return HttpResponse(status=404)   
        DataStructures_video_serializer=DataStructureVideoSerializer(DataStructure_videos,many=True)
        return JsonResponse(DataStructures_video_serializer.data, safe=False,status=200)        



@api_view(['GET'])
def DataStructureblogs(request,datastructure):
    if request.method=='GET':
        try:
            DataStructure_blogs=DataStructure.objects.get(DataStructure_Name=datastructure).datastructureblog_set.all()
            print(DataStructure_blogs)
        except:
            return HttpResponse(status=404)   
        DataStructures_blog_serializer=DataStructureBlogSerializer(DataStructure_blogs,many=True)
        return JsonResponse(DataStructures_blog_serializer.data, safe=False,status=200)                

@api_view(['GET'])
def DataStructurequestions(request,datastructure):
    if request.method=='GET':
        try:
            DataStructure_questions=DataStructure.objects.get(DataStructure_Name=datastructure).datastructurequestion_set.all()
        except:
            return HttpResponse(status=404)   
        DataStructures_question_serializer=DataStructureQuestionSerializer(DataStructure_questions,many=True)
        return JsonResponse(DataStructures_question_serializer.data, safe=False,status=200)                        