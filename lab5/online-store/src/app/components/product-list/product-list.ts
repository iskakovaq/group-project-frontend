import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent {

  products = [
    { id: 1, name: 'Samsung Galaxy S23', description: 'Смартфон Samsung Galaxy S23 5G 8 ГБ/256 ГБ сиреневый', price: 499990, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-large', link: 'https://l.kaspi.kz/shop/H3Lc467ueYAS2uF'},
    { id: 2, name: 'Apple iPhone 14', description: 'Смартфон Apple iPhone 14 128Gb черный', price: 366000, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large', link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000' },
    { id: 3, name: 'Xiaomi Redmi Note 12', description: 'Смартфон Xiaomi Redmi Note 12 Pro+ 5G NFC 8 ГБ/256 ГБ черный', price: 122000, rating: 4.3, image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000' },
    { id: 4, name: 'Honor 70', description: 'Смартфон HONOR 400 Lite 8 ГБ/256 ГБ серый', price: 159990, rating: 4.4, image: 'https://resources.cdn-kaspi.kz/img/m/p/pd8/p7f/114132520.png?format=preview-large', link: 'https://kaspi.kz/shop/p/honor-400-lite-8-gb-256-gb-seryi-141492383/?c=750000000' },
    { id: 5, name: 'Samsung Galaxy A53', description: 'Смартфон Samsung Galaxy A36 5G 8 ГБ/256 ГБ черный', price: 208872, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=preview-large', link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-256-gb-chernyi-136435352/?c=750000000' },
    { id: 6, name: 'Apple iPhone 17 PRO MAX 256gb', description: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый', price: 889000, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000' },
    { id: 7, name: 'Xiaomi Poco X5 Pro', description: 'Смартфон Poco X5 5G 8 ГБ/256 ГБ зеленый', price: 223170, rating: 4.4, image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h71/86025926836254.png?format=preview-large', link: 'https://kaspi.kz/shop/p/poco-x5-5g-8-gb-256-gb-zelenyi-108887258/?c=750000000' },
    { id: 8, name: 'Samsung Galaxy Z Flip4', description: 'Складной смартфон с необычным дизайном.', price: 479000, rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h7d/63876404838430.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip-3-8-gb-128-gb-lavandovyi-102033458/?c=750000000' },
    { id: 9, name: 'MacBook Air', description: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A', price: 439980, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000' },
    { id: 10, name: 'Realme GT Neo 3', description: 'Быстрый смартфон с игровой производительностью и стильным дизайном.', price: 649990, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/pb4/96245343.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/realme-gt-8-pro-16-gb-512-gb-sinii-154805003/?c=750000000' }
  ];

  shareWhatsApp(productLink: string) {
    const url = 'https://wa.me/?text=' + encodeURIComponent('Смотри этот продукт: ' + productLink);
    window.open(url, '_blank');
  }

  shareTelegram(productLink: string, productName: string) {
    const url = 'https://t.me/share/url?url=' + encodeURIComponent(productLink) + '&text=' + encodeURIComponent(productName);
    window.open(url, '_blank');
  }

} 
