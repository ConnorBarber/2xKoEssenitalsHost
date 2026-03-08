export const warwick = {
  name: 'Warwick',
  isComplete: true,
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
        { numericNotation: 'S1', notation: '', notationImage: '/key-moves-notation/warwick/warwick1.png', description: 'Unreactable overhead. Not really, but its fast.', video: 'videos/warwick/key-moves/warwick1.mp4' },
        { numericNotation: 'S1+j', notation: '', notationImage: '/key-moves-notation/warwick/warwick2.png', description: 'Strike/throw and plus if blocked.', video: 'videos/warwick/key-moves/warwick2.mp4' },
        { numericNotation: '2S2', notation: '', notationImage: '/key-moves-notation/warwick/warwick3.png', description: 'Best anti-air in the game', video: 'videos/warwick/key-moves/warwick3.mp4' },
        { numericNotation: '[S1] or [6S1]', notation: '', notationImage: '/key-moves-notation/warwick/warwick4.png', description: 'Can run through projectiles and exit into leap', video: 'videos/warwick/key-moves/warwick4.mp4' },
        { numericNotation: 'Bloodlust 6S1', notation: '', notationImage: '/key-moves-notation/warwick/warwick5.png', description: 'Crossup while in bloodlust', video: 'videos/warwick/key-moves/warwick5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'BnB', numericNotation: 'M > H > [2S1] > M > H > j.L > j.M > j.H > 2H > j.M > j.H > j.S1', notationImage: '/combo-notation/warwick/warwick-combo-1.png', video: 'videos/combos/warwick/ww-combo-1.mp4' },
        { purpose: 'BnB on Crouchers', numericNotation: 'M > H > 3H > d.2S1 > L > L > M > 2H > j.M > j.H > j.S1', notationImage: '/combo-notation/warwick/warwick-combo-2.png', video: 'videos/combos/warwick/ww-combo-2.mp4' },
        { purpose: 'Side Swap', numericNotation: 'M > H > 3H > d.2S1 > L > L > M > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/warwick/warwick-combo-3.png', video: 'videos/combos/warwick/ww-combo-3.mp4' },
        { purpose: 'Corner Combo', numericNotation: 'M > H > 2H > [2S1] > L > 2M > M > H > [2S1] > M > 6S2 > 2S2', notationImage: '/combo-notation/warwick/warwick-combo-4.png', video: 'videos/combos/warwick/ww-combo-4.mp4' },
        { purpose: 'Fury', numericNotation: 'Any combo but loop 6S2 > 66 > S1 at the end'}
      ],
      comboEnders: [
        { purpose: 'Healing Oki', numericNotation: 'j.H S1 2T', notationImage: '/combo-notation/warwick/ww-ender-1.png', video: 'videos/warwick/combo-ender/warwick-ender1.mp4' },
        { purpose: 'Fear Setup', numericNotation: 'j.H 2S1 2T', notationImage: '/combo-notation/warwick/ww-ender-2.png', video: 'videos/warwick/combo-ender/warwick-ender2.mp4' },
        { purpose: 'Max Dmg', numericNotation: 'j.H j.S2 TAG', notationImage: '/combo-notation/warwick/ww-ender-3.png', video: 'videos/warwick/combo-ender/warwick-ender3.mp4' },
      ],
      //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki', numericNotation: '2S2 or S1 Super', notationImage: '/combo-notation/combbo-enders/warwick/warwick-ender1.png', video: 'videos/warwick/combo-ender/warwick-ender1.mp4' },
          { purpose: 'Blood', numericNotation: '5S2x1 or S2 Super', notationImage: '/combo-notation/combo-enders/warwick/warwick-ender2.png', video: 'videos/warwick/combo-ender/warwick-ender2.mp4' },
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
            { id: 'F3x1-ZBW8b1xavhg' },
          ]
        },
        {
          pairing: 'Jinx',
          fuseType: 'Freestyle',
          explanation: 'Amazing neutral control, and a full screen projectile to help warwick on approach.',
          videos: [
            { id: 'F3x1-j9zARVOZmUk' },
          ]
        },
        {
          pairing: 'Vi',
          fuseType: 'Double Down',
          explanation: 'Super high damaging rush down team.',
          videos: [
            { id: 'F3x1-Q8KQu8lFU4o' },
          ]
        },
        
      ]
    },
    {
      id: 'top_players',
      title: 'Top Players',
      players: [        
        {
          name: 'K7',
          description: '',
          socials: {
            youtube: 'https://www.youtube.com/@K7Showoff'
          },
          highlights: [
            { id: 'F3x1-JYUuusXTpU' },
          ]
        },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      videos: [
        { id: 'F3x1-aGPcVHRN3ng' },
        { id: 'pnhh7e6OsXg' },
        { id: 'S7YMLFy4FKE' },
      ],
    },
  ]
}
