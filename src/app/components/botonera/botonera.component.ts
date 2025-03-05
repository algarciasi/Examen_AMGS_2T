import { Component, inject, Input } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {


  productoService = inject(ProductosService);
  router = inject(Router);

  @Input() _id:string;
  @Input() parent : string;
  
  constructor(){
    this._id="";
    this.parent="";
  }

  borrarProducto(_id: string): void {
    let confirmacion = confirm('¿Está seguro de que quiere eliminar el producto: ' + _id);
    
    if (confirmacion) {
      this.productoService.borrar(_id).subscribe({
        next: (response: any) => {
          if (response._id) {
            alert('Se ha borrado correctamente el producto ' + response.name);
            
            if (this.parent === 'view') {
              this.router.navigate(['/home']);
            } else if (this.parent === 'card') {
              location.reload();
            }
          }
        },
        error: (err: any) => {
          console.error('Error al eliminar el producto:', err);
          alert('Hubo un error al intentar eliminar el producto.');
        }
      });
    }
  }

}
