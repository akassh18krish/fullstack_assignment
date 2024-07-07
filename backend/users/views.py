# users/views.py

from rest_framework import viewsets
from .models import User, Friend
from .serializers import UserSerializer, FriendSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer