from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from rest_framework import serializers


class UserCreationSerializer(serializers.ModelSerializer):
    class Meta :
        model =User
        fields = ("username","password")
        extra_kwargs={"password":{"write_only":True}}
        
    def create(self,vaildataed_data):
        user=User.objects.create_user(**vaildataed_data)
        return user


