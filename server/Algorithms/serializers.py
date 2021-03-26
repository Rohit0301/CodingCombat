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
                  'Algorithm_Name'
                 )