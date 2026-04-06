from django.contrib import admin
from .models import Category, Product

# Если модель уже зарегистрирована, снимаем старую регистрацию
try:
    admin.site.unregister(Category)
except admin.sites.NotRegistered:
    pass

try:
    admin.site.unregister(Product)
except admin.sites.NotRegistered:
    pass

# Регистрируем модели заново
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'count', 'is_active', 'category')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'description')