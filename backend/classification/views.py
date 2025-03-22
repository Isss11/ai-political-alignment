from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import classify_text
from .models import Classification
import json
import datetime

# Create your views here.
@api_view(['POST'])
def classification(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        
        party = classify_text(body['text'])
        classification = Classification.objects.create(text=body['text'], party=party, date_created=datetime.date.today(), date_updated=datetime.date.today())
        
        print(f"Classification created {classification}.")
        
        return Response(party)
