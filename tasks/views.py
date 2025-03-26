from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import task

# Create your views here.


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = task.objects.all()