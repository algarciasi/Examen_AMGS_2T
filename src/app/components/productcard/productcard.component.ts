import { Component, Input } from '@angular/core';
import { Producto } from '../../interface/producto';
import { BotoneraComponent } from '../botonera/botonera.component';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {

  @Input() miProducto!: Producto;


}
