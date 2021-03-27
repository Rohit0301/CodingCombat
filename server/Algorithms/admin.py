from django.contrib import admin
from .models import Algorithm,AlgorithmBlog,AlgorithmQuestion,AlgorithmVideo
# Register your models here.
admin.site.register(Algorithm)
admin.site.register(AlgorithmVideo)
admin.site.register(AlgorithmBlog)
admin.site.register(AlgorithmQuestion)