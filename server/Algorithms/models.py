from django.db import models

# Create your models here.
class Algorithm(models.Model):
    Algorithm_Name = models.CharField(max_length=50,default=None)
    def __str__(self):
        return self.Algorithm_Name
 
class AlgorithmVideo(models.Model):
    Algorithm_Video_Title=models.CharField(max_length=150,default=None)
    Algorithm_Video_URL=models.URLField(max_length=200,default=None)
    Algorithms_Video_Image=models.ImageField(upload_to='static/',default=None)
    Algorithm_Name=models.ForeignKey(Algorithm, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.Algorithm_Video_Title  

class AlgorithmBlog(models.Model):
    Algorithm_Blog_Title=models.CharField(max_length=150,default=None)
    Algorithm_Blog_URL=models.URLField(max_length=200,default=None)
    Algorithm_Name=models.ForeignKey(Algorithm, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.Algorithm_Blog_Title

class AlgorithmQuestion(models.Model):
    Algorithm_Question_Title=models.CharField(max_length=100,default=None)
    Algorithm_Question_Link=models.URLField(max_length=200,default=None)
    Algorithm_Question_Difficulty=models.CharField(max_length=4,default=None)
    Algorithm_Question_Editorial=models.URLField(max_length=200,blank=True,null=True,default=None)
    Algorithm_Name=models.ForeignKey(Algorithm, on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.Algorithm_Question_Title

