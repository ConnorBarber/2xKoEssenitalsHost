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
     description: [
          "Teemo is a character for those that enjoy: traps, unique movement, and trolling",
          "He has tons of mechanics unique to him, like his badges(darts, shrooms, and slingshot), which he builds up to full power by using these moves.",
          "Teemo also has the ability to double jump/glide, turn invisible within his 2s2 bush, and the ability to burn the bush and use its flame to fly higher",
          "If you want to play a character that requires time and effort, but is unique and plays their own gameplan, Teemo is for you."
        ],
      moves: [
        { numericNotation: 'L(LL)', notation: 'Projectile normal that can be used for: grounded keepout, dart badge, and combos', notationImage: '/key-moves-notation/teemo/teemo1.png', description: 'Projectile normal that can be used for: grounded keepout, dart badge, and combos	', video: 'videos/teemo/key-moves/teemo1.mp4' },
        { numericNotation: '2L', notation: 'Teemo\'s fastest button(NOTE: ONLY WORKS POINT BLANK), and a low', notationImage: '/key-moves-notation/teemo/teemo2.png', description: 'Teemo\'s fastest button(NOTE: ONLY WORKS POINT BLANK), and a low	', video: 'videos/teemo/key-moves/teemo2.mp4' },
        { numericNotation: '5M', notation: 'Teemo\'s fastest button with good range(8 frames + better range than 2L), and a combo starter', notationImage: '/key-moves-notation/teemo/teemo3.png', description: 'Teemo\'s fastest button with good range(8 frames + better range than 2L), and a combo starter	', video: 'videos/teemo/key-moves/teemo3.mp4' },
        { numericNotation: '2M', notation: 'Forward advancing low, and combo starter(NOTE: First hit is mid and 2 follow ups are low)', notationImage: '/key-moves-notation/teemo/teemo4.png', description: 'Forward advancing low, and combo starter(NOTE: First hit is mid and 2 follow ups are low)', video: 'videos/teemo/key-moves/teemo4.mp4' },
        { numericNotation: '2H', notation: 'Universal Anti Air', notationImage: '/key-moves-notation/teemo/teemo5.png', description: 'Universal Anti Air', video: 'videos/teemo/key-moves/teemo5.mp4' },
        { numericNotation: 'j.L', notation: 'Diagonal poke tool, used for keepout, combos. and approach', notationImage: '/key-moves-notation/teemo/teemo6.png', description: 'Diagonal poke tool, used for keepoutl, combos. and approach ', video: 'videos/teemo/key-moves/teemo6.mp4' },
        { numericNotation: 'S2 (j.S2)', notation: 'Shroom traps used to build mushroom meter, combo, camp/zoning keepout, and oki', notationImage: '/key-moves-notation/teemo/teemo7.png', description: 'Shroom traps used to build mushroom meter, combo, camp/zoning keepout, and oki	', video: 'videos/teemo/key-moves/teemo7.mp4' },
        { numericNotation: 'j.M', notation: 'Multi-hitting jump normal. Very active and deceptively big hitbox beneath and very easy to confirm.', notationImage: '/key-moves-notation/teemo/teemo8.png', description: 'Multi-hitting jump normal. Very active and deceptively big hitbox beneath and very easy to confirm.', video: 'videos/teemo/key-moves/teemo8.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'Easy BnB', numericNotation: 'M > H > 2H > j.LLL > j.MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-1.png', video: 'videos/teemo/teemo-combo-1.mp4' },
        { purpose: 'BnB', numericNotation: 'M > HH > j.LLL > j.d.M(1 hit only) > H > j.LLL > j.2MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-2.png', video: 'videos/teemo/teemo-combo-2.mp4' },
        { purpose: 'Corner Carry/Shroom Loop', numericNotation: 'M > HH > {2H} > j.6S2 > M > {2H} > j.6S2 > M > {2H} > [6S1] > Super(S1 super in the open, S2 on wall slump)', notationImage: '/combo-notation/teemo/teemo-combo-3.png', video: 'videos/teemo/teemo-combo-2.mp4' },
        { purpose: 'Tag Launcher', numericNotation: 'M > HH > j.LLL > j.d.M(1 hit only) > M > H > j.LLL > j.2MMM > j.2H > 3H > T', notationImage: '/combo-notation/teemo/teemo-combo-4.png', video: 'videos/teemo/teemo-combo-4.mp4' },
        { purpose: 'Jump In', numericNotation: 'j.L > j.M > M > HH > j.LLL > j.d.M(1 hit only) > H > j.LLL > j.2MMM > j.2H > 3H > S1+L', notationImage: '/combo-notation/teemo/teemo-combo-5.png', video: 'videos/teemo/teemo-combo-5.mp4' },
        { purpose: 'Corner Combo/Oki', numericNotation: 'M > HH > {2H} > j.5S1 > M > {2H} > j.5S1 > 6S1 > S2+L > 2S2 > j.2H	', notationImage: '/combo-notation/teemo/teemo-combo-6.png', video: 'videos/teemo/teemo-combo-6.mp4' },      
      ],
      comboEnders: [
        { purpose: 'Oki', numericNotation: 'j.H', notationImage: '/combo-notation/teemo/combo-enders/teemo-ender-1.png', video: 'videos/teemo/teemo-ender-1.mp4' },
        { purpose: 'Limit Strike	', numericNotation: 'H or 6S1', notationImage: '/combo-notation/teemo/combo-enders/teemo-ender-2.png', video: 'videos/teemo/teemo-ender-2.mp4' },
        { purpose: 'Damage', numericNotation: 'S1+L', notationImage: '/combo-notation/teemo/combo-enders/teemo-ender-3.png', video: 'videos/teemo/teemo-ender-3.mp4' },
        {purpose: 'Hard Tag', numericNotation: 'S2+L > Hard Tag', notationImage: '/combo-notation/teemo/combo-enders/teemo-ender-4.png', video: 'videos/teemo/teemo-ender-4.mp4' },
        {purpose: 'Tag Launcher', numericNotation: '3H for OTG, 6S1 in corner > T', notationImage: '/combo-notation/teemo/combo-enders/teemo-ender-5.png', video: 'videos/teemo/teemo-ender-5.mp4' },
      ]
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Yasuo',
          fuseType: 'Double Down',
          explanation: 'yasuo covers teemo\'s bad matchups(jinx, illaoi, caitlyn), and they can double down super together for both mix and dmg(ex: tornado first 3 hits into megashroom)',
          videos: [
            { id: 'd075s3HPm_0' },
          ]
        },
        {
          pairing: 'Illaoi',
          fuseType: '2x Assit or Double Down',
          explanation: 'These two characters both have great 2x Assist utitility. Illaoi enhances Teemo\'s corner pressure with intense lockdown, and her S2 super or super assist + megashroom can lock down the field for keepout',
          videos: [
            { id: 'VLNHxkOnoJ4' },
          ]
        },
        {
          pairing: 'Jinx',
          fuseType: 'Double Down or Freestyle',
          explanation: 'This team is not the strongest team, but if you want full zoning abilities, it grants all angles of coverage. Jinx gives teemo full screen zoning power, and additional items to clutter the field for keepout.',
          videos: [
            { id: 'E6FLPVTxYGs' },
          ]
        },
      ]
    },
    {
      id: 'top_players',
      title: 'Top Players',
        players: [
          {
            name: 'Inzem',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/inzemm'
            },
            highlights: [
              { id: '4FypBAwMOV4' }
            ]
          },
          {
            name: 'Globo',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/2xko'
            },
            highlights: [
              { id: 'fniPaEENBhA' }
            ]
          },
          {
            name: 'Yosep',
            description: 'No socials available, but look Yosep up on YouTube for some of the best Teemo gameplay out there',
            highlights: [
              { id: 'bTebq4JPYPw' }
            ]
          },
        ]
      },
    {
      id: 'guides',
      title: 'Guides',
        videos: [
          { 
            id: '2gEht2i_bDk', 
          },
          { 
            id: 'Ov6IWCJsV54', 
          },
          { 
            id: 'iH5Ubk3yyyU', 
          },
        ],
      },
    ],
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
}