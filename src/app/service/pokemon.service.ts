import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener la lista de Pokémon
  getPokemonList(offset: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get(url); // Devuelve un Observable
  }

  // Obtener detalles de un Pokémon por su URL
  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url); // Devuelve un Observable
  }
}