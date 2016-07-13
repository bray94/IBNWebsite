#! /usr/local/bin/python
import cgi


form = cgi.FieldStorage()

fullName =  form.getvalue('fullName')
email =  form.getvalue('email')
password =  form.getvalue('password')
retypePassword =  form.getvalue('retypePassword')

file = open("info.txt", "a+")

entry = "%s %s %s %s\n" % (fullName, email, password, retypePassword)
file.write(entry)

file.close()

print "Content-Type: text/html"
print

print "Info submitted!"