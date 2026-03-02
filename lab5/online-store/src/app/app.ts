import { Component, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductList } from './product-list';
import { ProductItem } from './product-item';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],

  // 👇 Важно для standalone-компонентов
  standalone: true,
  imports: [
    ProductList,
    ProductItem
  ]
})
export class AppComponent {

  categories: Category[] = [];
  products: Product[] = [];

  selectedCategory = signal<Category | null>(null);
  displayedProducts = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);

    const filtered = this.products.filter(p => p.categoryId === category.id);
    this.displayedProducts.set(filtered);
  }

  handleDelete(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);

    if (this.selectedCategory()) {
      this.displayedProducts.set(this.products.filter(
        p => p.categoryId === this.selectedCategory()!.id
      ));
    }
  }
}