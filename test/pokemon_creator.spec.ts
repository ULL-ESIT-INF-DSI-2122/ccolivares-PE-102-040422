import 'mocha';
import { expect } from 'chai';
import { FighterCreator } from '../src/fighter_creator';
import { Types } from '../src/pokemon';
import { PokemonCreator } from '../src/pokemon_creator';

let psyduck = new PokemonCreator('Psyduck', Types.water, 52, 48, 55, 500);

describe ('Prueba de clase PokemonCreator', () => {
  it('Se puede instanciar un objeto PokemonCreator', () => {
    expect(psyduck).to.be.an.instanceOf(PokemonCreator);
  });
  it('El objeto creado también es un FighterCreator', () => {
    expect(psyduck).to.be.an.instanceOf(FighterCreator);
  });
  it('Se puede utilizar el factory method', () => {
    expect(psyduck.factoryMethod()).to.be.eql(psyduck);
  });
});