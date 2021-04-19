from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
  path("Algorithms/",views.Algorithms,name="Algorithms"),
  path("Algorithm/<str:algorithm>/Videos/",views.Algorithmvideos,name="Algorithmvideos"),
  path("Algorithm/<str:algorithm>/Blogs/",views.Algorithmblogs,name="Algorithmblogs"),
  path("Algorithm/<str:algorithm>/Questions/",views.Algorithmquestions,name="Algorithmquestions")
]