export { Pokemon };
export { Types };
import { Fighter } from './fighter';

/**
 * Tipo Enum que representa los tipos de los Pokemon
 */
enum Types {fire, water, grass, electric};

/**
 * Clase que representa a un Pokemon
 */
class Pokemon implements Fighter {
  /**
   * Clase Pokémon ( Fighter )
   * @param name Nombre del Pokémon
   * @param type Tipo del Pokémon (fuego, agua, hierba, electrico)
   * @param attack Ataque del Pokémon
   * @param defense Defensa del Pokémon
   * @param speed Velocidad del Pokémon (decide quién ataca)
   * @param HP Vida del Pokémon
   */
  constructor(private name: string, private type: Types,  
              private attack: number, private defense: number,
              private speed: number, private HP: number){
  }

  getName() : string {
    return this.name;
  }
  getAttack() : number {
    return this.attack;
  }
  getDefense() : number {
    return this.defense;
  }
  getHP() : number {
    return this.HP;
  }
  getSpeed() : number {
    return this.speed;
  }
  getType() : Types {
    return this.type;
  }
}