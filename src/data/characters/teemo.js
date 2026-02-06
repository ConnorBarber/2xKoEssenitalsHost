export const teemo = {
  name: 'Teemo',
  isComplete: false,
  archetype: 'trap',
  stats: {
    range: 4,
    power: 1,
    vitality: 2,
    mobility: 3,
    ease: 3
  },
  heroImageOffset: { desktop: -1080, mobile: -358 },
  guideAuthor: {
    name: '', // Author name to display
    youtube: '', // YouTube channel URL (leave empty if none)
    twitter: '', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [],
      moves: [
        { numericNotation: 'L(LL)', notation: 'Projectile normal that can be used for: grounded keepout, dart badge, and combos', notationImage: '/key-moves-notation/teemo/teemo1.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo1.mp4' },
        { numericNotation: '2L', notation: 'Teemo\'s fastest button(NOTE: ONLY WORKS POINT BLANK), and a low', notationImage: '/key-moves-notation/teemo/teemo2.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo2.mp4' },
        { numericNotation: '5M', notation: 'Teemo\'s fastest button with good range(8 frames + better range than 2L), and a combo starter', notationImage: '/key-moves-notation/teemo/teemo3.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo3.mp4' },
        { numericNotation: '2M', notation: 'Forward advancing low, and combo starter(NOTE: First hit is mid and 2 follow ups are low)', notationImage: '/key-moves-notation/teemo/teemo4.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo4.mp4' },
        { numericNotation: '2H', notation: 'Universal Anti Air', notationImage: '/key-moves-notation/teemo/teemo5.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo5.mp4' },
        { numericNotation: 'j.L', notation: 'Diagonal poke tool, used for keepout, combos. and approach', notationImage: '/key-moves-notation/teemo/teemo5.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo5.mp4' },
        { numericNotation: 'S2 (j.S2)', notation: 'Shroom traps used to build mushroom meter, combo, camp/zoning keepout, and oki', notationImage: '/key-moves-notation/teemo/teemo5.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo5.mp4' },
        { numericNotation: 'j.M', notation: 'Multi-hitting jump normal. Very active and deceptively big hitbox beneath and very easy to confirm.', notationImage: '/key-moves-notation/teemo/teemo5.png', description: 'UNDER CONSTRUCTION', video: 'videos/teemo/teemo5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'Easy BnB', numericNotation: 'L M H 2H j.M j.H j.S1 66 j.H 2T', notationImage: '/combo-notation/teemo/teemo-combo-1.png', video: 'videos/teemo/teemo-combo-1.mp4' },
        { purpose: 'BnB', numericNotation: 'M > HH > j.LLL > j.d.M(1 hit only) > M > H > j.LLL > j.2MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-1.png', video: 'videos/teemo/teemo-combo-2.mp4' },
        { purpose: 'Corner Carry', numericNotation: 'HM > HH > {2H} > j.6S1 > M > {2H} > j.6S1 > M > {2H} > [6S1] > Super(S1 super in the open, S2 on wall slump)', notationImage: '/combo-notation/teemo/teemo-combo-2.png', video: 'videos/teemo/teemo-combo-2.mp4' },
        { purpose: 'Tag Launcher', numericNotation: 'M > HH > j.LLL > j.d.M(1 hit only) > M > H > j.LLL > j.2MMM > j.2H > 3H > T', notationImage: '/combo-notation/teemo/teemo-combo-3.png', video: 'videos/teemo/teemo-combo-3.mp4' },
        { purpose: 'Jump In', numericNotation: 'j.L > j.M > M > HH > j.LLL > j.d.M(1 hit only) > M > H > j.LLL > j.2MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-4.png', video: 'videos/teemo/teemo-combo-4.mp4' },
        { purpose: 'Corner Combo', numericNotation: 'j.L > j.M > M > HH > j.LLL > j.d.M(1 hit only) > M > H > j.LLL > j.2MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-4.png', video: 'videos/teemo/teemo-combo-4.mp4' },      
      ],
      comboEnders: [
        { purpose: 'Oki', numericNotation: 'j.H 2S1 2T', notationImage: '/combo-notation/teemo/teemo-ender-1.png', video: 'videos/teemo/teemo-ender-1.mp4' },
        { purpose: 'Poison Stack', numericNotation: 'S2 j.H j.S1 2T', notationImage: '/combo-notation/teemo/teemo-ender-2.png', video: 'videos/teemo/teemo-ender-2.mp4' },
        { purpose: 'Max Dmg', numericNotation: 'j.H j.S2 TAG', notationImage: '/combo-notation/teemo/teemo-ender-3.png', video: 'videos/teemo/teemo-ender-3.mp4' },
      ]
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Ekko',
          fuseType: 'Double Down',
          explanation: 'Teemo super clears the screen for Ekko to get in. Great synergy for rushdown.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Caitlyn',
          fuseType: 'Freestyle',
          explanation: 'Double zoner team with excellent trap coverage. Mushrooms + Traps = nightmare.',
          videos: [
            { id: 'gCDtZgLubqw' },
          ]
        },
      ]
    },
    // {
    //   id: 'matchups',
    //   title: 'Matchups',
    //   matchups: {
    //     'Darius': {
    //       difficulty: 'Easy',
    //       difficultyClass: 'easy',
    //       overview: [
    //         'Teemo\'s speed and range completely shut down Darius. He cannot catch you if you play correctly.',
    //         'Poke him from range, plant mushrooms to control space, and never let him get close.'
    //       ],
    //       keyPoints: [
    //         'Speed advantage is massive',
    //         'Mushrooms prevent his approach',
    //         'Blind reduces his damage significantly',
    //         'Never trade in melee range'
    //       ],
    //       videos: []
    //     },
    //     'Yasuo': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'Yasuo\'s Wind Wall blocks your darts and his mobility can navigate around mushrooms effectively.',
    //         'Bait out Wind Wall before committing to projectiles. Use mushroom placement to limit his dash options.'
    //       ],
    //       keyPoints: [
    //         'Wind Wall negates your main poke',
    //         'His mobility counters your zoning',
    //         'Smart mushroom placement is key',
    //         'Patience wins this matchup'
    //       ],
    //       videos: []
    //     },
    //   }
    // },
  ]
}
