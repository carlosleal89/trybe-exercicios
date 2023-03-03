const {
    mage,
    warrior,
    dragon,
    gameActions,
    warriorDamage,
    mageDamage,
    dragonDamage,
} = require('./exercise7');

describe('teste das funções.', () => {
    it('testa se o valor dos healthpoints de dragon esta certo', () => {
        gameActions.warrior(warriorDamage);
        gameActions.mage(mageDamage);
        expect(dragon.healthPoints).toBeLessThan(350);
    });
    it('testa se o mana do mage diminui', () => {
        gameActions.mage(mageDamage);
        expect(mage.mana).toBeLessThan(125);
    });
    it('testa se os healthpoints de mage diminui', () => {
        gameActions.dragon(dragonDamage);
        expect(mage.healthPoints).toBeLessThan(130);
    });
    it('testa se os healthpoints de warrior diminui', () => {
        expect(warrior.healthPoints).toBeLessThan(200);
    });
    it('testa o else do if do mago', () => {
        mage.mana = 10;
        expect(mageDamage().damage).toEqual('Não possui o valor de mana suficiente.');
    });
})