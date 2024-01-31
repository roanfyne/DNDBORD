# simple-soundboard

This repository contains a Vue 3 application utilizing Bootstrap 5 and FontAwesome 4.7 
for displaying a simple soundboard. It provides an interface for playing configured audio 
sounds grouped into categories. 

The project started off by editing the Project 
[simple-soundboard](https://github.com/vietjtnguyen/simple-soundboard) by 
[Viet T. Nguyen](https://github.com/vietjtnguyen).  
Many thanks!

I edited the project to my own needs: i wanted it to be mobile friendly, colorful and customizable
for being able to also play on-shot pen & papers on the go.

**Demo:** https://fpetruschke.github.io/simple-soundboard

## Contributing
I unfortunately won't have much time to maintain, expand, and care for this project,
so I will either not respond at all or only very late to issues or pull requests.
Please feel free to download or fork this repository and customize it to your own needs.

## Features

- Integration of Vue 3, Bootstrap 5, and FontAwesome 4.7.
- Dynamic rendering of audio sound groups with collapsible sections.
- Ability to play, pause, stop, adjust volume, mute, and loop audio sounds.
- Smooth fading in and out of audio sounds.
- Customizable configuration for sound groups and sounds.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Edit the `config.js` to your needs.
4. Open the `index.html` in a web browser.

## Sounds

To demonstrate the soundboard, I've taken the sounds from 
[simple-soundboard](https://github.com/vietjtnguyen/simple-soundboard).
Please have a look at the [audio-chapter](https://github.com/vietjtnguyen/simple-soundboard#audio) there.

## Configuration

### Customizing Colors

In the `config.js` file, you can customize color mappings for different elements. 
The `COLOR` object provides a mapping of color names to hex codes.
The defined colors are taken from Bootstrap5.

```javascript
const COLOR = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  // ... (other color mappings)
};
```

### Customizing Colors
The `GROUP_NAMES` object in `config.js` allows you to define names for different 
sound groups. Each group is indexed by the string value - so do not use any
special characters for that.

```javascript
const GROUP_NAMES = {
  COMBAT: 'combat',
  NATURE: 'nature',
  TOWN: 'town',
  WEATHER: 'weather',
};
```

### Configuring Sound Groups
The `GROUPS` object defines the properties of each sound group.
Customize titles, icons, and colors for different groups.

```javascript
export const GROUPS = {
  [GROUP_NAMES.COMBAT]: {
    title: 'Kampf',
    iconHtml: '⚔',
    collapsed: true,
    color: {
      header: { bg: COLOR.red, text: COLOR.white },
      border: COLOR.red,
      body: { bg: COLOR.white, text: COLOR.black },
    },
  },
  // ... (other sound groups)
};
```

### Adding Custom Sounds
The `SOUNDS` array in `config.js` contains the details of each sound, 
including titles, group names, icons, colors, and file paths.

```javascript
export const SOUNDS = [
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
        text: COLOR.black,
      },
    },
    loopable: true,
    soundEntries: [
      './sounds/docks.ogg',
    ],
  },
  // ... (other custom sounds)
];
```

Feel free to modify these configurations to suit your preferences.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
