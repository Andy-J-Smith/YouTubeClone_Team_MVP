from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('<int:comment>/', views.user_reply),
    path('all/', views.get_all_replies),
]