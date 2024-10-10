import { Injectable } from '@angular/core';
import AccessoryList from '../../interface/accessory-list';

@Injectable({
  providedIn: 'root'
})
export class AccessoryListServicesService {
  private accessories: AccessoryList[] = [];

  constructor() { }

  addAccessory(
    name: string, 
    description: string, 
    type: string, 
    price: number, 
    category: string
  ): void {
    this.accessories.push({
      name: name,
      description: description,
      price: price,
      type: type,
      category: category
    });
  }

  getAccessories(): AccessoryList[] {
    return this.accessories;
  }
}
