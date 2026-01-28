export const yasuo = {
  name: 'Yasuo',
  archetype: 'all rounder', // e.g., Rushdown, Grappler, Zoner, etc.
  stats: {
    range: 3,
    power: 3,
    vitality: 3,
    mobility: 3,
    ease: 3
  },
  heroImageOffset: { desktop: -365, mobile: -100 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
  guideAuthor: {
    name: 'EvanAlmighty', // Author name to display
    youtube: 'https://www.youtube.com/@EvanAlmightyFGC', // YouTube channel URL (leave empty if none)
    twitter: 'https://x.com/EvanAlmightyFGC', // Twitter/X profile URL (leave empty if none)
    twitch: 'https://www.twitch.tv/evanalmightyfgc', // Twitch channel URL (leave empty if none)
  },
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          'Yasuo is a high-skill stance based skirmisher who flows through combat with dashes and windwalls.',
        'He scales incredibly well and rewards mastery.',
        'Best for players who enjoy mechanical expression and outplay potential.'
        ],
        moves: [
          { numericNotation: 'S1', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo1.png', description: 'Also knwon as Hasagi, this move is super fast for it\'s range. 2 hitting to break armor. Max range combo with assist or into S1 super', video: 'videos/ekko/key-moves/ekko-key1.mp4' },
          { numericNotation: '4S2', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo2.png', description: 'Great setplay. Use to block projectiles, on knockdown, or to setup full screen neutral skips with your assist character.', video: 'videos/ekko/key-moves/ekko-key2.mp4' },
          { numericNotation: 'j.S1', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo3.png', description: '"Neutral skip" the move. Use this with an assist call to protect yourself while advancing forward and over enemies', video: 'videos/ekko/key-moves/ekko-key3.mp4' },
          { numericNotation: 'j.[S1]', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo4.png', description: 'Holding j.S1 angles it downward and leads to a crossup', video: 'videos/ekko/key-moves/ekko-key4.mp4' },
          { numericNotation: '[6S1]', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo5.png', description: 'Holding the grounded forward slash is also a crossup', video: 'videos/ekko/key-moves/ekko-key5.mp4' },
           { numericNotation: '2S1', notation: 'blabla', notationImage: '/key-moves-notation/yasuo/yasuo6.png', description: 'This puts Yasuo in his stance. Both useful for safe pressure, combos, and simply entering stance on command.', video: 'videos/ekko/key-moves/ekko-key5.mp4' }   
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M, H, S1, 2S1, 6, M, j.[S1], 2S1, 6, M, j.S2, 66, M, H, j.S2, 2S1, 2H, 2S1, 6, S2, 2S1, M, j.H, j.S1, j.S1, j.S2', notationImage: '/combo-notation/yasuo/yasuo1.png', video: 'videos/ekko/combos/ekko-combo-1.mp4' },
          { purpose: 'Easier Midscreen BnB', numericNotation: 'M, H, S1, 2S1, 6, M, 2S1, 6, M, j.S2, [6S1], 2S1, d.M, j.H, j.2H, j.[S1], 2S1, 2H, 2S1, 4, [6S1], 2S1, d.M, j.2H, j.S1, j.S1, j.S2', notationImage: '/combo-notation/yasuo/yasuo2.png', video: 'videos/ekko/combos/ekko-combo-2.mp4' },
          { purpose: 'Back to Corner Side Swap', numericNotation: 'M, H, S1, 2S1, 6, M, j.[S1], 2S1, H, 2S1, 2S1, 66, [6S1], 2S1, M, j.2H, j.S2, 2S1, M, j.2H, j.S1, j.S1, j.S2', notationImage: '/combo-notation/yasuo/yasuo3.png', video: 'videos/ekko/combos/ekko-combo-3.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M, H, S1, 2S1, 6, M, j.[S1], 2S1, H, 2S1, 6, S1, 2S1, M, j.S2, 66, S1, 2S1, M, j.2H, j.S2, j.2H, j.S1, j.S1', notationImage: '/combo-notation/yasuo/yasuo4.png', video: 'videos/ekko/combos/ekko-combo-4.mp4' },
          { purpose: 'Jump In', numericNotation: 'Convert into Midscreen or Corner BnB from jump attack', notationImage: '/combo-notation/yasuo/yasuo5.png', video: 'videos/ekko/combos/ekko-combo-4.mp4' },
          { purpose: 'Fury', numericNotation: 'M,H,S1,Fury,[6S1],2S1,M,j.M,j.H,j.2H,j.[S1],j.H,j.3H,j.[S1],j.H,j.3H,j.[S1],j.H,j.3H,[j.S1],j.H,j.3H,j.[S2]', notationImage: '/combo-notation/yasuo/yasuo5.png', video: 'videos/ekko/combos/ekko-combo-4.mp4' }

        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Airtech Oki', numericNotation: 'j.S2, 2S1, L', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender1.png', video: 'videos/ekko/combo-enders/ekko-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: '2S1, 2H, [6S1], 2S1, H', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender2.png', video: 'videos/ekko/combo-enders/ekko-ender2.mp4' },
          { purpose: 'Windwall Oki', numericNotation: 'j.S2, 4S2', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2S1, 2H, [6S1], 2S1, 2S1, 2T', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
          
        ],
        //below everything
        description3: [
          'Yasuo combos offer variety and big damage. He should have the tools needed for any setups in advantage.',
          "Mastering his key moves will open up more combo routes and mixup potential.",
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: '',
        teams: [
          {
            pairing: 'Teemo',
            fuseType: 'Double Down',
            explanation: 'If playing double down, Teemo is the best parter as both of Yasuo\'s supers can combo into shroom super. If Yas does S1 super then Teemo can tag, setup shrooms or bush, and still have time for S2 super.',
            videos: [
              { id: 'F3x1-NNy6h4' },
            ]
          },
          {
            pairing: 'Ekko',
            fuseType: 'Freeestyle',
            explanation: '2 best characters who both love mix. Nuff said.',
            videos: [
              { id: 'gCDtZgLubqw' },
              { id: 'EXbUrEpVoRw' }
            ]
          },
          {
            pairing: 'Warwick',
            fuseType: 'Freestyle',
            explanation: 'Same concept as Ekko/Yas but not as good (but more fun)',
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          },
          {
            pairing: 'Ahri',
            fuseType: 'Freestyle',
            explanation: 'Better than WW/Yas but not as good as Ekko/Yas',
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
            name: 'K7',
            description: '',
            socials: {
              twitter: 'https://twitter.com/Zando',
              youtube: 'https://www.youtube.com/@K7Showoff',
              twitch: 'http://www.twitch.tv/Zando'
            },
            highlights: [
              { id: 'F3x1-NNy6h4' },
              { id: 'GHhFvO0TAW0' },
              { id: 'mR92xVB7sT0' }
            ]
          },
          {
            name: 'Wawa',
            description: '',
            socials: {
              twitter: 'https://x.com/HikariNYC',
              youtube: 'https://www.youtube.com/@WawaFG',
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
