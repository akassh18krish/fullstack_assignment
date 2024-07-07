from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, FriendViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'friends', FriendViewSet)

urlpatterns = [
    path('', include(router.urls)),
]