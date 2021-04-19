from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
  path("DataStructures/",views.DataStructures,name="DataStructures"),
<<<<<<< HEAD:server/server/DataStructures/urls.py
  path("DataStructure/<str:datastructure>/Videos/",views.DataStructurevideos,name="DataStructurevideos"),
  path("DataStructure/<str:datastructure>/Blogs/",views.DataStructureblogs,name="DataStructureblogs"),
=======
  path("DataStructure/<str:datastructure>/Videos/"   ,views.DataStructurevideos   ,name="DataStructurevideos"),
  path("DataStructure/<str:datastructure>/Blogs/"    ,views.DataStructureblogs    ,name="DataStructureblogs"),
>>>>>>> 6812e3f8001959c69d7711601360969404e16c7e:server/DataStructures/urls.py
  path("DataStructure/<str:datastructure>/Questions/",views.DataStructurequestions,name="DataStructurequestions")
]