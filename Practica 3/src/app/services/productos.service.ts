import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/productos';

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}


/*import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Producto } from "../models/producto.model";
@Injectable({providedIn:'root'})
export class ProductService{
  
    constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getAll(): Observable<Producto[]> {
 
    

    // Pedimos el XML como texto plano
    return this.http.get('/productos.xml', { responseType: 'text' }).pipe(
    map((xmlText) => this.parseProductsXml(xmlText))
    );
  }

  private parseProductsXml(xmlText: string): Producto[] {
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, 'application/xml');

    // Si el XML está mal formado, normalmente aparece <parsererror>
    if (doc.getElementsByTagName('parsererror').length > 0) {
      return [];
    }

    const nodes = Array.from(doc.getElementsByTagName('producto'));

    return nodes.map((node) => ({
      id: this.getNumber(node, 'id'),
      name: this.getText(node, 'name'),
      price: this.getNumber(node, 'price'),
      imageUrl: this.getText(node, 'imageUrl'),
      category: this.getText(node, 'category'),
      description: this.getText(node, 'description'),
      inStock: this.getBoolean(node, 'inStock'),
    }));
  }

  private getText(parent: Element, tag: string): string {
    return parent.getElementsByTagName(tag)[0]?.textContent?.trim() ?? '';
  }

  private getNumber(parent: Element, tag: string): number {
    const value = this.getText(parent, tag);
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  private getBoolean(parent: Element, tag: string): boolean {
    const value = this.getText(parent, tag).toLowerCase();
    return value === 'true' || value === '1' || value === 'yes';
  }


}*/