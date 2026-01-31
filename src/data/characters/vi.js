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
    name: 'Quicksand_FGC', // Author name to display
    youtube: 'https://www.youtube.com/@Quicksand_FGC', // YouTube channel URL (leave empty if none)
    twitter: 'https://x.com/Quicksand_FGC', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Vi is a rushdown character with the ability to swiftly move in, as well as bait and punish with 6S1.",
          "Vi's 6S1 (Sway) is a great movement tool, but also can lead into her iconic Electrics. These are timing based attacks that can be performed after a 6S1, and if timed correctly for damage and pressure.",
          "Overall, Vi is fast, aggressive, and thrives on getting in the opponent's face to keep them on the defensive.",
        ],
        moves: [
          { numericNotation: '6S1 and 4S1', notation: 'blabla', notationImage: '/key-moves-notation/vi/vi1.png', description: 'Forward/Back 6S1, key explosive movement in neutral', video: 'videos/vi/key-moves/vi-key1.mp4' },
          { numericNotation: 'S1', notation: 'blabla', notationImage: '/key-moves-notation/vi/vi2.png', description: 'Fast, long reaching special to catch people lacking', video: 'videos/vi/key-moves/vi-key2.mp4' },
          { numericNotation: '2S2', notation: 'blabla', notationImage: '/key-moves-notation/vi/vi3.png', description: 'High vertical reaching Anti-air, often very safe on block', video: 'videos/vi/key-moves/vi-key3.mp4' },
          { numericNotation: '2M', notation: 'blabla', notationImage: '/key-moves-notation/vi/vi4.png', description: 'Safest poke/combo starter normal in neutral	', video: 'videos/vi/key-moves/vi-key4.mp4' },
          { numericNotation: '2S1', notation: 'blabla', notationImage: '/key-moves-notation/vi/vi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/vi/key-moves/vi-key5.mp4' }   
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M > H > 6S1 > L > {M} > 6S1 > {M} > {H} > 6S1 > {M} > 6S1 > {M} > 6S1 > {L} > M > H > 2S2 > S2+M', notationImage: '/combo-notation/vi/vi-combo-1.png', video: 'videos/vi/combos/vi-combo-1.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M > H > 6S1 > L > {M} > 6S1 > [L] > {M} > 6S1 > [L] > {M} > 6S1 > [L] > 6S1 > L > M > H > 2S2 > S2+M', notationImage: '/combo-notation/vi/vi-combo-2.png', video: 'videos/vi/combos/vi-combo-2.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'M > H > 6S1 > L > M > 6S1 > {M} > {H} > 6S1 > {M} > 6S1 > {M} > {H}', notationImage: '/combo-notation/vi/vi-combo-3.png', video: 'videos/vi/combos/vi-combo-3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2M > H > 6S1 > L > {M} > 6S1 > {L} > S1 > Dash > L > M > 2H > Jump > {j.S1} > 2M > Tag launch', notationImage: '/combo-notation/vi/vi-combo-4.png', video: 'videos/vi/combos/vi-combo-4.mp4' },
          { purpose: 'Jump In', numericNotation: 'j.H> M > H > 6S1 > L > {M} > 6S1 >{M} > {H} > 6S1 > {M} > 6S1 > {H} > 6S1 > {L} > M > H', notationImage: '/combo-notation/vi/vi-combo-5.png', video: 'videos/vi/combos/vi-combo-5.mp4' },
          { purpose: 'Fury', numericNotation: 'M > H > 6S1 > L > {M} > 6S1 > {M} > {H} > 6S1 > {M} > 6S1 >>{M}> 6S1>{L}> M>H>Fury>Dash>H>H>S1>Dash cancel>H>2H>Jump>jH>jS1>Dash cancel>2S2>S1+S3', notationImage: '/combo-notation/vi/vi-combo-6.png', video: 'videos/vi/combos/vi-combo-6.mp4' }
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'For Oki', numericNotation: '6S1+H', notationImage: '/combo-notation/vi/combo-enders/vi-comboEnder1.png', video: 'videos/vi/combo-enders/vi-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'S2, 6S1+[H]', notationImage: '/combo-notation/vi/combo-enders/vi-comboEnder2.png', video: 'videos/vi/combo-enders/vi-ender2.mp4' },
          { purpose: 'Damage and Super Followups', numericNotation: '2S2', notationImage: '/combo-notation/vi/combo-enders/vi-comboEnder3.png', video: 'videos/vi/combo-enders/vi-ender3.mp4' },
          { purpose: 'Assist Setups', numericNotation: 'S1/Charge S1', notationImage: '/combo-notation/vi/combo-enders/vi-comboEnder4.png', video: 'videos/vi/combo-enders/vi-ender4.mp4' },
          { purpose: 'Tag Launcher', numericNotation: 'Charge jS1 > Tag Launch', notationImage: '/combo-notation/vi/combo-enders/vi-comboEnder5.png', video: 'videos/vi/combo-enders/vi-ender5.mp4' },
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
            fuseType: 'Double Down or Freeestyle',
            explanation: 'If you are able to combo into the corner, ending in air S1, you can call WW before going into S2 super, tag to him, and land 2 of his 2S2 during/after the super, giving him full blood instantly',
            videos: [
              { id: 'F3x1mVda0vgIFVk' },
               { id: 'HHG4Cgu7uaw' }
            ]
          },
          {
            pairing: 'Ekko or Yasuo',
            fuseType: 'Freeestyle or 2x Assist',
            explanation: 'Using Vi\'s double forward sway, in combination with these characters inherent ability to cross to the otherside open up many sandwhich opportunities for both characters',
            videos: [
              { id: 'SxOSBAEJYMY' }
            ]
          },
          {
            pairing: 'Illaoi or Jinx',
            fuseType: '2x Assist',
            explanation: 'Using Vi\'s forward Assist + Back assist, you get an anti-air assist that can be nearly anywhere on the screen quite quickly',
            videos: [
              { id: 'DCBAFBurj9c' }
            ]
          },
          {
            pairing: 'Darius',
            fuseType: 'Double Down',
            explanation: 'After a Vi combo, ending in S2 Super, tagging to Darius, he is able to tac on a lot of damage with his S2 specials and his own S2 super before Vi\'s ends',
            videos: [
              { id: 'j5ErgwxieV0' }
            ]
          },
          {
            pairing: 'Ahri',
            fuseType: 'Freestyle',
            explanation: 'The best ground movement plus the best air movement lets you be real tricky with how you approach and opens potential sandwhich options with Vi\'s Sway and charge S1 tag',
            videos: [
              { id: 'ptCethbZVNA' }
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
              { id: 'F3x1-ySJqFTu4CDQ' }
            ]
          },
          {
            name: 'Blaizzy',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/blaizzy'
            },
            highlights: [
              { id: 'S3CxJx9olO0' }
            ]
          },
        ]
      },
      {
        id: 'guides',
        title: 'Guides',
        videos: [
          { 
            id: 'Ie8m5VuaXGA', 
          },
          { 
            id: 'tZLOSgLZFE4', 
          },
          { 
            id: 'tZd52GhWjgA', 
          },
        ],
      },
  ]
};
