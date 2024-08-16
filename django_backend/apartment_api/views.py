from .models import Apartment
from rest_framework import viewsets
from apartment_api.serializers import ApartmentSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class ApartmentViewSet(viewsets.ViewSet):
    queryset = Apartment.objects.all()
    serializer_class = ApartmentSerializer
    permission_classes = [AllowAny] # allow any user to access the api at this point
