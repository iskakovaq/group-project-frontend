import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  getMockRecommendations() {
    return [
      {
        name: 'CeraVe Cleanser',
        type: 'Cleanser',
        image: 'https://avatars.mds.yandex.net/i?id=0b1a457ea460dc37cd8d190e9f017ebde129a7c7-5257484-images-thumbs&n=13'
      },
      {
        name: 'La Roche-Posay Moisturizer',
        type: 'Cream',
        image: 'https://avatars.mds.yandex.net/i?id=8ccaeaba4836bb865817b0467dddddf2b094ab42-6966404-images-thumbs&n=13'
      },
      {
        name: 'The Ordinary Niacinamide',
        type: 'Serum',
        image: 'https://avatars.mds.yandex.net/i?id=cd30b4b3968e37f82a162fa5512cf174b629b3ee-4262069-images-thumbs&n=13'
      }
    ];
  }
}