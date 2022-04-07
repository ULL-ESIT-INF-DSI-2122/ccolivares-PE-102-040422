import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/pokemon';
import { Types } from '../src/pokemon';

let psyduck = new Pokemon('Psyduck', Types.water, 52, 48, 55, 500);

describe ('Prueba de clase Pokemon', () => {
  it('Se puede instanciar un objeto Pokemon', () => {
    expect(psyduck).to.be.an.instanceOf(Pokemon);
  });
  it('Se acceder al atributo name', () => {
    expect(psyduck.getName()).to.be.eql('Psyduck');
  });
  it('Se acceder al atributo type', () => {
    expect(psyduck.getType()).to.be.eql(Types.water);
  });
  it('Se acceder al atributo attack', () => {
    expect(psyduck.getAttack()).to.be.eql(52);
  });
  it('Se acceder al atributo defense', () => {
    expect(psyduck.getDefense()).to.be.eql(48);
  });
  it('Se acceder al atributo speed', () => {
    expect(psyduck.getSpeed()).to.be.eql(55);
  });
  it('Se acceder al atributo HP', () => {
    expect(psyduck.getHP()).to.be.eql(500);
  });
});