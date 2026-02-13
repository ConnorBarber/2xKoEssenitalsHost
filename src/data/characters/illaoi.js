export const illaoi = {
  name: 'Illaoi',
  isComplete: false,
  archetype: 'bruiser',
  stats: {
    range: 3,
    power: 4,
    vitality: 4,
    mobility: 2,
    ease: 3
  },
  heroImageOffset: { desktop: -57, mobile: -28 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
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
          { numericNotation: '5M/2M', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi.png', description: 'Illaoi\'s mediums are very good. 5M and 2M help you approach while maintaining pressure from a good distance', video: 'videos/illaoi/key-moves/illaoi-key1.mp4' },
          { numericNotation: '6S1', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi2.png', description: 'This move has a huge hitbox and hurtbox but clears projectiles and traps. Use it to approach zoners like Jinx, Teemo and Caitlyn, or just to throw a large button to control space on the screen', video: 'videos/illaoi/key-moves/illaoi-key2.mp4' },
          { numericNotation: 'S2 super', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi3.png', description: 'High vertical reaching Anti-air, often very safe on block', video: 'videos/illaoi/key-moves/illaoi-key3.mp4' },
          { numericNotation: 'j.S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi4.png', description: 'Safest poke/combo starter normal in neutral	', video: 'videos/illaoi/key-moves/illaoi-key4.mp4' },
          { numericNotation: 'S1 super', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi-key5.mp4' },   
          { numericNotation: '6S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi-key5.mp4' },   
          { numericNotation: '4S1/1S1', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi-key5.mp4' },   
          { numericNotation: '2S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi-key5.mp4' }   
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M > H > 6S1 > L > {M} > 6S1 > {M} > {H} > 6S1 > {M} > 6S1 > {M} > 6S1 > {L} > M > H > 2S2 > S2+M', notationImage: '/combo-notation/illaoi/illaoi-combo-1.png', video: 'videos/illaoi/combos/illaoi-combo-1.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M > H > 6S1 > L > {M} > 6S1 > [L] > {M} > 6S1 > [L] > {M} > 6S1 > [L] > 6S1 > L > M > H > 2S2 > S2+M', notationImage: '/combo-notation/illaoi/illaoi-combo-2.png', video: 'videos/illaoi/combos/illaoi-combo-2.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'M > H > 6S1 > L > M > 6S1 > {M} > {H} > 6S1 > {M} > 6S1 > {M} > {H}', notationImage: '/combo-notation/illaoi/illaoi-combo-3.png', video: 'videos/illaoi/combos/illaoi-combo-3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2M > H > 6S1 > L > {M} > 6S1 > {L} > S1 > Dash > L > M > 2H > Jump > {j.S1} > 2M > Tag launch', notationImage: '/combo-notation/illaoi/illaoi-combo-4.png', video: 'videos/illaoi/combos/illaoi-combo-4.mp4' },
          { purpose: 'Jump In', numericNotation: 'j.H> M > H > 6S1 > L > {M} > 6S1 >/*{M}*\/> {H} <*/> 6S1 <*/>{M}*\/> 6S1 <*/>{H}*\/> 6S1 <*/>{L}*\/> M <*/> H', notationImage: '/combo-notation/illaoi/illaoi-combo-5.png', video: 'videos/illaoi/combos/illaoi-combo-5.mp4' },
          { purpose: 'Fury', numericNotation: 'M <*/> H <*/> 6S1 <*/> L <*/> {M} <*/> 6S1 <*/> {M} <*/> {H} <*/> 6S1 <*/> {M} <*/> 6S1 >>{M}> 6S1>{L}> M>H>Fury>Dash>H>H>S1>Dash cancel>H>2H>Jump>jH>jS1>Dash cancel>2S2>S1+S3', notationImage: '/combo-notation/illaoi/illaoi-combo-6.png', video: 'videos/illaoi/combos/illaoi-combo-6.mp4' }
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'For Oki', numericNotation: '6S1+H', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder1.png', video: 'videos/illaoi/combo-enders/illaoi-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'S2, 6S1+[H]', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder2.png', video: 'videos/illaoi/combo-enders/illaoi-ender2.mp4' },
          { purpose: 'Damage and Super Followups', numericNotation: '2S2', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder3.png', video: 'videos/illaoi/combo-enders/illaoi-ender3.mp4' },
          { purpose: 'Assist Setups', numericNotation: 'S1/Charge S1', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder4.png', video: 'videos/illaoi/combo-enders/illaoi-ender4.mp4' },
          { purpose: 'Tag Launcher', numericNotation: 'Charge jS1 > Tag Launch', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder5.png', video: 'videos/illaoi/combo-enders/illaoi-ender5.mp4' },
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
