from rest_framework import routers

from apartment_api.views import Apartment

router = routers.DefaultRouter()
router.register(r'apartment', Apartment, basename='apartment')

urlpatterns = router.urls

