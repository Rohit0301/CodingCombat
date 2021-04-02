"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://d               ocs.djangoproject.com/en/3.1/topics/http/urls/
    Examples:
    Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.views.decorators.csrf import csrf_exempt
from Authentication.views import GoogleLogin,GithubLogin,TwitterLogin,LinkedInLogin,FacebookLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('Algorithms.urls')),
    # path('accounts/',(include('allauth.urls'))),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('rest-auth/github/', GithubLogin.as_view(), name='github_login'),
    path('rest-auth/linkedin/', LinkedInLogin.as_view(), name='linkedin_login'),
    path('rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),

    path('',include('DataStructures.urls')),
]
