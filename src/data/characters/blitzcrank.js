export const blitzcrank = {
  name: 'Blitzcrank',
  isComplete: false,
  archetype: 'Grappler',
  stats: {
    range: 3,
    power: 4,
    vitality: 4,
    mobility: 2,
    ease: 3
  },
  heroImageOffset: { desktop: -296, mobile: -100 },
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
          "Blitzcrank is the resident 2xKo grappler, with a unique steam mechanic and big damage combos",
          "Blitz\'s steam mechanic is built up when using his 6S2, 2S2, and S1 Super. Once Blitz has steam he has enhanced moves, speed, and damage, along with one hit of armor on his command grabs. Steam is vital to making this character playable.",
          "Blitz has a simple gameplan and simple buttons, allowing for easy pick up and play. However, he becomes harder the higher you climb and requires good fundamentals.",
        ],
        moves: [
          { numericNotation: '5M', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank1.png', description: 'Main Neutral Poke tool, disjointed enough to challenge with', video: 'videos/blitzcrank/key-moves/blitzcrank1.mp4' },
          { numericNotation: '5H', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank2.png', description: 'Large hit box to throw at opponents at even greater range, and stuff approaches', video: 'videos/blitzcrank/key-moves/blitzcrank2.mp4' },
          { numericNotation: '5L', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank3.png', description: 'Fastest button at 7 frames. Key for punishes, mashing out, and stagger pressure', video: 'videos/blitzcrank/key-moves/blitzcrank3.mp4' },
          { numericNotation: 'S2', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank4.png', description: 'Rocket Punch is useful for destroying projectiles, stopping jumps, and provides a wall bounce if it hits aerial targets', video: 'videos/blitzcrank/key-moves/blitzcrank4.mp4' },
          { numericNotation: 'S1 and j.S1', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank5.png', description: 'Rocket Grab allows Blitz to yank enemies in close, and start his strike/throw mix.j.S1 is the air version of S1 and allows for Blitz to get a hit grab. In steam both options allow follow ups on hit.', video: 'videos/blitzcrank/key-moves/blitzcrank5.mp4' },   
          { numericNotation: '{S1}', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank5.png', description: 'Holding S1 lets Blitz start cranking, and builld steam. Backdash to cancel out of this move, it makes it a great bait, as opponents will approach when they see you cranking.', video: 'videos/blitzcrank/key-moves/blitzcrank5.mp4' },   
          { numericNotation: '2S1', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank5.png', description: 'This is the anti air version of the grab, allowing blitz to rip opponents out of the sky if unsafely jumping', video: 'videos/blitzcrank/key-moves/blitzcrank5.mp4' }, 
          { numericNotation: '2S2 and j.2S2', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank5.png', description: 'These are the 2 most important command grabs for Blitz and is what makes him a grappler. Both can combo into super in the corner, and in steam can combo into S2 super anywhere on screen for big damage.', video: 'videos/blitzcrank/key-moves/blitzcrank5.mp4' }, 
          { numericNotation: '2L and 2M', notation: '', notationImage: '/key-moves-notation/blitzcrank/blitzcrank5.png', description: 'Blitz has 2 lows, which are of vital importance to his mix, due to his weak block strings you will rely on these simple tools.', video: 'videos/blitzcrank/key-moves/blitzcrank5.mp4' },  
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [
         'Blitz combos are not challenging and there is 1 combo that is practically used for everything, all that changes is your ender.',
          "When playing Blitz, it is vital to master his BnB rejump, as it can be used at all points of the stage, has great corner carry, and is universal on the cast."
        ],
        combos: [
          { purpose: 'Easy BnB', numericNotation: 'L > M > H > 2H > j.L > j.M > j.H > j.S1 > S1+L', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-1.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-1.mp4' },
          { purpose: 'BnB and Corner Carry', numericNotation: 'L > M > H > 2H > j.M > j.2H > j.H > land > 2H > {j.2H} > land > 2H > j.H > j.S1 > S1+L', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-2.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-2.mp4' },
          { purpose: 'BnB with steam', numericNotation: 'L > M > H > 2H > j.M > j.2H > j.H > land > 2H > {j.2H} > land > 2H > j.H > j.2S2 > S1+L', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-3.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-3.mp4' },
          { purpose: 'M+H(Throw Combo)Tag Launcher', numericNotation: 'wr.H > T', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-4.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-4.mp4' },
          { purpose: 'M+H(Throw Combo)Get Steam', numericNotation: 'wr.H > S1+L', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-6.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-6.mp4' },
          { purpose: 'Fury', numericNotation: 'L > M > H > 2H > j.M > j.2H > j.H > land > 2H > j.2H > Fury > land > 2H > j.H > j.S1 ->-> wr.H > S1+L', notationImage: '/combo-notation/blitzcrank/blitzcrank-combo-6.png', video: 'videos/blitzcrank/combos/blitzcrank-combo-6.mp4' },     
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki and Steam', numericNotation: 'S1+L', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder1.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'S2, {j.2H},  {j.H}', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder2.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender2.mp4' },
          { purpose: 'Damage, when Steamed', numericNotation: 'S2+M(hold to spend steam)', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder3.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender3.mp4' },
          { purpose: 'Hard Tag', numericNotation: '{j.H} > [T]', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder4.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender4.mp4' },
          { purpose: 'Tag Launcher', numericNotation: 'wr.H > T, {j.H} > T', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder5.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender5.mp4' },
          { purpose: 'Air Grab Reset', numericNotation: '5L', notationImage: '/combo-notation/blitzcrank/combo-enders/blitzcrank-comboEnder6.png', video: 'videos/blitzcrank/combo-enders/blitzcrank-ender6.mp4' },
        ],
        //below everything
        description3: [
          'Choosing a proper Blitz ender depends on what resources you have and what resouces you need(steam, super, etc), but all do damage.',
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: '',
        teams: [
          {
            pairing: 'Braum',
            fuseType: 'Double Down',
            explanation: 'The Big Boys Squad, this team uses Braum assist to shield up while Blitz engages in shenanigans. Also, with Double Down, both can get their upgrades(Steam for Blitz and Unbreakable for Braum) off either super. In the corner they have immense pressure and not to mention damage.',
            videos: [
               { id: 'HHG4Cgu7uaw' }
            ]
          },
          {
            pairing: 'Yasuo',
            fuseType: 'Freeestyle',
            explanation: 'Yasuo being such a strong point character and Blitz being such a strong assist character makes for a great pairing. This also allows Blitz access to left/right mix, which he usually has none.',
            videos: [
              { id: 'SxOSBAEJYMY' }
            ]
          },
          {
            pairing: 'Teemo',
            fuseType: 'Double Down or Freestyle',
            explanation: 'A high risk high reward team. Neither do good solo, but together they have oppressive corner pressure, gimmicks, and mental stack ability. Teemo can also OTG after Blitz throws with a tag.',
            videos: [
              { id: 'DCBAFBurj9c' }
            ]
          },          
        ]
      },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'Tate',
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
            name: 'TTurtle',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/blaizzy'
            },
            highlights: [
              { id: 'S3CxJx9olO0' }
            ]
          },
          {
            name: 'Vall3y',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/vall3y'
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
            id: 'IHTr25KGyiM', 
          },
          { 
            id: 'Yj3lOumwBxs', 
          },
          { 
            id: 'zTpfCUJB1CA', 
          },
        ],
      },
  ]
};
