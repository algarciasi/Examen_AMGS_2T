import { Component, Input } from '@angular/core';
import { Producto } from '../../interface/producto';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {

  @Input() miProducto!: Producto;


}
