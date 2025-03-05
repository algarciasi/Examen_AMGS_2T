import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interface/producto';
import { BotoneraComponent } from '../../components/botonera/botonera.component';

@Component({
  selector: 'app-productoview',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './productoview.component.html',
  styleUrl: './productoview.component.css'
})
export class ProductoviewComponent {

  productoService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  
  miProducto!: Producto;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let _id: string = params._id as string;
  
      this.productoService.getByIdWithObservable(_id).subscribe({
        next: (productos) => {
          this.miProducto = productos; 
        },
        error: (err) => {
          console.error('Error al llamar a la API:', err);
        }
      });
      
    });
  }

}
