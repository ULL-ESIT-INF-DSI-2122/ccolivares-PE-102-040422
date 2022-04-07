export { PokemonCreator } 
import { FighterCreator } from './fighter_creator';
import { Fighter } from './fighter';
import { Pokemon } from './pokemon';
import { Types } from './pokemon';


class PokemonCreator extends FighterCreator {
  constructor(private name: string, private type: Types,  
              private attack: number, private defense: number,
              private speed: number, private HP: number) {
    super();
  }
  
  public factoryMethod(): Fighter {
    return new Pokemon(this.name, this.type, this.attack, this.defense, 
                       this.speed, this.HP);
  }
}