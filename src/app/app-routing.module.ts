import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { 
    path: "", 
    component: PokemonListComponent, // Usa la clase del componente, no una cadena de texto
    pathMatch: 'full' // Asegura que la ruta coincida exactamente
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
