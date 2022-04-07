import 'mocha';
import { expect } from 'chai';
import { FighterCreator } from '../src/fighter_creator';
import { Types } from '../src/pokemon';
import { PokemonCreator } from '../src/pokemon_creator';

let psyduck = new PokemonCreator('Psyduck', Types.water, 52, 48, 55, 500);

describe ('Prueba de clase FigterCreator', () => {
  it('Se puede instanciar un objeto FighterCreator', () => {
    expect(psyduck).to.be.an.instanceOf(FighterCreator);
  });
  it('Se puede utilizar el método logic', () => {
    expect(psyduck.logic()).to.be.eql('El luchador Psyduck tiene 52 de ataque y 48 de defensa. Posee 500 de vida y 55 puntos de velocidad.');
  });
});