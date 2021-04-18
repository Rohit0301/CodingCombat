from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
  path("DataStructures/",views.DataStructures,name="DataStructures"),
  path("DataStructure/<str:datastructure>/Videos/"   ,views.DataStructurevideos   ,name="DataStructurevideos"),
  path("DataStructure/<str:datastructure>/Blogs/"    ,views.DataStructureblogs    ,name="DataStructureblogs"),
  path("DataStructure/<str:datastructure>/Questions/",views.DataStructurequestions,name="DataStructurequestions")
]