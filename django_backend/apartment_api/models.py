from django.db import models

# Create your models here.
class Apartment(models.Model):
    name = models.CharField(max_length=100)
    
    description = models.TextField()
    
    price = models.IntegerField()
    
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
        
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name