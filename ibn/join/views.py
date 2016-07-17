from django.shortcuts import render

# Create your views here.

#from join.join_form.py import JoinForm
from django.http import HttpResponse
import MySQLdb

def join(request):
	#return HttpResponse(request.method)
	if request.method == 'POST':
		# db = MySQLdb.connect("localhost","root","Nedyarb94","myibn" )
		# cursor = db.cursor()

		file = open("users.txt", "a")

		error = False
		fullName = request.POST.get('fullName', '')
		email = request.POST.get('email', '')
		password = request.POST.get('password', '')
		retypePassword = request.POST.get('retypePassword', '')

		noName = False
		noEmail = False
		noPassword = False
		noRetypePassword = False

		if not fullName: noName = True
		if not email: noEmail = True
		if not password: noPassword = True
		if not retypePassword: noRetypePassword = True

		firstName , lastName = (fullName.split()[0],fullName.split()[1]) 

		sql = """INSERT INTO users(firstName, lastName, email, password) VALUES ('%s', '%s', '%s', %s)""" % (firstName, lastName, email, password)

  #     	failed = False
		# try:
		# 	# Execute the SQL command
		# 	cursor.execute(sql)
		# 	# Commit your changes in the database

		# 	db.commit()
		# except:
		# 	# Rollback in case there is any error
		# 	db.rollback()
		# 	failed = True

		# db.close()

		file.write(sql)
		file.close()

		return render(request, 'under_construction.html', {'name': firstName})

	else:
		return render(request, 'join.html')

