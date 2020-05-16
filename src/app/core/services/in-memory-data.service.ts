import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from '../../shared/models/product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Array<Product> = [
      {
        id: 1,
        name: 'Jet ski',
        price: 1500,
        amount: 1,
        imgSrc: 'https://cdnmedia.endeavorsuite.com/images/catalogs/19213/products/detail/c3d6a1cb-1885-44d0-9ea4-7d88ef3fc29e.jpg',
        ref: 434556256
      },
      {
        id: 2,
        name: 'Bubble wrap',
        price: 440,
        amount: 1,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41%2BLqOngD0L._SX466_.jpg',
        ref: 345245865
      },
      {
        id: 3,
        name: 'Crock-pot',
        price: 55,
        amount: 1,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._SX466_.jpg',
        ref: 987123654
      }
    ];

    return {products};
  }
}
