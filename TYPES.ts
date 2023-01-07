import { WEAPON_TRAIT_ITEMS } from 'constants/trait_items';

export interface STYLE {
  name: string;
  material: string;
  motif: number;
}

export interface ALL_TRAITS {
  WEAPONS: WEAPON_TRAITS[];
  ARMOR: ARMOR_TRAITS[];
  JEWELRY: JEWELRY_TRAITS[];
}
export type WEAPON_TRAITS =
  | 'Powered'
  | 'Charged'
  | 'Precise'
  | 'Infused'
  | 'Defending'
  | 'Training'
  | 'Sharpened'
  | 'Decisive'
  | 'Nirnhoned';
export type ARMOR_TRAITS =
  | 'Sturdy'
  | 'Impenetrable'
  | 'Reinforced'
  | 'Well-fitted'
  | 'Training'
  | 'Infused'
  | 'Invigorating'
  | 'Divines'
  | 'Nirnhoned';
export type JEWELRY_TRAITS =
  | 'Healthy'
  | 'Arcane'
  | 'Robust'
  | 'Bloodthirsty'
  | 'Harmony'
  | 'Infused'
  | 'Triune'
  | 'Protective'
  | 'Swift';

export type WEAPON_TRAIT_ITEMS =
  | 'Chysolite'
  | 'Amethyst'
  | 'Ruby'
  | 'Jade'
  | 'Turquoise'
  | 'Carnelian'
  | 'Fire'
  | 'Citrine'
  | 'Potent Nirncrux';
export type ARMOR_TRAIT_ITEMS =
  | 'Quartz'
  | 'Diamond'
  | 'Sardonyx'
  | 'Almandine'
  | 'Emerald'
  | 'Bloodstone'
  | 'Garnet'
  | 'Sapphire'
  | 'Fortified Nirncrux';
export type JEWELRY_TRAIT_ITEMS =
  | 'Antimony'
  | 'Cobalt'
  | 'Zinc'
  | 'Slaughterstone'
  | 'Dibellium'
  | 'Aurbic Amber'
  | 'Dawn-Prism'
  | 'Titanium'
  | 'Gilding Wax';

export type ARMOR_SETS =
  | `Ashen Grip`
  | `Death's Wind`
  | `Night's Silence`
  | `Armor of the Seducer`
  | `Torug's Pact`
  | `Twilight's Embrace`
  | `Hist Bark`
  | `Magnus' Gift`
  | `Whitestrake's Retribution`
  | `Alessia's Bulwark`
  | `Song of Lamae`
  | `Vampire's Kiss`
  | `Hunding's Rage`
  | `Night Mother's Gaze`
  | `Willow's Path`
  | `Critical Riposte`
  | `Dauntless Combatant`
  | `Unchained Aggressor`
  | `Oblivion's Foe`
  | `Spectre's Eye`
  | `Kagrenac's Hope`
  | `Orgnum's Scales`
  | `Eyes of Mara`
  | `Shalidor's Curse`
  | `Way of the Arena`
  | `Twice-Born Star`
  | `Armor Master`
  | `Noble's Conquest`
  | `Redistributor`
  | `Law of Julianos`
  | `Morkuldin`
  | `Trial by Fire`
  | `Clever Alchemist`
  | `Eternal Hunt`
  | `Tava's Favor`
  | `Kvatch Gladiator`
  | `Pelinal's Aptitude`
  | `Varen's Legacy`
  | `Assassin's Guile`
  | `Daedric Trickery`
  | `Shacklebreaker`
  | `Fortified Brass`
  | `Innate Axiom`
  | `Mechanical Acuity`
  | `Adept Rider`
  | `Nocturnal's Favor`
  | `Sload's Semblance`
  | `Grave-Stake Collector`
  | `Might of the Lost Legion`
  | `Naga Shaman`
  | `Coldharbour's Favorite`
  | `Senche-raht's Grit`
  | `Vastarie's Tutelage`
  | `Ancient Dragonguard`
  | `Daring Corsair`
  | `New Moon Acolyte`
  | `Dragon's Appetite`
  | `Spell Parasite`
  | `Stuhn's Favor`
  | `Aetherial Ascension`
  | `Legacy of Karth`
  | `Red Eagle's Fury`
  | `Diamond's Victory`
  | `Heartland Conqueror`
  | `Hist Whisperer`
  | `Deadlands Demolisher`
  | `Iron Flask`
  | `Wretched Vitality`
  | `Druid's Braid`
  | `Order's Wrath`
  | `Serpent's Disdain`
  | `Chimera's Rebuke`
  | `Claw of the Forest Wraith`
  | `Old Growth Brewer`;
