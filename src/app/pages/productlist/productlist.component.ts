import { Component, inject } from '@angular/core';
import { Producto } from '../../interface/producto';
import { ProductosService } from '../../services/productos.service';
import { ProductcardComponent } from "../../components/productcard/productcard.component";

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  arrProductos: Producto[];
  productoService = inject(ProductosService);

  //paginacion de 6
  pag: number =1;
  items:number = 6;

  constructor(){
    this.arrProductos=[];
  }

  ngOnInit():void {
    this.productoService.getAllWithObservables().subscribe(
      (data:any) =>{
        this.arrProductos = data.results;
      });
  }


  // Paginacion

  get productosPaginados(): Producto[] {
    const inicio = (this.pag - 1) * this.items;
    return this.arrProductos.slice(inicio, inicio + this.items);
  }

  paginaAnterior() {
    if (this.pag > 1) {
      this.pag--;
    }
  }

  paginaSiguiente() {
    if (this.pag < Math.ceil(this.arrProductos.length / this.items)) {
      this.pag++;
    }
  }

  get totalPaginas(): number {
    return Math.ceil(this.arrProductos.length / this.items);
}

}
