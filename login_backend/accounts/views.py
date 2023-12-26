from django.contrib.auth.forms import UserCreationForm
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserCreationSerializer
from rest_framework import generics

#这里面创造了一个api

class SignUpView(generics.CreateAPIView):
    serializer_class = UserCreationSerializer
    
    def post(self, requset,*args, **kwargs):
        serializer = self.serializer_class(data=requset.data)
        if serializer.is_valid():
            user=serializer.save()
            return Response({"user_id":user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
