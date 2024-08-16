from rest_framework import serializers
from apartment.models import Apartment

class ApartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Apartment
        fields = ['name', 'description', 'price', 'address', 'city', 'state', 'created_at', 'updated_at']
        read_only_fields = ['created', 'updated']
