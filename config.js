/**
 * COLOR
 *
 * Object with color name to color hex code mapping for easy color reusage.
 * Hexcodes are taken from https://raw.githubusercontent.com/twbs/bootstrap/main/scss/_variables.scss
 *
 * @type {{pink: string, green: string, yellow: string, black: string, teal: string, cyan: string, red: string, orange: string, gray: string, blue: string, white: string, grayLight: string, grayDark: string, purple: string, indigo: string}}
 */
const COLOR = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  black: '#000',
  white: '#fff',
  gray: '#6c757d',
  grayLight: '#e9ecef',
  grayDark: '#343a40',
};

/**
 * GROUP_NAMES
 *
 * Mapping of names for usage as object-attributes in GROUPS
 * and mapping in SOUNDS under the attribute `groupName`.
 *
 * @type {{NATURE: string, WEATHER: string, COMBAT: string, TOWN: string}}
 */
const GROUP_NAMES = {
  TOWN: 'town',
  COMBAT: 'combat',
  TRAVELLING: 'travelling',
  NATURE: 'nature',
  WEATHER: 'weather',
}

/**
 * GROUPS
 *
 * Parent of all sounds. Sounds are later equipped to Groups by
 * their `groupName`-Attribute. Groups are used to structure the
 * page and groups sounds by content criteria of the group.
 * The order of entries defines the order of appearance.
 *
 * @type {{[p: string]: {color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}}}
 */
export const GROUPS = {
  [GROUP_NAMES.TOWN]: {
    title: 'Stadt',
    iconHtml: '🏰',
    collapsed: true,
    color: {
      header: {
        bg: COLOR.purple,
        text: COLOR.yellow,
      },
      border: COLOR.purple,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    }
  },
  [GROUP_NAMES.COMBAT]: {
    title: 'Kampf',
    iconHtml: '⚔',
    collapsed: true,
    color: {
      header: {
        bg: COLOR.red,
        text: COLOR.white,
      },
      border: COLOR.red,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    },
  },
  [GROUP_NAMES.TRAVELLING]: {
    title: 'Reise',
    iconHtml: '🏕',
    collapsed: true,
    color: {
      header: {
        bg: COLOR.grayDark,
        text: COLOR.white,
      },
      border: COLOR.grayDark,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    },
  },
  [GROUP_NAMES.NATURE]: {
    title: 'Natur',
    iconHtml: '🏞',
    collapsed: true,
    color: {
      header: {
        bg: COLOR.green,
        text: COLOR.white,
      },
      border: COLOR.green,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    }
  },
  [GROUP_NAMES.WEATHER]: {
    title: 'Wetter',
    iconHtml: '🌦',
    collapsed: true,
    color: {
      header: {
        bg: COLOR.blue,
        text: COLOR.white
      },
      border: COLOR.blue,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    }
  },
};

/**
 * SOUNDS
 *
 * Here comes the content of the application: the sounds.
 * The order of entries defines the order of appearance.
 *
 * Mandatory attributes
 * - title {string}
 * - groupName {string} - must match a name in GROUP_NAMES
 * - loopable {boolean} - will only work on sounds with one soundfile
 * - soundEntries {string[]} - paths to soundfiles
 *
 * Optional attributes
 * - iconHtml {string} - can contain an Emoticon or HTML with fontawesome icon
 *                        classes take from https://fontawesome.com/v4/icons/
 * - color {Object} - an object of hexcodes with following structure:
 *                    {
 *                      header: {
 *                        bg: COLOR.blue,
 *                        text: COLOR.white,
 *                      },
 *                      border: COLOR.blue,
 *                      body: {
 *                        bg: COLOR.white,
 *                        text: COLOR.black
 *                      },
 *                    }
 *
 * This is an empty sound for reference:
 * { title: '', groupName: GROUP_NAMES.TOWN, iconHtml: null, color: null, loopable: false, soundEntries: [], },
 *
 *
 * @type {[{groupName: string, color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, iconHtml: string, loopable: boolean, title: string, soundEntries: string[]}]}
 */
export const SOUNDS = [
  // AMBIENT
  {
    title: 'Hafen',
    groupName: GROUP_NAMES.TOWN,
    iconHtml: '⚓',
    color: {
      header: {
        bg: COLOR.blue,
        text: COLOR.white,
      },
      border: COLOR.blue,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    },
    loopable: true,
    soundEntries: [
      './sounds/ambient/docks.ogg',
    ],
  },
  { title: 'Tropfsteinhöhle', groupName: GROUP_NAMES.NATURE, iconHtml: '⛰', color: null, loopable: true, soundEntries: ['./sounds/ambient/dripping-cave.ogg',], },
  { title: 'Stadt (abends)', groupName: GROUP_NAMES.TOWN, iconHtml: '🌆', color: null, loopable: true, soundEntries: ['./sounds/ambient/evening-town.ogg',], },
  { title: 'Wald (tagsüber)', groupName: GROUP_NAMES.NATURE, iconHtml: '🌳', color: null, loopable: true, soundEntries: ['./sounds/ambient/forest-daytime.ogg',], },
  { title: 'Reiten', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🐎', color: null, loopable: true, soundEntries: ['./sounds/ambient/horseback-travelling.ogg',], },
  { title: 'Nachtlager', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🏕', color: null, loopable: true, soundEntries: ['./sounds/ambient/night-camp.ogg',], },
  { title: 'Fluss (schnell)', groupName: GROUP_NAMES.NATURE, iconHtml: '🏞', color: null, loopable: true, soundEntries: ['./sounds/ambient/rapid-river.ogg',], },
  { title: 'Marktplatz (klein)', groupName: GROUP_NAMES.TOWN, iconHtml: '💰', color: null, loopable: true, soundEntries: ['./sounds/ambient/small-marketplace.ogg',], },
  { title: 'Gewitter', groupName: GROUP_NAMES.WEATHER, iconHtml: '🌩', color: null, loopable: true, soundEntries: ['./sounds/ambient/thunderstorm.ogg',], },
  { title: 'Stadtplatz (tagsüber)', groupName: GROUP_NAMES.TOWN, iconHtml: '🏘', color: null, loopable: true, soundEntries: ['./sounds/ambient/town-square-daytime.ogg',], },
  { title: 'Dorf (Wald)', groupName: GROUP_NAMES.TOWN, iconHtml: '🏘', color: null, loopable: true, soundEntries: ['./sounds/ambient/woodland-village.ogg',], },
  // MUSIC
  { title: 'darkest-dungeon-the-cove-battle', groupName: GROUP_NAMES.COMBAT, iconHtml: null, color: null, loopable: true, soundEntries: ['./sounds/music/darkest-dungeon-the-cove-battle.ogg',], },
  { title: 'skyrim-ost-blood-and-steel', groupName: GROUP_NAMES.COMBAT, iconHtml: null, color: null, loopable: true, soundEntries: ['./sounds/music/skyrim-ost-blood-and-steel.ogg',], },
  // EFFECTS
  { title: 'Schlag', groupName: GROUP_NAMES.COMBAT, iconHtml: '👊', color: null, loopable: false, soundEntries: [
      './sounds/effects/dirt-slam-1.ogg',
      './sounds/effects/dirt-slam-2.ogg',
      './sounds/effects/dirt-slam-3.ogg',
      './sounds/effects/dirt-slam-4.ogg',
  ], },
  { title: 'Schwerthieb', groupName: GROUP_NAMES.COMBAT, iconHtml: '⚔', color: null, loopable: false, soundEntries: [
      './sounds/effects/sword-clash-1.ogg',
      './sounds/effects/sword-clash-2.ogg',
      './sounds/effects/sword-clash-3.ogg',
  ], },
  { title: 'Pfeile', groupName: GROUP_NAMES.COMBAT, iconHtml: '🏹', color: null, loopable: false, soundEntries: [
    './sounds/effects/arrow-loose-and-hit-1.ogg',
    './sounds/effects/arrow-loose-and-hit-2.ogg',
    './sounds/effects/arrow-loose-and-hit-3.ogg',
    './sounds/effects/arrow-loose-and-hit-4.ogg',
    './sounds/effects/arrow-loose-and-hit-5.ogg',
    './sounds/effects/arrow-loose-and-hit-6.ogg',
    './sounds/effects/arrow-loose-and-hit-7.ogg',
  ], },
  { title: 'Drachenbiss', groupName: GROUP_NAMES.COMBAT, iconHtml: '🐲', color: null, loopable: false, soundEntries: [
      './sounds/effects/dragon-bite-1.ogg',
      './sounds/effects/dragon-bite-2.ogg',
  ], },
  { title: 'Eulenbär', groupName: GROUP_NAMES.COMBAT, iconHtml: '🐻', color: null, loopable: false, soundEntries: [
      './sounds/effects/owlbear-roar-1.ogg',
      './sounds/effects/owlbear-roar-2.ogg',
      './sounds/effects/owlbear-roar-3.ogg',
      './sounds/effects/owlbear-roar-4.ogg',
  ], },
  { title: 'Schlamm', groupName: GROUP_NAMES.NATURE, iconHtml: null, color: null, loopable: false, soundEntries: [
      './sounds/effects/ooze-1.ogg',
      './sounds/effects/ooze-2.ogg',
      './sounds/effects/ooze-3.ogg',
      './sounds/effects/ooze-4.ogg',
      './sounds/effects/ooze-5.ogg',
  ], },
  { title: 'Schwimmen', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🏊', color: null, loopable: false, soundEntries: [
      './sounds/effects/swimming-1.ogg',
      './sounds/effects/swimming-2.ogg',
      './sounds/effects/swimming-3.ogg',
      './sounds/effects/swimming-4.ogg',
      './sounds/effects/swimming-5.ogg',
      './sounds/effects/swimming-6.ogg',
  ], },
  { title: 'Donnerschlag', groupName: GROUP_NAMES.WEATHER, iconHtml: '🌩', color: null, loopable: false, soundEntries: [
      './sounds/effects/thunder-clap-1.ogg',
      './sounds/effects/thunder-clap-2.ogg',
      './sounds/effects/thunder-clap-3.ogg',
      './sounds/effects/thunder-clap-4.ogg',
  ], },
  { title: 'Welle', groupName: GROUP_NAMES.NATURE, iconHtml: '🌊', color: null, loopable: false, soundEntries: [
      './sounds/effects/wave-crash-1.ogg',
      './sounds/effects/wave-crash-2.ogg',
      './sounds/effects/wave-crash-3.ogg',
      './sounds/effects/wave-crash-4.ogg',
  ], },
];
