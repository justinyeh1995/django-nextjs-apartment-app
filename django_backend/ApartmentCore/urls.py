from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apartment_api.views import ApartmentViewSet

router = DefaultRouter()
router.register(r'apartment', ApartmentViewSet, basename='apartment')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/', include(router.urls)),
]

print("Router URLs:", router.urls)  # Keep this for debugging
print("All URLs:", urlpatterns)  # Keep this for debugging