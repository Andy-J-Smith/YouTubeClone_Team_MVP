from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Reply
from .serializers import ReplySerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request):
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_reply(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        replies = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_reply(request):
    reply = get_object_or_404(Reply, pk=pk)
    serializer = ReplySerializer(reply, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.htt)

