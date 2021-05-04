from django.conf.urls import url
from django.contrib import admin
import hello.views as hello

urlpatterns = [
    url(r'admin/', admin.site.urls),
    url('hello/', hello.index),
]

