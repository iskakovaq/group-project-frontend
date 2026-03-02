import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // ===== SMARTPHONES =====
    {
      id: 1,
      name: 'Apple iPhone 15',
      description: 'Apple iPhone 15 128GB',
      price: 499000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h71/68949033825758/apple-iphone-15-128gb-chernyj-106568312-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-106568312/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Samsung Galaxy S24 256GB',
      price: 369990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hd3/68546006136862/samsung-galaxy-s24-256gb-chernyi-105241010-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-chernyi-105241010/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14',
      description: 'Xiaomi 14 256GB',
      price: 319990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h8e/69058362508830/xiaomi-14-256gb-chernyj-106786142-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-14-256gb-chernyi-106786142/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8',
      description: 'Google Pixel 8 128GB',
      price: 289990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h92/69354005445118/google-pixel-8-128gb-chernyj-107741770-1.jpg',
      link: 'https://kaspi.kz/shop/p/google-pixel-8-128gb-chernyi-107741770/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'OnePlus 12 256GB',
      price: 349990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h10/69123020728318/oneplus-12-256gb-chernyi-107001281-1.jpg',
      link: 'https://kaspi.kz/shop/p/oneplus-12-256gb-chernyi-107001281/',
      likes: 0,
      categoryId: 1
    },

    // ===== LAPTOPS =====
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Apple MacBook Air 13" M2',
      price: 529990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/h92/68785406065662/apple-macbook-air-13-m2-256gb-seryj-105748410-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-seryi-105748410/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Dell XPS 13',
      description: 'Dell XPS 13 9315',
      price: 499990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/hd6/68546396835358/dell-xps-13-9315-silver-105286705-1.jpg',
      link: 'https://kaspi.kz/shop/p/dell-xps-13-9315-silver-105286705/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'HP Spectre x360',
      description: 'HP Spectre x360 13',
      price: 459990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/h96/68985273111518/hp-spectre-x360-13-aw2003dx-16gb-512gb-seryj-106323133-1.jpg',
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-13-aw2003dx-16gb-512gb-seryi-106323133/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo ThinkPad X1',
      description: 'Lenovo ThinkPad X1 Carbon',
      price: 489990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h21/68789202958878/lenovo-thinkpad-x1-carbon-14-seryj-104063220-1.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-14-seryi-104063220/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'ASUS ROG Strix',
      description: 'ASUS ROG Strix G15',
      price: 479990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h2e/68951032968158/asus-rog-strix-g15-g513rc-16gb-512gb-cernyj-106342296-1.jpg',
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513rc-16gb-512gb-cernyi-106342296/',
      likes: 0,
      categoryId: 2
    },

    // ===== HEADPHONES =====
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description: 'Sony WH-1000XM5 Wireless',
      price: 179990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h9c/68950978241502/sony-wh-1000xm5-chernyj-106265302-1.jpg',
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-106265302/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Apple AirPods Pro',
      description: 'Apple AirPods Pro 2nd Gen',
      price: 129990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/hd5/68672949875742/apple-airpods-pro-2-seryj-105116320-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-seryi-105116320/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort 45',
      description: 'Bose QuietComfort 45',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/hfd/68985071268318/bose-quietcomfort-45-chernyj-106340708-1.jpg',
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-106340708/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'JBL Charge 5',
      description: 'JBL Charge 5 Bluetooth',
      price: 79990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h76/68826827111966/jbl-charge-5-cernyj-106306543-1.jpg',
      link: 'https://kaspi.kz/shop/p/jbl-charge-5-cernyi-106306543/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Samsung Galaxy Buds2',
      description: 'Samsung Galaxy Buds2',
      price: 74990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h26/68681194484766/samsung-galaxy-buds2-belyj-105172101-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-belyi-105172101/',
      likes: 0,
      categoryId: 3
    },

    // ===== TABLETS =====
    {
      id: 16,
      name: 'Apple iPad Air 5',
      description: 'Apple iPad Air 5 64GB',
      price: 289990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/hfc/68642576119294/apple-ipad-air-5-64gb-seryj-104694119-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-64gb-seryi-104694119/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'Samsung Galaxy Tab S9',
      price: 339990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h32/68951015899614/samsung-galaxy-tab-s9-128gb-cernyj-106356853-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-cernyi-106356853/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Lenovo Tab P11',
      description: 'Lenovo Tab P11 128GB',
      price: 159990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/h31/69079321018302/lenovo-tab-p11-128gb-seryj-107180660-1.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-128gb-seryi-107180660/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6',
      description: 'Xiaomi Pad 6 128GB',
      price: 189990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h96/68833044204030/xiaomi-pad-6-128gb-seryj-105691503-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-128gb-seryi-105691503/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Huawei MatePad',
      description: 'Huawei MatePad 10.4',
      price: 199990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hb6/68789169321918/huawei-matepad-10-4-64gb-serebristyj-104770676-1.jpg',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-10-4-64gb-serebristyi-104770676/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}