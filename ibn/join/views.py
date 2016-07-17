from django.shortcuts import render

# Create your views here.

#from join.join_form.py import JoinForm
from django.http import HttpResponse

def join(request):
	if request.method == 'GET':
		error = False
	    if 'fullName' in request.GET and 'email' in request.GET and 'password' in request.GET and 'retypePassword' in request.GET:
	        fullName = request.GET['fullName']
	        email = request.GET['email']
	        password = request.GET['password']
	        retypePassword = request.GET['retypePassword']

	        noName = False
	        noEmail = False
	        noPassword = False
	        noRetypePassword = False

	        if not fullName:
	            noName = True

	        if not email:
	            noEmail = True

	        if not password:
	            noPassword = True

	        if not retypePassword:
	            noRetypePassword = True

	        else:
	        	firstName = fullName.split()[0]
	            return render(request, 'under_construction.html',
	                {'name': firstName})
	else:
		return render(request, 'join.html')

