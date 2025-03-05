import { Component, inject } from '@angular/core';
import { Producto } from '../../interface/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  arrProductos: Producto[];
  productoService = inject(ProductosService);

  constructor(){
    this.arrProductos=[];
  }

}
