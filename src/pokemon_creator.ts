export { PokemonCreator } 
import { FighterCreator } from './fighter_creator';
import { Fighter } from './fighter';
import { Pokemon } from './pokemon';
import { Types } from './pokemon';

/**
 * Clase creadora de Pokemons, extiende a la creadora de Luchadores
 */
class PokemonCreator extends FighterCreator {
  /**
   * Constructor de la clase creadora de Pokemons
   * @param name Nombre del Pokemon
   * @param type Tipo del Pokemon
   * @param attack Ataque del Pokemon
   * @param defense Defensa del Pokemon
   * @param speed Velocidad del Pokemon
   * @param HP Vida del Pokemon
   */
  constructor(private name: string, private type: Types,  
              private attack: number, private defense: number,
              private speed: number, private HP: number) {
    super();
  }

  /**
   * Factory Method, crea y devuelve un objeto Pokemon (Luchador)
   * @returns un objeto Fighter (luchador)
   */
  public factoryMethod(): Fighter {
    return new Pokemon(this.name, this.type, this.attack, this.defense, 
                       this.speed, this.HP);
  }
}