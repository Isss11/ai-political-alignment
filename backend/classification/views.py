from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import classify_text
import json

# Create your views here.
@api_view(['POST'])
def classify(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        
        print(body['general'])
        
        party_classification = classify_text(body['general'])
        
        return Response(party_classification)
