from django.shortcuts import render

# Create your views here.

#from join.join_form.py import JoinForm
from django.http import HttpResponse

def join(request):
	return render(request, 'join.html')




