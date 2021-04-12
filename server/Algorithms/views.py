from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .serializers import AlgorithmSerializer,AlgorithmVideoSerializer,AlgorithmBlogSerializer,AlgorithmQuestionSerializer
from .models import Algorithm,AlgorithmVideo,AlgorithmBlog,AlgorithmQuestion
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

@api_view(['GET'])
def Algorithmvideos(request,algorithm):
    if request.method=='GET':
        try:
            algorithm_videos=Algorithm.objects.get(Algorithm_Name=algorithm).algorithmvideo_set.all()
        except:
            return HttpResponse(status=404)   
        algorithms_video_serializer=AlgorithmVideoSerializer(algorithm_videos,many=True)
        return JsonResponse(algorithms_video_serializer.data, safe=False,status=200)        

@api_view(['GET'])
def Algorithmblogs(request,algorithm):
    if request.method=='GET':
        try:
            algorithm_blogs=Algorithm.objects.get(Algorithm_Name=algorithm).algorithmblog_set.all()
        except:
            return HttpResponse(status=404)   
        algorithms_blog_serializer=AlgorithmBlogSerializer(algorithm_blogs,many=True)
        return JsonResponse(algorithms_blog_serializer.data, safe=False,status=200)                

@api_view(['GET'])
def Algorithmquestions(request,algorithm):
    if request.method=='GET':
        try:
            algorithm_questions=Algorithm.objects.get(Algorithm_Name=algorithm).algorithmquestion_set.all()
        except:
            return HttpResponse(status=404)   
        algorithms_question_serializer=AlgorithmQuestionSerializer(algorithm_questions,many=True)
        return JsonResponse(algorithms_question_serializer.data, safe=False,status=200)                        