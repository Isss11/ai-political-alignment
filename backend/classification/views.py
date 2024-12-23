from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
@api_view(['POST'])
def classify(request):
    if request.method == 'POST':
        return Response('TEST')
