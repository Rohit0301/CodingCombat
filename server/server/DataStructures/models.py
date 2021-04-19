from django.db import models

# Create your models here.
class DataStructure(models.Model):
    DataStructure_Name = models.CharField(max_length=50,default=None)
    def __str__(self):
        return self.DataStructure_Name
 
class DataStructureVideo(models.Model):
    DataStructure_Video_Title=models.CharField(max_length=150,default=None)
    DataStructure_Video_URL=models.URLField(max_length=200,default=None)
    DataStructures_Video_Image=models.ImageField(upload_to='static/',default=None)
    DataStructure_Name=models.ForeignKey(DataStructure, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.DataStructure_Video_Title  

class DataStructureBlog(models.Model):
    DataStructure_Blog_Title=models.CharField(max_length=150,default=None)
    DataStructure_Blog_URL=models.URLField(max_length=200,default=None)
    DataStructure_Name=models.ForeignKey(DataStructure, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.DataStructure_Blog_Title

class DataStructureQuestion(models.Model):
    DataStructure_Question_Title=models.CharField(max_length=100,default=None)
    DataStructure_Question_Link=models.URLField(max_length=200,default=None)
    DataStructure_Question_Difficulty=models.CharField(max_length=4,default=None)
    DataStructure_Question_Editorial=models.URLField(max_length=200,blank=True,null=True,default=None)
    DataStructure_Name=models.ForeignKey(DataStructure, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.DataStructure_Question_Title

