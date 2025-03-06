import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = []; // Lista de Pokémon
  selectedPokemon: any = null; // Pokémon seleccionado para mostrar detalles
  offset = 0; // Offset para la paginación
  limit = 20; // Límite de Pokémon por página

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  // Cargar la lista de Pokémon
  loadPokemonList(): void {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe({
      next: (data: any) => {
        data.results.forEach((pokemon: any) => {
          // Obtener detalles de cada Pokémon
          this.pokemonService.getPokemonDetails(pokemon.url).subscribe({
            next: (details: any) => {
              this.pokemonList.push(details); // Añadir detalles a la lista
            },
            error: (err) => {
              console.error('Error al obtener detalles del Pokémon:', err);
            },
          });
        });
      },
      error: (err) => {
        console.error('Error al obtener la lista de Pokémon:', err);
      },
    });
  }

  // Mostrar detalles de un Pokémon
  showPokemonDetails(pokemon: any): void {
    this.selectedPokemon = pokemon;
  }

  // Cerrar el modal de detalles
  closePokemonDetails(): void {
    this.selectedPokemon = null;
  }
}
