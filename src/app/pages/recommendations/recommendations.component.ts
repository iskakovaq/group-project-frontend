import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html'
})
export class RecommendationsComponent {

  profile: any = {};
  recommendations: any[] = [];
  selectedProduct: any = null;

  allProducts = [
    { id: 1, name: 'CeraVe Cleanser', type: 'Cleanser', skin: 'acne', image: 'https://avatars.mds.yandex.net/i?id=0b1a457ea460dc37cd8d190e9f017ebde129a7c7-5257484-images-thumbs&n=13' },
    { id: 2, name: 'Niacinamide Serum', type: 'Serum', skin: 'acne', image: 'https://avatars.mds.yandex.net/i?id=36d937e1be70efe2a8a834eb5bc72fcdd397ee27-12472858-images-thumbs&n=13' },
    { id: 3, name: 'Hydrating Cream', type: 'Cream', skin: 'dry', image: 'https://avatars.mds.yandex.net/i?id=d4bcc96a08b1b8cd337343b7fe768699-4351356-images-thumbs&n=13' },
    { id: 4, name: 'Tea Tree Cream', type: 'Treatment', skin: 'oily', image: 'https://avatars.mds.yandex.net/i?id=2ebe776ff08f5647c2de2e17158b5cd5b5fa46f4-5250851-images-thumbs&n=13' },
    { id: 5, name: 'Hyaluronic Acid toner', type: 'Serum', skin: 'dry', image: 'https://avatars.mds.yandex.net/i?id=bcfd690d88614202ff142323d0f83455b66a4340-5243437-images-thumbs&n=13' },
    { id: 6, name: 'Vitamin C Serum', type: 'Serum', skin: 'all', image: 'https://avatars.mds.yandex.net/i?id=d701c3b2a69b16da50522dff60f5f9ce2129c344-5673334-images-thumbs&n=13' },
    { id: 7, name: 'Moisturizer SPF', type: 'Cream', skin: 'all', image: 'https://avatars.mds.yandex.net/i?id=5824ea15278ceb0aa1d93d58b4a4a248e342d382-5888323-images-thumbs&n=13' },
    { id: 8, name: 'Night Repair Cream', type: 'Cream', skin: 'dry', image: 'https://avatars.mds.yandex.net/i?id=ce54e7b9f6aa3ffcf720f517cff2ef6bfb690218-5243975-images-thumbs&n=13' },
    { id: 9, name: 'Face Toner', type: 'Toner', skin: 'oily', image: 'https://avatars.mds.yandex.net/i?id=08d7bf1d213639311fc5423f0866b5bc41bd53a4-10512701-images-thumbs&n=13' },
    { id: 10, name: 'Eye Cream', type: 'Care', skin: 'all', image: 'https://avatars.mds.yandex.net/i?id=29ba43ae64f76ca417729f3d9db162addb939ceb-3923189-images-thumbs&n=13' }
  ];

  constructor() {
    this.profile = JSON.parse(localStorage.getItem('skinProfile') || '{}');
    this.generateRecommendations();
  }

  generateRecommendations() {
    const skin = this.profile.skinType;

    this.recommendations = this.allProducts.filter(p =>
      p.skin === skin || p.skin === 'all'
    );
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  getReason(product: any): string {

    if (product.skin === this.profile.skinType) {
      return "Perfect match for your skin type. Targets your skin concerns directly.";
    }

    if (product.skin === 'all') {
      return "Universal product suitable for all skin types. Safe and gentle.";
    }

    return "Helps improve skin condition and balance.";
  }
}