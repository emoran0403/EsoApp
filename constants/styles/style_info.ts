import { styles } from './styles';
import { motifs } from './motifs';
import { materials } from './materials';

export interface style_info {
  style: styles;
  material: materials;
  motif: motifs;
}

export const STYLE_INFO: style_info[] = [
  {
    style: 'High Elf',
    material: 'Adamantite',
    motif: 'Crafting Motif 1: High Elf Style',
  },
  {
    style: 'Dark Elf',
    material: 'Obsidian',
    motif: 'Crafting Motif 2: Dark Elf Style',
  },
  {
    style: 'Wood Elf',
    material: 'Bone',
    motif: 'Crafting Motif 3: Wood Elf Style',
  },
  {
    style: 'Nord',
    material: 'Corundum',
    motif: 'Crafting Motif 4: Nord Style',
  },
  {
    style: 'Breton',
    material: 'Molybdenum',
    motif: 'Crafting Motif 5: Breton Style',
  },
  {
    style: 'Redguard',
    material: 'Starmetal',
    motif: 'Crafting Motif 6: Redguard Style',
  },
  {
    style: 'Khajiit',
    material: 'Moonstone',
    motif: 'Crafting Motif 7: Khajiit Style',
  },
  {
    style: 'Orcish',
    material: 'Manganese',
    motif: 'Crafting Motif 8: Orc Style',
  },
  {
    style: 'Argonian',
    material: 'Flint',
    motif: 'Crafting Motif 9: Argonian Style',
  },
  {
    style: 'Imperial',
    material: 'Nickel',
    motif: 'Crafting Motif 10: Imperial Style',
  },
  {
    style: 'Ancient Elf',
    material: 'Palladium',
    motif: 'Crafting Motif 11: Ancient Elf Style',
  },
  {
    style: 'Barbaric',
    material: 'Bronze',
    motif: 'Crafting Motif 12: Barbaric Style',
  },
  {
    style: 'Primal',
    material: 'Argentum',
    motif: 'Crafting Motif 13: Primal Style',
  },
  {
    style: 'Daedric',
    material: 'Daedra Heart',
    motif: 'Crafting Motif 14: Daedric Style',
  },
  {
    style: 'Dwemer',
    material: 'Dwemer Frame',
    motif: 'Crafting Motif 15: Dwemer Style',
  },
  {
    style: 'Glass',
    material: 'Malachite',
    motif: 'Crafting Motif 16: Glass Style',
  },
  {
    style: 'Xivkyn',
    material: 'Charcoal of Remorse',
    motif: 'Crafting Motif 17: Xivkyn Style',
  },
  {
    style: 'Akaviri',
    material: 'Goldscale',
    motif: 'Crafting Motif 18: Akaviri Style',
  },
  {
    style: 'Mercenary',
    material: 'Laurel',
    motif: 'Crafting Motif 19: Mercenary Style',
  },
  {
    style: 'Yokudan',
    material: 'Ferrous Salts',
    motif: 'Crafting Motif 20: Yokudan Style',
  },
  {
    style: 'Ancient Orc',
    material: 'Cassiterite',
    motif: 'Crafting Motif 21: Ancient Orc Style',
  },
  {
    style: 'Trinimac',
    material: 'Auric Tusk',
    motif: 'Crafting Motif 22: Trinimac Style',
  },
  {
    style: 'Malacath',
    material: 'Potash',
    motif: 'Crafting Motif 23: Malacath Style',
  },
  {
    style: 'Outlaw',
    material: "Rogue's Soot",
    motif: 'Crafting Motif 24: Outlaw Style',
  },
  {
    style: 'Aldmeri Dominion',
    material: 'Eagle Feather',
    motif: 'Crafting Motif 25: Aldmeri Dominion Style',
  },
  {
    style: 'Daggerfall Covenant',
    material: 'Lion Fang',
    motif: 'Crafting Motif 26: Daggerfall Covenant Style',
  },
  {
    style: 'Ebonheart Pact',
    material: 'Dragon Scute',
    motif: 'Crafting Motif 27: Ebonheart Pact Style',
  },
  {
    style: 'Ra Gada',
    material: 'Ancient Sandstone',
    motif: 'Crafting Motif 28: Ra Gada Style',
  },
  {
    style: 'Soul-Shriven',
    material: 'Azure Plasm',
    motif: 'Crafting Motif 29: Soul-Shriven Style',
  },
  {
    style: 'Morag Tong',
    material: 'Boiled Carapace',
    motif: 'Crafting Motif 30: Morag Tong Style',
  },
  {
    style: 'Skinchanger',
    material: 'Wolfsbane Incense',
    motif: 'Crafting Motif 31: Skinchanger Style',
  },
  {
    style: "Abah's Watch",
    material: 'Polished Shilling',
    motif: "Crafting Motif 32: Abah's Watch Style",
  },
  {
    style: 'Thieves Guild',
    material: 'Fine Chalk',
    motif: 'Crafting Motif 33: Thieves Guild Style',
  },
  {
    style: 'Assassins League',
    material: 'Tainted Blood',
    motif: 'Crafting Motif 34: Assassins League Style',
  },
  {
    style: "Dro-m'Athra",
    material: 'Defiled Whiskers',
    motif: "Crafting Motif 35: Dro-m'Athra Style",
  },
  {
    style: 'Dark Brotherhood',
    material: 'Black Beeswax',
    motif: 'Crafting Motif 36: Dark Brotherhood Style',
  },
  {
    style: 'Ebony',
    material: 'Night Pumice',
    motif: 'Crafting Motif 37: Ebony Style',
  },
  {
    style: 'Draugr',
    material: 'Pristine Shroud',
    motif: 'Crafting Motif 38: Draugr Style',
  },
  {
    style: 'Minotaur',
    material: 'Oxblood Fungus',
    motif: 'Crafting Motif 39: Minotaur Style',
  },
  {
    style: 'Order of the Hour',
    material: 'Pearl Sand',
    motif: 'Crafting Motif 40: Order Hour Style',
  },
  {
    style: 'Celestial',
    material: 'Star Sapphire',
    motif: 'Crafting Motif 41: Celestial Style',
  },
  {
    style: 'Hollowjack',
    material: 'Amber Marble',
    motif: 'Crafting Motif 42: Hollowjack Style',
  },
  {
    style: 'Grim Harlequin',
    material: 'Grinstones',
    motif: 'Crafting Motif 43: Grim Harlequin Style',
  },
  {
    style: 'Silken Ring',
    material: 'Distilled Slowsilver',
    motif: 'Crafting Motif 44: Silken Ring Style',
  },
  {
    style: 'Mazzatun',
    material: 'Leviathan Scrimshaw',
    motif: 'Crafting Motif 45: Mazzatun Style',
  },
  {
    style: 'Stalhrim Frostcaster',
    material: 'Stalhrim Shard',
    motif: 'Crafting Motif 46: Frostcaster Style',
  },
  {
    style: 'Buoyant Armiger',
    material: 'Volcanic Viridian',
    motif: 'Crafting Motif 47: Buoyant Armiger Style',
  },
  {
    style: 'Ashlander',
    material: 'Ash Canvas',
    motif: 'Crafting Motif 48: Ashlander Style',
  },
  {
    style: 'Militant Ordinator',
    material: 'Lustrous Sphalerite',
    motif: 'Crafting Motif 49: Militant Ordinator Style',
  },
  {
    style: 'Telvanni',
    material: 'Wrought Ferrofungus',
    motif: 'Crafting Motif 50: Telvanni Style',
  },
  {
    style: 'Hlaalu',
    material: 'Refined Bonemold Resin',
    motif: 'Crafting Motif 51: Hlaalu Style',
  },
  {
    style: 'Redoran',
    material: 'Polished Scarab Elytra',
    motif: 'Crafting Motif 52: Redoran Style',
  },
  {
    style: 'Tsaesci',
    material: 'Snake Fang',
    motif: 'Crafting Motif 53: Tsaesci Style',
  },
  {
    style: 'Bloodforge',
    material: 'Bloodroot Flux',
    motif: 'Crafting Motif 54: Bloodforge Style',
  },
  {
    style: 'Dreadhorn',
    material: 'Minotaur Bezoar',
    motif: 'Crafting Motif 55: Dreadhorn',
  },
  {
    style: 'Apostle',
    material: 'Tempered Brass',
    motif: 'Crafting Motif 56: Apostle',
  },
  {
    style: 'Ebonshadow',
    material: 'Tenebrous Cord',
    motif: 'Crafting Motif 57: Ebonshadow Style',
  },
  {
    style: 'Fang Lair',
    material: 'Dragon Bone',
    motif: 'Crafting Motif 58: Fang Lair',
  },
  {
    style: 'Scalecaller',
    material: 'Infected Flesh',
    motif: 'Crafting Motif 59: Scalecaller',
  },
  {
    style: 'Worm Cult',
    material: 'Desecrated Grave Soil',
    motif: 'Crafting Motif 60: Worm Cult',
  },
  {
    style: 'Psijic',
    material: 'Vitrified Malondo',
    motif: 'Crafting Motif 61: Psijic',
  },
  {
    style: 'Sapiarch',
    material: 'Culanda Lacquer',
    motif: 'Crafting Motif 62: Sapiarch',
  },
  {
    style: 'Dremora',
    material: "Warrior's Heart Ashes",
    motif: 'Crafting Motif 63: Dremora Style',
  },
  {
    style: 'Pyandonean',
    material: 'Sea Serpent Hide',
    motif: 'Crafting Motif 64: Pyandonean Style',
  },
  {
    style: 'Huntsman',
    material: 'Bloodscent Dew',
    motif: 'Crafting Motif 65: Huntsman',
  },
  {
    style: 'Silver Dawn',
    material: 'Argent Pelt',
    motif: 'Crafting Motif 66: Silver Dawn',
  },
  {
    style: 'Welkynar',
    material: 'Gryphon Plume',
    motif: 'Crafting Motif 67: Welkynar',
  },
  {
    style: 'Honor Guard',
    material: 'Red Diamond Seal',
    motif: 'Crafting Motif 68: Honor Guard Style',
  },
  {
    style: 'Dead-Water',
    material: 'Crocodile Leather',
    motif: 'Crafting Motif 69: Dead-Water Style',
  },
  {
    style: 'Elder Argonian',
    material: 'Hackwing Plumage',
    motif: 'Crafting Motif 70: Elder Argonian',
  },
  {
    style: 'Coldsnap',
    material: 'Goblin-Cloth Scrap',
    motif: 'Crafting Motif 71: Coldsnap Style',
  },
  {
    style: 'Meridian',
    material: 'Auroran Dust',
    motif: 'Crafting Motif 72: Meridian Style',
  },
  {
    style: 'Anequina',
    material: 'Shimmering Sand',
    motif: 'Crafting Motif 73: Anequina Style',
  },
  {
    style: 'Pellitine',
    material: 'Dragonthread',
    motif: 'Crafting Motif 74: Pellitine Style',
  },
  {
    style: 'Sunspire',
    material: 'Frost Embers',
    motif: 'Crafting Motif 75: Sunspire Style',
  },
  {
    style: 'Dragonguard',
    material: 'Gilding Salts',
    motif: 'Crafting Motif 76: Dragonguard Style',
  },
  {
    style: "Stags of Z'en",
    material: 'Oath Cord',
    motif: "Crafting Motif 77: Stags of Z'en Style",
  },
  {
    style: 'Moongrave Fane',
    material: 'Blood of Sahrotnax',
    motif: 'Crafting Motif 78: Moongrave Fane Style',
  },
  {
    style: 'Refabricated',
    material: 'Polished Rivets',
    motif: 'Crafting Motif 79: Refabricated Style',
  },
  {
    style: 'Shield of Senchal',
    material: 'Carmine Shieldsilk',
    motif: 'Crafting Motif 80: Shield of Senchal Style',
  },
  {
    style: 'New Moon Priest',
    material: 'Aeonstone Shard',
    motif: 'Crafting Motif 81: New Moon Priest Style',
  },
  {
    style: 'Icereach Coven',
    material: 'Fryse Willow',
    motif: 'Crafting Motif 82: Icereach Coven Style',
  },
  {
    style: 'Pyre Watch',
    material: 'Consecrated Myrrh',
    motif: 'Crafting Motif 83: Pyre Watch Style',
  },
  {
    style: 'Blackreach Vanguard',
    material: 'Gloomspore Chitin',
    motif: 'Crafting Motif 84: Blackreach Vanguard Style',
  },
  {
    style: 'Greymoor',
    material: 'Bat Oil',
    motif: 'Crafting Motif 85: Greymoor Style',
  },
  {
    style: 'Sea Giant',
    material: 'Sea Snake Fang',
    motif: 'Crafting Motif 86: Sea Giant Style',
  },
  {
    style: 'Ancestral Nord',
    material: 'Etched Corundum',
    motif: 'Crafting Motif 87: Ancestral Nord Style',
  },
  {
    style: 'Ancestral Orc',
    material: 'Etched Manganese',
    motif: 'Crafting Motif 88: Ancestral Orc Style',
  },
  {
    style: 'Ancestral High Elf',
    material: 'Etched Adamantite',
    motif: 'Crafting Motif 89: Ancestral High Elf Style',
  },
  {
    style: 'Thorn Legion',
    material: 'Thorn Sigil',
    motif: 'Crafting Motif 90: Thorn Legion Style',
  },
  {
    style: 'Hazardous Alchemy',
    material: 'Viridian Phial',
    motif: 'Crafting Motif 91: Hazardous Alchemy Style',
  },
  {
    style: 'Ancestral Akaviri',
    material: 'Burnished Goldscale',
    motif: 'Crafting Motif 92: Ancestral Akaviri Style',
  },
  {
    style: 'Ancestral Breton',
    material: 'Etched Molybdenum',
    motif: 'Crafting Motif 93: Ancestral Breton Style',
  },
  {
    style: 'Ancestral Reach',
    material: 'Etched Bronze',
    motif: 'Crafting Motif 94: Ancestral Reach Style',
  },
  {
    style: 'Nighthollow',
    material: 'Umbral Droplet',
    motif: 'Crafting Motif 95: Nighthollow Style',
  },
  {
    style: 'Arkthzand Armory',
    material: 'Arkthzand Sprocket',
    motif: 'Crafting Motif 96: Arkthzand Armory Style',
  },
  {
    style: 'Wayward Guardian',
    material: 'Hawk Skull',
    motif: 'Crafting Motif 97: Wayward Guardian Style',
  },
  {
    style: 'House Hexos',
    material: 'Etched Nickel',
    motif: 'Crafting Motif 98: House Hexos Style',
  },
  {
    style: 'Waking Flame',
    material: 'Chokeberry Extract',
    motif: 'Crafting Motif 99: Waking Flame Style',
  },
  {
    style: 'True-Sworn',
    material: 'Fulgid Epidote',
    motif: 'Crafting Motif 100: True-Sworn Style',
  },
  {
    style: 'Ivory Brigade',
    material: 'Ivory Brigade Clasp',
    motif: 'Crafting Motif 101: Ivory Brigade Style',
  },
  {
    style: 'Sul-Xan',
    material: 'Death Hopper Vocal Sac',
    motif: 'Crafting Motif 102: Sul-Xan Style',
  },
  {
    style: 'Black Fin Legion',
    material: 'Marsh Nettle Sprig',
    motif: 'Crafting Motif 103: Black Fin Legion Style',
  },
  {
    style: 'Ancient Daedric',
    material: 'Pristine Daedric Heart',
    motif: 'Crafting Motif 104: Ancient Daedric Style',
  },
  {
    style: 'Crimson Oath',
    material: 'Filed Barbs',
    motif: 'Crafting Motif 105: Crimson Oath Style',
  },
  {
    style: 'Silver Rose',
    material: 'Rose Engraving',
    motif: 'Crafting Motif 106: Silver Rose Style',
  },
  {
    style: "Annihilarch's Chosen",
    material: 'Blaze-Veined Prism',
    motif: "Crafting Motif 107: Annihilarch's Chosen Style",
  },
  {
    style: 'Fargrave Guardian',
    material: 'Indigo Lucent',
    motif: 'Crafting Motif 108: Fargrave Guardian Style',
  },
  {
    style: 'Dreadsails',
    material: 'Squid Ink',
    motif: 'Crafting Motif 110: Dreadsails Style',
  },
  {
    style: 'Ascendant Order',
    material: 'Bone Pyre Ash',
    motif: 'Crafting Motif 111: Ascendant Order Style',
  },
  {
    style: 'Syrbanic Marine',
    material: 'Scalloped Frog-Metal',
    motif: 'Crafting Motif 112: Syrabanic Marine Style',
  },
  {
    style: 'Steadfast Society',
    material: 'Stendarr Stamp',
    motif: 'Crafting Motif 113: Steadfast Society Style',
  },
  {
    style: 'Systres Guardian',
    material: 'High Isle Filigree',
    motif: 'Crafting Motif 114: Systres Guardian Style',
  },
];
