const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  function dragonDamage() {
    const damage = Math.floor(Math.random() * 35) + 15 + 1; // 35 é intervalo entre o damage minimo e maximo. + 15 define o numero minimo que vai gerar. +1 garante que vai gerar ate o 50
    return damage;
  }

  function warriorDamage() {
    const minDamage = warrior.strength;
    const maxDamage = minDamage * warrior.weaponDmg; 
    const damage = Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage + 1;
    return damage;
  }

  function mageDamage() {
    const minDamage = mage.intelligence;
    const maxDamage = minDamage * 2;
    let damage = Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage + 1;
    const damageMana = {
      damage: damage,
      expentMana: 0,
    }  
    if (mage.mana > 15) {
      damageMana.expentMana = 15;    
    } else damageMana.damage = 'Não possui o valor de mana suficiente.';  
    return damageMana;
  }

  const gameActions = {
    warrior: (warriorDamage) => {
      warrior.damage = warriorDamage();
      dragon.healthPoints -= warrior.damage;      
    },
    mage: (mageDamage) => {
      mage.damage = mageDamage().damage;
      mage.mana -= mageDamage().expentMana;
      dragon.healthPoints -= mage.damage; 
    },
    dragon: (dragonDamage) => {
      dragon.damage = dragonDamage();
      mage.healthPoints -= dragon.damage;
      warrior.healthPoints -= dragon.damage;
    },
    battleTurn: () => battleMembers,
  };

  gameActions.warrior(warriorDamage);
  gameActions.mage(mageDamage);
  gameActions.dragon(dragonDamage);

  console.log(gameActions.battleTurn());



  module.exports = {mage, warrior, dragon, gameActions, warriorDamage, mageDamage, dragonDamage};


  