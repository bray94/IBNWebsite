"""
WSGI config for ibnhomes project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

# import os

# from django.core.wsgi import get_wsgi_application

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ibnhomes.settings")

# application = get_wsgi_application()

#from werkzeug.wrappers import Request, Response
# import re
# from cgi import escape


def application(environ, start_response):

    start_response('200 OK', [('Content-Type', 'text/html')])

    return ["Hi!"]
