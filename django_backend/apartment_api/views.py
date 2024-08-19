from rest_framework import viewsets
from .serializers import ApartmentSerializer
from .models import Apartment
# Create your views here.

class ApartmentViewSet(viewsets.ModelViewSet):
    queryset = Apartment.objects.all().order_by('id')
    serializer_class = ApartmentSerializer
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']
    # permission_classes = [AllowAny] # allow any user to access the api at this point
