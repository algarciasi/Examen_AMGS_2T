import { Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductoviewComponent } from './pages/productoview/productoview.component';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "home"},
    {path: "home", component: ProductlistComponent},
    {path:"producto/:_id", component: ProductoviewComponent},
    {path:"**", redirectTo: "Error 404"}
];
