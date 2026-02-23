export const braum = {
  name: 'Braum',
  isComplete: false,
  archetype: 'bruiser',
  stats: {
    range: 2,
    power: 5,
    vitality: 5,
    mobility: 2,
    ease: 4
  },
  heroImageOffset: { desktop: -82, mobile: -35 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
  guideAuthor: {
    name: '', // Author name to display
    twitter: 'https://x.com/Mrchupy01', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Braum is a true tank character, with a shield to defend allies and super armor for himself.",
          "His focus is on achieving his Unbreakable state, which grants him one hit of armor, allowing him to power through attacking enemies and steal his turns back",
          "Theis and his ability to dish out majorly high damage, makes Braum a unique and fun character who truly unlocks with their win condition."
        ],
        moves: [
          { numericNotation: '5M', notation: '', notationImage: '/key-moves-notation/braum/braum1.png', description: 'Main poke to get your pressure started', video: 'videos/braum/key-moves/braum-key1.mp4' },
          { numericNotation: '2M', notation: '', notationImage: '/key-moves-notation/braum/braum2.png', description: 'Also a good poke only been a frame slower then 5M making it 15 frames but reaches slight further then 5M', video: 'videos/braum/key-moves/braum-key2.mp4' },
          { numericNotation: '6S1 or [6S1]', notation: '', notationImage: '/key-moves-notation/braum/braum3.png', description: 'Your only projectile can be good to catch something fullscreen or to throw it out with no charge during a blockstring', video: 'videos/braum/key-moves/braum-key3.mp4' },
          { numericNotation: '6S1', notation: '', notationImage: '/key-moves-notation/braum/braum4.png', description: '6s1 can OTG a knockdown opponent after his 3H for his BNBs', video: 'videos/braum/key-moves/braum-key4.mp4' },
          { numericNotation: '[6S1]', notation: '', notationImage: '/key-moves-notation/braum/braum5.png', description: '6S1 is fast and can recover in time in some situations, and they can also interrupt your opponent while you\'re getting hit', video: 'videos/braum/key-moves/braum-key5.mp4' },   
          { numericNotation: 'S2', notation: '', notationImage: '/key-moves-notation/braum/braum6.png', description: 'Is the BRAUM SHIELD, used to protect yourself and assists. Also stops you from being killed by chip.', video: 'videos/braum/key-moves/braum-key6.mp4' },
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'Midscreen BnB', numericNotation: '5M 5H 6H>6H [S2] 5M 5H>5H S2>S2', notationImage: '/combo-notation/braum/braum-combo-1.png', video: 'videos/braum/combos/brombo1.mp4' },
          { purpose: 'BnB Close to Corner', numericNotation: '5M 5H 6H>6H [S2] 5M 2H>2H [6S1] 2H>2H J.S2 6H S2>S2', notationImage: '/combo-notation/braum/braum-combo-2.png', video: 'videos/braum/combos/brombo2.mp4' },
          { purpose: 'Alternate Midscreen', numericNotation: '5M 5H 3H 6S1 Dash 5M 2H>2H [S2] 5M S2>S2', notationImage: '/combo-notation/braum/braum-combo-3.png', video: 'videos/braum/combos/braum-combo-3.mp4' },
          { purpose: 'Side Swap', numericNotation: '5M 5H S1 micro dash [6H] Dash Cancel [6S1] 5M S2>S2', notationImage: '/combo-notation/braum/braum-combo-4.png', video: 'videos/braum/combos/brombo4.mp4' },
          { purpose: 'Unbreakable Midscreen Simple', numericNotation: '5M 5H S1 Backdash [6H] dashcancel [6S1] Dash S2>S2', notationImage: '/combo-notation/braum/braum-combo-5.png', video: 'videos/braum/combos/brombo5.mp4' },
          { purpose: 'Unbreakable Midscreen BnB', numericNotation: '5M 5H 6H [S2] Dash 5M 2H>2H [6S1] 5H 2S2 S2>S2', notationImage: '/combo-notation/braum/braum-combo-6.png', video: 'videos/braum/combos/brombo6.mp4' },
          { purpose: 'Unbreakable Corner to Corner', numericNotation: '5M 5H 6H [S2] Dash 5M 2H>2H [6S1] 5H 2S2 S2>S2', notationImage: '/combo-notation/braum/braum-combo-7.png', video: 'videos/braum/combos/brombo7.mp4' },
          { purpose: 'Unbreakable Command Grab', numericNotation: '2S1 DASH JUMP 5M S2>S2', notationImage: '/combo-notation/braum/braum-combo-8.png', video: 'videos/braum/combos/brombo8.mp4' },    
        
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'For Oki', numericNotation: '6S1+H', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder1.png', video: 'videos/braum/combo-enders/braum-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'S2, 6S1+[H]', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder2.png', video: 'videos/braum/combo-enders/braum-ender2.mp4' },
          { purpose: 'Damage and Super Followups', numericNotation: '2S2', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder3.png', video: 'videos/braum/combo-enders/braum-ender3.mp4' },
          { purpose: 'Assist Setups', numericNotation: 'S1/Charge S1', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder4.png', video: 'videos/braum/combo-enders/braum-ender4.mp4' },
          { purpose: 'Tag Launcher', numericNotation: 'Charge jS1 > Tag Launch', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder5.png', video: 'videos/braum/combo-enders/braum-ender5.mp4' },
        ],
        //below everything
        description3: [
          ''
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
              twitter: 'https://x.com/zandowastaken',
              twitch: 'http://www.twitch.tv/Zando'
            },
            highlights: [
              { id: 'EZ2mbmn7nvM' }
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
            id: 'fhZpm1D5_CY', 
          },
          { 
            id: 'R6zN-R05zSU', 
          },
          { 
            id: 'vC_C679p-dQ', 
          },
        ],
      },
  ]
};