from rest_framework import serializers
from .models import User, Friend

class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    friends = FriendSerializer(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = '__all__'