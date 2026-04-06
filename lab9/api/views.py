from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    ViewSet для работы с категориями.
    Автоматически поддерживает:
    - GET /api/categories/
    - GET /api/categories/<id>/
    - POST /api/categories/
    - PUT /api/categories/<id>/
    - DELETE /api/categories/<id>/
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        """
        Кастомный action:
        GET /api/categories/<id>/products/
        Возвращает все продукты категории
        """
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    """
    ViewSet для работы с продуктами.
    Автоматически поддерживает:
    - GET /api/products/
    - GET /api/products/<id>/
    - POST /api/products/
    - PUT /api/products/<id>/
    - DELETE /api/products/<id>/
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer