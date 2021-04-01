from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
  path("DataStructures/",views.DataStructures,name="DataStructures"),
  path("DataStructure/<str:DataStructure>/Videos/",views.DataStructurevideos,name="DataStructurevideos"),
  path("DataStructure/<str:DataStructure>/Blogs/",views.DataStructureblogs,name="DataStructureblogs"),
  path("DataStructure/<str:DataStructure>/Questions/",views.DataStructurequestions,name="DataStructurequestions")
]