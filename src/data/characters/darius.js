export const darius =  {
    name: 'Darius',
    isComplete: false,
    archetype: 'all rounder',
    stats: {
      range: 3,
      power: 4,
      vitality: 4,
      mobility: 2,
      ease: 5
    },
    heroImageOffset: { desktop: -454, mobile: -150 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "FOR NOXUS!",
          "Darius is all about big buttons, big damage, and chipping the enemy down.",
          "Darius has a unique mechanic known as Bleed, when applied this makes it so the opponent takes extra chip damage, even if furied.",
        ],
        moves: [
          { numericNotation: '5M', notation: '2nd best 5M in the game, a lot of range and you can go into your main BnB', notationImage: '/key-moves-notation/darius/darius1.png', description: 'Good poke that gives a full combo on hit	', video: 'videos/darius/key-moves/darius1.mp4' },
          { numericNotation: '3H', notation: 'Very big and long Sweep, used to catch retreating guard', notationImage: '/key-moves-notation/darius/darius2.png', description: 'Good poke that also beats Retreating Guard and can catch people running away from her, it also has more range than 2M	', video: 'videos/darius/key-moves/darius2.mp4' },
          { numericNotation: '5H', notation: 'Very big Disjointed button starting at 15F, Mainly used for whiff punishing', notationImage: '/key-moves-notation/darius/darius3.png', description: 'Classic sweep that beats Retreating Guard at the end of a blockstring	', video: 'videos/darius/key-moves/darius3.mp4' },
          { numericNotation: '5S2 and 6S2', notation: 'Both of these moves apply bleed, force stand (If hit with the tipper with the 5S2 follow), and very good to extend block strings. Even though each follow up can now be parried, the 5S2 follow up can be delayed for stagger pressure. These are also what make Darius a good support character since he’s able puppet these on tag out extending blocks strings and setting mix for your other character by forcing stand and applying bleed.', notationImage: '/key-moves-notation/darius/darius4.png', description: 'A set up fireball that can be used when tagging out or on oki to make a really nasty mix-up.	', video: 'videos/darius/key-moves/darius4.mp4' },
          { numericNotation: '5S1', notation: 'His tool for mixups, the 5S1 can be parried on reaction but now you’re able to hold it allowing you to bait on the parry. If they block the held 5S1 you’ll be Plus on block allowing you to repeat the cycle again. If they do block the non held 5S1 version, it sets up a strike throw situation. The L followup is overhead while the H followup is a command grab. The M followup isn’t necessarily used, except for block damage. ', notationImage: '/key-moves-notation/darius/darius5.png', description: 'Airdash. But for real this airdash is really fast and really good at a lot of things, it makes her really scary to fight on offense and really hard to fight in nuetral.', video: 'videos/darius/key-moves/darius5.mp4' },   
          { numericNotation: '2S2', notation: 'character fireball', notationImage: '/key-moves-notation/darius/darius6.png', description: 'Her really good air buttons that you will use a lot after airdsah in neutral 	', video: 'videos/darius/key-moves/darius6.mp4' },   
          { numericNotation: 'j.H', notation: 'Disjointed aerial that\'s good for retreating and holding space', notationImage: '/key-moves-notation/darius/darius7.png', description: 'Her air fireballs are really good at controling space while not leaving yourself really vulnerable like ground fireball. It also goes farther than grounded fireball.', video: 'videos/darius/key-moves/darius7.mp4' }, 
      ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [
        ],
        combos: [
          { purpose: 'BNB', numericNotation: 'L>M>H > 2H>j.M>j.H>j.S1>j.H>6H>2S1>5H>6H>S2+M', notationImage: '/combo-notation/blitz/blitzCombo1.png', video: 'videos/blit/combos/blitzCombo1.mp4' },
          { purpose: 'Corner Carry', numericNotation: 'L>M>H > 6S2>5M>5H>6S2-S2', notationImage: '/combo-notation/blitz/blitzCombo2.png', video: 'videos/blitz/combos/blitzCombo2.mp4' },
          { purpose: 'Side Swap', numericNotation: 'L>M>H > 2H>j.M>j.H>j.S1>j.H>6H>2S1>5H>6H>S1+L', notationImage: '/combo-notation/blitz/blitzCombo3.png', video: 'videos/blitz/combos/blitzCombo3.mp4' },
          { purpose: 'Jump In', numericNotation: 'j.H>6S25>M>5H>6S2-S2', notationImage: '/combo-notation/blitz/blitzCombo3.png', video: 'videos/blitz/combos/blitzCombo3.mp4' },
          { purpose: 'Jump In 2', numericNotation: '2H>JM>JH>JS1>JH 6H>2S1>5H>6H>3S2>S2+M', notationImage: '/combo-notation/blitz/blitzCombo3.png', video: 'videos/blitz/combos/blitzCombo3.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'L>M>H >  6S2>5M>5H>6S2-S2>5M>5H>6H>j.S1>j.H>5H>6H>S1+S2', notationImage: '/combo-notation/blitz/blitzCombo3.png', video: 'videos/blitz/combos/blitzCombo3.mp4' },
         ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki and limit strike, you can 5s2 to frame kill', numericNotation: '2S1', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder1.png', video: 'videos/blitz/combo-enders/ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: '2S1', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder2.png', video: 'videos/blitz/combo-enders/ender2.mp4' },
          { purpose: 'DamDMG, if to 3S2 into LVL 2 you can make the oppenent air tech	age', numericNotation: 'S2+M', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder3.png', video: 'videos/blitz/combo-enders/ender3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '6H > T', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder4.png', video: 'videos/blitz/combo-enders/ender4.mp4' },
        
        ],
        //below everything
        description3: [
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: '',
        teams: [
          {
            pairing: 'Teemo',
            fuseType: 'Freestyle or Team Fight',
            explanation: 'Chip damage Setup Squad Premium. Shrooms and Poison + Bleed.',
            videos: [
               { id: 'TzoYcRbVl-4' }
            ]
          },
          {
            pairing: 'Braum',
            fuseType: '2x',
            explanation: 'Darius assist and buttons allow him to play around braum shield well, plus heavy damage',
            videos: [
              { id: 'Gip_qxuc7bg' }
            ]
          },
          {
            pairing: 'Illaoi',
            fuseType: 'Freestyle or 2x',
            explanation: 'Heavy synergy across these two, darius wound lets Ilaoli tencactles do crazy chip damage. Then Ilaoli can set up Darius with tentactles letting him get access to more combos and allowing him to combo after supers with double down.',
            videos: [
              { id: 'LAMOsnhj9K' }
            ]
          },          
        ]
      },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'SuperNoon',
            description: '',
            socials: {
              twitch: 'https://x.com/CrazyBlaizzy'
            },
            highlights: [
              { id: 'tnoLXZqmR3Q' }
            ]
          },
          {
            name: 'SonicFox',
            description: '',
            socials: {
              youtube: 'https://www.youtube.com/@SonicFox5000',
            },
            highlights: [
              { id: 'YZhX_uFSEyc' }
            ]
          },
          {
            name: 'Inzem',
            description: '',
            socials: {
              youtube: 'https://www.youtube.com/@INZEM'
            },
            highlights: [
              { id: 'eL39aEZi1WY' }
            ]
          },
        ]
      },
      {
        id: 'guides',
        title: 'Guides',
        videos: [
          { 
            id: 'OzISedua8EU', 
          },
          { 
            id: 'EehaX8lAX1k', 
          },
          { 
            id: 'Eq1MzZ2WJS0', 
          },
        ],
      },
  ]
};