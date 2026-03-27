import { Component, OnInit, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service'; 
import { Producto } from '../../models/producto.model'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-catalogo',       
  standalone: true,               
  imports: [CommonModule],        
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],  
})
export class CatalogoComponent implements OnInit {
  private productosService = inject(ProductosService);
  productos: Producto[] = [];

  ngOnInit(): void {
    
    
    this.productosService.getProductos().subscribe({
      next: (data: Producto[]) => {  
  this.productos = [...data]; 
        console.log('Productos recibidos: ', data);
      },
      error: (err: unknown) => {     
        console.error('Error al obtener productos: ', err);
      }
    });
  }
}