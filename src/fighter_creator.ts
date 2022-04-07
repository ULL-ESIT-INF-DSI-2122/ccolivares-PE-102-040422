export { FighterCreator };
import { Fighter } from './fighter';


abstract class FighterCreator {
  public abstract factoryMethod(): Fighter;
  
  public logic(): string {
    const fighter = this.factoryMethod();
    return `El luchador ${fighter.getName()} ` +
           `tiene ${fighter.getAttack()} de ataque y ` +
           `${fighter.getDefense()} de defensa. ` +
           `Posee ${fighter.getHP()} de vida y ` +
           `${fighter.getSpeed()} puntos de velocidad.`;
  }
}