from rest_framework import serializers 
from .models import Algorithm,AlgorithmsBlog,AlgorithmsQuestion,AlgorithmsVideo
 
 
class AlgorithmSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Algorithm
        fields = ('id',
                  'Algorithm_Name'
                 )

class AlgorithmVideoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = AlgorithmsVideo
        fields = ('id',
                   'Algorithm_Video_Title',
                   'Algorithm_Video_URL',
                   'Algorithms_Video_Image',
                  'Algorithm_Name'
                 )

class AlgorithmBlogSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = AlgorithmsBlog
        fields = ('id',
                   'Algorithm_Blog_Title',
                   'Algorithm_Blog_URL',
                  'Algorithm_Name'
                 )

class AlgorithmQuestionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = AlgorithmsQuestion
        fields = ('id',
                   'Algorithm_Question_Title',
                   'Algorithm_Question_Link',
                   'Algorithm_Question_Difficulty',
                   'Algorithm_Question_Editorial'
                  'Algorithm_Name'
                 )
        