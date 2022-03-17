from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comment),
    path('all/', views.get_all_comments),
    path('<int:pk>/', views.update_comment),
]