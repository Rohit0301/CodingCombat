from django.contrib import admin
from .models import Algorithm,AlgorithmsBlog,AlgorithmsQuestion,AlgorithmsVideo
# Register your models here.
admin.site.register(Algorithm)
admin.site.register(AlgorithmsVideo)
admin.site.register(AlgorithmsBlog)
admin.site.register(AlgorithmsQuestion)