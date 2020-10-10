import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(
    _: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const baseDurability = this.getBaseDurability();
    const nextDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

    if (baseDurability + nextDurabilityModifier > 1) {
      return;
    }

    this.setDurabilityModifier(nextDurabilityModifier);
  }
}
