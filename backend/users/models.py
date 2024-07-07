# users/models.py

from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

class Friend(models.Model):
    user = models.ForeignKey(User, related_name='friends', on_delete=models.CASCADE)
    friend_name = models.CharField(max_length=100)
    friend_email = models.EmailField(default="unknown@example.com")  # Example default value

    def __str__(self):
        return f"{self.friend_name} ({self.friend_email})"
