export const warwick = {
  name: 'Warwick',
  archetype: 'rushdown',
  stats: {
    range: 2,
    power: 4,
    vitality: 3,
    mobility: 3,
    ease: 4
  },
  heroImageOffset: { desktop: -400, mobile: -95 },
  guideAuthor: {
    name: 'EvanAlmightyFGC', // Author name to display
    youtube: 'https://www.youtube.com/@EvanAlmightyFGC', // YouTube channel URL (leave empty if none)
    twitter: 'https://x.com/EvanAlmightyFGC', // Twitter/X profile URL (leave empty if none)
    twitch: 'https://www.twitch.tv/evanalmightyfgc', // Twitch channel URL (leave empty if none)
  },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        'Warwick is a true rushdown character, with a running special and aggression install.',
        'Best for players who enjoy aggressive gameplay and high damage output.'],
      moves: [
        { numericNotation: 'S1', notation: 'blabla', notationImage: '/key-moves-notation/warwick/warwick1.png', description: 'Unreactable overhead. Not really, but its fast.', video: 'videos/warwick/ww1.mp4' },
        { numericNotation: 'S1+j', notation: 'blabla', notationImage: '/key-moves-notation/warwick/warwick2.png', description: 'Activates blood scent, gaining attack speed and movement based on bloodlust stacks.', video: 'videos/warwick/ww2.mp4' },
        { numericNotation: '2S2', notation: 'blabla', notationImage: '/key-moves-notation/warwick/warwick3.png', description: 'Best anti-air in the game', video: 'videos/warwick/ww3.mp4' },
        { numericNotation: '[S1] or [6S1]', notation: 'blabla', notationImage: '/key-moves-notation/warwick/warwick4.png', description: 'Can run through projectiles and exit into leap', video: 'videos/warwick/ww4.mp4' },
        { numericNotation: 'Bloodlust 6S1', notation: 'blabla', notationImage: '/key-moves-notation/warwick/warwick5.png', description: 'Crossup while in bloodlust', video: 'videos/warwick/ww5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'BnB', numericNotation: 'M > H > [2S1] > M > H > j.L > j.M > j.H > 2H > j.M > j.H > j.S1', notationImage: '/combo-notation/warwick/warwick-combo-1.png', video: 'videos/warwick/ww-combo-1.mp4' },
        { purpose: 'BnB on Crouchers', numericNotation: 'M > H > 3H > d.2S1 > L > L > M > 2H > j.M > j.H > j.S1', notationImage: '/combo-notation/warwick/warwick-combo-2.png', video: 'videos/warwick/ww-combo-2.mp4' },
        { purpose: 'Side Swap', numericNotation: 'M > H > 3H > d.2S1 > L > L > M > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/warwick/warwick-combo-3.png', video: 'videos/warwick/ww-combo-3.mp4' },
        { purpose: 'Corner Combo', numericNotation: 'M > H > 2H > [2S1] > L > 2M > M > H > [2S1] > M > 6S2 > 2S2', notationImage: '/combo-notation/warwick/warwick-combo-4.png', video: 'videos/warwick/ww-combo-4.mp4' },
        { purpose: 'Fury', numericNotation: 'Any combo but loop 6S2 > 66 > S1 at the end', notationImage: '/combo-notation/warwick/warwick-combo-4.png', video: 'videos/warwick/ww-combo-4.mp4' }
      ],
      comboEnders: [
        { purpose: 'Healing Oki', numericNotation: 'j.H S1 2T', notationImage: '/combo-notation/warwick/ww-ender-1.png', video: 'videos/warwick/ww-ender-1.mp4' },
        { purpose: 'Fear Setup', numericNotation: 'j.H 2S1 2T', notationImage: '/combo-notation/warwick/ww-ender-2.png', video: 'videos/warwick/ww-ender-2.mp4' },
        { purpose: 'Max Dmg', numericNotation: 'j.H j.S2 TAG', notationImage: '/combo-notation/warwick/ww-ender-3.png', video: 'videos/warwick/ww-ender-3.mp4' },
      ],
      //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki', numericNotation: '2S2 or S1 Super', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender1.png', video: 'videos/ekko/combo-enders/ekko-ender1.mp4' },
          { purpose: 'Blood', numericNotation: '5S2x1 or x3 and S2 Super', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender2.png', video: 'videos/ekko/combo-enders/ekko-ender2.mp4' },
        ],
        //below everything
        description3: [
          'Warwick is a ',
          "Mastering his key moves will open up more combo routes and mixup potential.",
        ],
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Ekko',
          fuseType: 'Freestyle',
          explanation: 'Best synergy for Warwick. High damaging and able to get max blood off any interaction.',
          videos: [
            { id: 'gCDtZgLubqw' },
            { id: 'EXbUrEpVoRw' }
          ]
        },
        {
          pairing: 'Yasuo',
          fuseType: 'Freestyle',
          explanation: 'Not as good a team as with Ekko but more fun. Great crossup and mixups, with extremely high damage.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Jinx',
          fuseType: 'Freestyle',
          explanation: 'Amazing neutral control, and a full screen projectile to help warwick on approach.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Vi',
          fuseType: 'Double Down',
          explanation: 'Super high damaging rush down team.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Illaoi',
          fuseType: '2x Assist',
          explanation: 'Not as strong as the others but has hidden synergy potential. Amazing corner pressure.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
      ]
    },
    // {
    //   id: 'matchups',
    //   title: 'Matchups',
    //   matchups: {
    //     'Ahri': {
    //       difficulty: 'Medium',
    //       difficultyClass: 'medium',
    //       overview: [
    //         'Ahri\'s mobility can be tricky but your sustain helps in extended fights.',
    //         'Use Blood Hunt speed boost to keep up with her dashes. Infinite Duress can catch her post-dash.'
    //       ],
    //       keyPoints: [
    //         'Sustain helps in longer fights',
    //         'Blood Hunt keeps you mobile',
    //         'Infinite Duress catches dashes',
    //         'Fear can interrupt her combos'
    //       ],
    //       videos: []
    //     },
    //     'Jinx': {
    //       difficulty: 'Easy',
    //       difficultyClass: 'easy',
    //       overview: [
    //         'Jinx cannot escape once you get in. Infinite Duress closes the gap instantly.',
    //         'Your sustain lets you absorb her poke while approaching. Once in, she\'s done.'
    //       ],
    //       keyPoints: [
    //         'She cannot escape your engage',
    //         'Sustain through her poke',
    //         'Infinite Duress is a free hit',
    //         'Fear prevents her from fighting back'
    //       ],
    //       videos: []
    //     },
    //   }
    // },
    {
      id: 'top_players',
      title: 'Top Players',
      players: [
        {
          name: 'BloodMoon',
          description: 'Warwick specialist with aggressive playstyle',
          socials: {
            twitter: 'https://twitter.com/bloodmoon',
            twitch: 'https://twitch.tv/bloodmoon'
          },
          highlights: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          name: 'K7',
          description: 'Warwick specialist with aggressive playstyle',
          socials: {
            youtube: 'https://www.youtube.com/@K7Showoff'
          },
          highlights: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      videos: [
        { id: 'F3x1-NNy6h4' },
        { id: '8qmI6OieGnI' },
      ],
      textGuides: [
        {
          title: 'Warwick Fundamentals Guide',
          author: 'Community',
          sections: [
            {
              heading: 'Overview',
              content: 'Warwick is an aggressive bruiser who excels at chasing down opponents and sustaining through fights. His Bloodlust mechanic rewards landing hits with increased power.'
            },
            {
              heading: 'Gameplan',
              content: 'Build bloodlust stacks with attacks, then activate Blood Hunt to become a terrifying pursuer. Use Jaws of the Beast for sustain and Infinite Duress for gap closing.'
            },
          ],
          tips: [
            'Bloodlust stacks are your power source - build them',
            'Jaws of the Beast heals more at low health',
            'Hold S1 to follow behind opponents',
            'Primal Howl fear sets up free combos'
          ]
        },
      ]
    },
  ]
}
