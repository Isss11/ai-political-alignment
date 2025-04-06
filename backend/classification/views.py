from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import classify_text
from .models import Classification
import json
from django.utils import timezone

# Create your views here.
@api_view(['POST'])
def classification(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        
        party = classify_text(body['text'])
        classification = Classification.objects.create(text=body['text'], party=party, model_version="pre-release", date_created=timezone.now(), date_updated=timezone.now())
        
        print(f"Classification created {classification}.")
        
        return Response(party)
