from django.urls import path
from .views import CategoryView, ProductView, OrderView, OrderItemView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('products/', ProductView.as_view()),
    path('orders/', OrderView.as_view()),
    path('order-items/', OrderItemView.as_view()),
]