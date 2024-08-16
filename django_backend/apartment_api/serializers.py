from rest_framework import serializers
from apartment_api.models import Apartment

class ApartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Apartment
        fields = ['name', 'description', 'price', 'address', 'city', 'state', 'created_at', 'updated_at', 'id']
        read_only_fields = ['created_at', 'updated_at', 'id']
