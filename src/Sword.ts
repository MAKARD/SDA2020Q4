import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(
    _: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const baseDamage = this.getBaseDamage();
    const maxDamageModifier = baseDamage * 0.25;
    const nextDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;

    if (baseDamage + nextDamageModifier > baseDamage + maxDamageModifier) {
      return;
    }

    this.setDamageModifier(nextDamageModifier);
  }
}
