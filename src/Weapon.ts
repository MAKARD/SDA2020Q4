import { Item } from './Item';

export abstract class Weapon extends Item {
  public static readonly MODIFIER_CHANGE_RATE = 0.05;

  abstract polish(): void;

  protected baseDamage: number;
  protected damageModifier = 0;
  protected baseDurability: number;
  protected durabilityModifier = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this.setBaseDamage(baseDamage);
    this.setBaseDurability(baseDurability);
  }

  public setDamageModifier(modifier: number) {
    this.damageModifier = modifier;
  }

  public setDurabilityModifier(modifier: number) {
    this.durabilityModifier = modifier;
  }

  public getDamage() {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability() {
    return this.baseDurability + this.durabilityModifier;
  }

  public setBaseDurability(durability: number) {
    this.baseDurability = durability;
  }

  public setBaseDamage(damage: number) {
    this.baseDamage = damage;
  }

  public getBaseDurability() {
    return this.baseDurability;
  }

  public getBaseDamage() {
    return this.baseDamage;
  }

  public getDamageModifier() {
    return Number((this.damageModifier).toFixed(2));
  }

  public getDurabilityModifier() {
    return Number((this.durabilityModifier).toFixed(2));
  }

  protected getStatus(): 'operable' | 'breaking' | 'broken' {
    const durability = this.getDurability();

    if (durability > Weapon.MODIFIER_CHANGE_RATE) {
      return 'operable';
    }

    return durability < 0 ? 'broken' : 'breaking';
  }

  public use() {
    const operableText = `You use the ${this.name}, dealing ${this.getDamage().toFixed(2)} points of damage.`;
    const breakingText = `\nThe ${this.name} breaks.`;
    const brokenText = `You can't use the ${this.name}, it is broken.`;

    const status = this.getStatus();
    this.setBaseDurability(this.baseDurability - Weapon.MODIFIER_CHANGE_RATE);

    switch(status) {
      case 'operable': {
       return operableText;
      }
      case 'breaking': {
        return operableText + breakingText;
      }
      case 'broken': {
        return brokenText;
      }
    }
  }

  public toString() {
    const damageText = `Damage: ${this.getDamage().toFixed(2)}`;
    const durabilityText = `Durability: ${(this.getDurability() * 100).toFixed(2)}%`;

    return [super.toString(), damageText, durabilityText].join(', ').trim();
  }
}
