
import os,sys

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ibnhomes.settings")

sys.path.append('/Users/braydenturner/Documents/IBN/IBNWebsite')
sys.path.append('/Users/braydenturner/Documents/IBN/IBNWebsite/ibnhomes')
sys.path.append('/Users/braydenturner/Documents/IBN/IBNWebsite/ibnhomes/ibnhomes')


from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()


# def application(environ, start_response):

# 	start_response('200 OK', [('Content-Type', 'text/html')])

# 	return ["<html><body><h1>Hello World</h1></body></html>"]