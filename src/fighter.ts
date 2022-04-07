export { Fighter };

/**
 * Interfaz que representa a un luchador
 */
interface Fighter {
  getName(): string;
  getAttack(): number;
  getDefense(): number;
  getHP(): number;
  getSpeed(): number;
}