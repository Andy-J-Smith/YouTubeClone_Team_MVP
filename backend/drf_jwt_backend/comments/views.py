from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Comment
from .serializers import CommentsSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_comment(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer=CommentsSerializer(comments, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    
