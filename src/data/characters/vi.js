export const vi = {
  name: 'Vi',
  archetype: 'Rushdown',
  stats: {
    range: 1,
    power: 4,
    vitality: 3,
    mobility: 4,
    ease: 4
  },
  heroImageOffset: { desktop: -145, mobile: -50 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
  guideAuthor: {
    name: 'Quicksand', // Author name to display
    youtube: 'https://www.youtube.com/@Quicksand_FGC', // YouTube channel URL (leave empty if none)
    twitter: 'https://x.com/Quicksand_FGC', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Vi is a rushdown character with the ability to swiftly move in, as well as bait and punish with sway.",
          "Vi's S1 (Sway) is a great movement tool, but also can lead into her iconic Electrics. These are timing based attacks that can be performed after a Sway, and if timed correctly for damage and pressure.",
          "Overall, Vi is fast, aggressive, and thrives on getting in the opponent's face to keep them on the defensive.",
        ],
        moves: [
          { numericNotation: '6S1 and 4S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko1.png', description: 'Forward/Back Sway, key explosive movement in neutral', video: 'videos/ekko/key-moves/ekko-key1.mp4' },
          { numericNotation: 'S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko2.png', description: 'Fast, long reaching special to catch people lacking', video: 'videos/ekko/key-moves/ekko-key2.mp4' },
          { numericNotation: '2S2', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko3.png', description: 'High vertical reaching Anti-air, often very safe on block', video: 'videos/ekko/key-moves/ekko-key3.mp4' },
          { numericNotation: '2M', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko4.png', description: 'Safest poke/combo starter normal in neutral	', video: 'videos/ekko/key-moves/ekko-key4.mp4' },
          { numericNotation: '2S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/ekko/key-moves/ekko-key5.mp4' }   
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M - H - Sway - L - Charge M - Sway - Charge M - Charge H - Sway - Charge M - Sway - Charge M - Sway - Charge L - M - H - 2S2 - S2 Super', notationImage: '/combo-notation/ekko/ekko-combo-1.png', video: 'videos/vi/combos/vi-combo-1.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M - H - Sway - L - [M] - Sway - [L] - [M] - Sway - [L] - [M] - Sway - [L] - 6S1 - L - M - H - 2S2 - S2 Super', notationImage: '/combo-notation/ekko/ekko-combo-2.png', video: 'videos/vi/combos/vi-combo-2.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'M - H - Sway - L - Charge M - Sway - Charge M - Charge H - Sway - Charge M - Sway - Charge M - Charge H', notationImage: '/combo-notation/ekko/ekko-combo-3.png', video: 'videos/vi/combos/vi-combo-3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2M - H - Sway - L - Charge M - Sway - Charge L - S1 - Dash - L - M - 2H - Jump - Charge JS1 - 2M - Tag launch', notationImage: '/combo-notation/ekko/ekko-combo-4.png', video: 'videos/vi/combos/vi-combo-4.mp4' },
          { purpose: 'Jump In', numericNotation: '2jH- M - H - Sway - L - Charge M - Sway - Charge M - Charge H - Sway - Charge M - Sway - Charge M - Sway - Charge L - M - H', notationImage: '/combo-notation/ekko/ekko-combo-4.png', video: 'videos/vi/combos/vi-combo-4.mp4' },
          { purpose: 'Fury', numericNotation: 'M-H-Sway-L-Charge-M-Sway-Charge-M-Charge-H-Sway-Charge-M-Sway-Charge-M-Sway-Charge-L-M-H-Fury-Dash-H-H-S1-Dash cancel-H-2H-Jump-jH-jS1-Dash cancel-2S2-Ult', notationImage: '/combo-notation/ekko/ekko-combo-4.png', video: 'videos/vi/combos/vi-combo-4.mp4' }
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'For Oki', numericNotation: '6S1+H', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender1.png', video: 'videos/ekko/combo-enders/ekko-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'S2, 6S1+[H]', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender2.png', video: 'videos/ekko/combo-enders/ekko-ender2.mp4' },
          { purpose: 'Damage and Super Followups', numericNotation: '2S2', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
          { purpose: 'Assist Setups', numericNotation: 'S1/Charge S1', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: 'Charge jS1 - Tag Launch', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
        ],
        //below everything
        description3: [
          'Choose your combo ender based on the situation. Vi has to think on her feet',
          "Her BNB route has great corner carry and also works in the corner. Fall back on it when you arent sure what to do.",
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: '',
        teams: [
          {
            pairing: 'Warwick',
            fuseType: 'Double Down',
            explanation: 'If you are able to combo into the corner, ending in air S1, you can call WW before going into S2 super, tag to him, and land 2 of his 2S2 during/after the super, giving him full blood instantly',
            videos: [
              { id: 'F3x1-NNy6h4' },
            ]
          },
          {
            pairing: 'Ekko or Yasuo',
            fuseType: 'Freeestyle',
            explanation: 'Using Vi\'s double forward sway, in combination with these characters inherent ability to cross to the otherside open up many sandwhich opportunities for both characters',
            videos: [
              { id: 'gCDtZgLubqw' },
              { id: 'EXbUrEpVoRw' }
            ]
          },
          {
            pairing: 'Illaoi or Jinx',
            fuseType: '2x Assist',
            explanation: 'Using Vi\'s forward Assist + Back assist, you get an anti-air assist that can be nearly anywhere on the screen quite quickly',
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          },
          {
            pairing: 'Darius',
            fuseType: 'Double Down',
            explanation: 'After a Vi combo, ending in S2 Super, tagging to Darius, he is able to tac on a lot of damage with his S2 specials and his own S2 super before Vi\'s ends',
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          },
          {
            pairing: 'Ahri',
            fuseType: 'Freestyle',
            explanation: 'The best ground movement plus the best air movement lets you be real tricky with how you approach and opens potential sandwhich options with Vi\'s Sway and charge S1 tag',
            videos: [
              { id: '8qmI6OieGnI' }
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
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: [
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //       ]
      //     },
      //     'Blitzcrank': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: [
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //         { id: 'F3x1-NNy6h4' },
      //       ]
      //     },
      //     'Braum': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Caitlyn': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Darius': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Illaoi': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //      overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: [
      //         { id: 'illaekko' }
      //       ]
      //     },
      //     'Jinx': {
      //       difficulty: 'Easy',
      //       difficultyClass: 'easy',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Teemo': {
      //       difficulty: 'Easy',
      //       difficultyClass: 'easy',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Vi': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Warwick': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: []
      //     },
      //     'Yasuo': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //       overview: [
      //         'Placeholder overview'
      //       ],
      //       keyPoints: [
      //         'Placeholder keypoint 1',
      //         'Placeholder keypoint 2',
      //         'Placeholder keypoint 3',
      //       ],
      //       videos: [
      //         { id: '8qmI6OieGnI' }
      //       ]
      //     }
      //   }
      // },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'Zando',
            description: '',
            socials: {
              twitter: 'https://twitter.com/Zando',
              youtube: 'https://www.youtube.com/@Zando',
              twitch: 'http://www.twitch.tv/Zando'
            },
            highlights: [
              { id: 'F3x1-NNy6h4' },
              { id: 'GHhFvO0TAW0' },
              { id: 'mR92xVB7sT0' }
            ]
          },
          {
            name: 'Blaizzy',
            description: '',
            socials: {
              twitter: 'https://x.com/HikariNYC',
              twitch: 'https://t.co/4sYjxDdnAn'
            },
            highlights: [
              { id: 'K6YIcxSAKz8' },
              { id: '6dFSUmYA2Lw' },
              { id: '4fIa3CZNLZI' }
            ]
          },
        ]
      },
      {
        id: 'guides',
        title: 'Guides',
        videos: [
          { 
            id: 'ZP_cp2Jl57k', 
          },
          { 
            id: 'linj99CyhAg', 
          },
          { 
            id: 'zA72QlZbKjY', 
          },
        ],
      },
  ]
};
