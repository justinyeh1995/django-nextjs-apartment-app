from rest_framework import serializers
from .models import Apartment

class ApartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Apartment
        fields = ['name','id']
        read_only_fields = ['id']
        # fields = ['name', 'description', 'price', 'address', 'city', 'state', 'created_at', 'updated_at', 'id']
        # read_only_fields = ['created_at', 'updated_at', 'id']
