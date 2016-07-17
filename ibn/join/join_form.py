from django import forms

class JoinForm(forms.Form):
	fullName = forms.CharField(max_length = 100)
	email = forms.charField(max_length = 100)
	password = forms.CharField(max_length = 100)
	retypePassword = form.CharField(max_length = 100)


