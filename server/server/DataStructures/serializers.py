from rest_framework import serializers 
from .models import DataStructure,DataStructureBlog,DataStructureQuestion,DataStructureVideo
 
 
class DataStructureSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DataStructure
        fields = ('id',
                  'DataStructure_Name'
                 )

class DataStructureVideoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DataStructureVideo
        fields = ('id',
                   'DataStructure_Video_Title',
                   'DataStructure_Video_URL',
                   'DataStructures_Video_Image',
                  'DataStructure_Name'
                 )

class DataStructureBlogSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DataStructureBlog
        fields = ('id',
                   'DataStructure_Blog_Title',
                   'DataStructure_Blog_URL',
                  'DataStructure_Name'
                 )

class DataStructureQuestionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DataStructureQuestion
        fields = ('id',
                   'DataStructure_Question_Title',
                   'DataStructure_Question_Link',
                   'DataStructure_Question_Difficulty',
                   'DataStructure_Question_Editorial',
                  'DataStructure_Name'
                 )
        