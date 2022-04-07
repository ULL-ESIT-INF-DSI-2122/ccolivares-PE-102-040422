export { FighterCreator };
import { Fighter } from './fighter';

/**
 * Clase abstracta creadora de luchadores
 */
abstract class FighterCreator {
  /**
   * Factory Method a implementar por las clases hijas
   */
  public abstract factoryMethod(): Fighter;
  
  /**
   * Método Logic para devolver la información formateada
   * @returns cadena con la informacion del luchador
   */
  public logic(): string {
    const fighter = this.factoryMethod();
    return `El luchador ${fighter.getName()} ` +
           `tiene ${fighter.getAttack()} de ataque y ` +
           `${fighter.getDefense()} de defensa. ` +
           `Posee ${fighter.getHP()} de vida y ` +
           `${fighter.getSpeed()} puntos de velocidad.`;
  }
}