import { Injectable } from '@angular/core';
import { MenuItems } from '../models/enums/MenuItems';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private activeMenuItem: string;

  constructor() {
    this.activeMenuItem = MenuItems.HOME;
  }

  public setActiveMenuItem(item: string): void {
    this.activeMenuItem = item;
  }

  public getActiveMenuItem(): string {
    return this.activeMenuItem;
  }

}
