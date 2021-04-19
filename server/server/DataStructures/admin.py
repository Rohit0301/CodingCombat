from django.contrib import admin
from .models import DataStructure,DataStructureBlog,DataStructureQuestion,DataStructureVideo
# Register your models here.
admin.site.register(DataStructure)
admin.site.register(DataStructureVideo)
admin.site.register(DataStructureBlog)
admin.site.register(DataStructureQuestion)