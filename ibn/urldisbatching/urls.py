from django.conf.urls import url, patterns, include
from django.contrib import admin

from . import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^join/', views.join),
	url(r'^login/', views.login),
]
