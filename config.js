// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'ajsya',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '6a897212c2bbe5c3c349d0b6edc27acc',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Roblox',
      icon: 'gamepad-2',
      link: 'https://www.roblox.com/home',
    },
    {
      id: '4',
      name: 'Scratch',
      icon: 'trello',
      link: 'https://scratch.mit.edu',
    },
    {
      id: '5',
      name: 'code-server',
      icon: 'code',
      link: 'http://raspberrypi:8080/?ew=true',
    },
    {
      id: '6',
      name: 'Ocular',
      icon: 'glasses',
      link: 'https://ocular.jeffalo.net',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Classical',
        link: 'https://open.spotify.com/playlist/1h0CEZCm6IbFTbxThn6Xcs',
      },
      {
        name: 'Epic Classical',
        link: 'https://open.spotify.com/playlist/37i9dQZF1DX9G9wwzwWL2k',
      },
      {
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Oldies',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'Youtube',
        link: 'https://youtube.com',
      },
      {
        name: 'wasteof.money',
        link: 'https://wasteof.money',
      },
      {
        name: 'Canva',
        link: 'https://www.canva.com/',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/home',
      },
    ],
  },
};
