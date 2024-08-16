from django.db import models

# Create your models here.
class Apartment(models.Model):
    name = models.CharField(max_length=100)
    
    # description = models.TextField(blank=True, null=True)
    
    # price = models.IntegerField(blank=True, null=True)
    
    # address = models.CharField(max_length=100, blank=True, null=True)
    # city = models.CharField(max_length=100, blank=True, null=True)
    # state = models.CharField(max_length=100, blank=True, null=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name