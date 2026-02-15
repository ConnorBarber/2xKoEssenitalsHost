export const illaoi = {
  name: 'Illaoi',
  isComplete: true,
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
    name: 'BrueTube', // Author name to display
    youtube: 'Just can link my YT https://youtube.com/@bruetube?si=tCpOqi3YZ_zQlMqN', // YouTube channel URL (leave empty if none)
    twitter: '', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Illaoi is a setplay character, with strong buttons and good wall carry to set up her tentacles for oki.",
          "Her unique mechanic is tentacles which are summoned with S2 moves, and controlled by S1 moves. These tentacles define her character and are what allow her pressure and grabs to funciton."
        ],
        moves: [
          { numericNotation: '5M/2M', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi1.png', description: 'Illaoi\'s mediums are very good. 5M and 2M help you approach while maintaining pressure from a good distance', video: 'videos/illaoi/key-moves/illaoi1.mp4' },
          { numericNotation: '6S1', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi2.png', description: 'This move has a huge hitbox and hurtbox but clears projectiles and traps. Use it to approach zoners like Jinx, Teemo and Caitlyn, or just to throw a large button to control space on the screen', video: 'videos/illaoi/key-moves/illaoi2.mp4' },
          { numericNotation: 'S2 super', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi3.png', description: 'High vertical reaching Anti-air, often very safe on block', video: 'videos/illaoi/key-moves/illaoi3.mp4' },
          { numericNotation: 'j.S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi4.png', description: 'Safest poke/combo starter normal in neutral	', video: 'videos/illaoi/key-moves/illaoi4.mp4' },
          { numericNotation: 'S1 super', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi5.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi5.mp4' },   
          { numericNotation: '6S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi6.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi6.mp4' },   
          { numericNotation: '4S1/1S1', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi7.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi7.mp4' },   
          { numericNotation: '2S2', notation: 'blabla', notationImage: '/key-moves-notation/illaoi/illaoi8.png', description: 'Vi\'s 4 frame counter, easy to use on defense against auto-piloters', video: 'videos/illaoi/key-moves/illaoi8.mp4' }   
        ],
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: '2M > M > H > 2S2 > 66 > M > H > j.M > j.H > j.S1 > 2M > M > H > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-1.png', video: 'videos/illaoi/combos/illaoi-combo-1.mp4' },
          { purpose: 'Corner Carry', numericNotation: '2M > 5M > 5H > 2S2 > 66 > 66 > 5M > 5H > j.L > j.M > j.H > j.S1 > [2H] > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-2.png', video: 'videos/illaoi/combos/illaoi-combo-2.mp4' },
          { purpose: 'Side Swap', numericNotation: '2M > M > H > 2S2 > 66 > M > H > j.M > j.H > j.S1 > 66 > 5L > 5M > 5H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-3.png', video: 'videos/illaoi/combos/illaoi-combo-3.mp4' },
          { purpose: 'Jump In', numericNotation: 'j.[H] > 2M > M > H > 2S2 > 66 > M > H > j.M > j.H > j.S1 > 2M > M > H > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-4.png', video: 'videos/illaoi/combos/illaoi-combo-4.mp4' },
          { purpose: 'Crossup Jump In', numericNotation: 'j.[2H] > 2M > M > H > 2S2 > 66 > M > H > j.M > j.H > j.S1 > 2M > M > H > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-5.png', video: 'videos/illaoi/combos/illaoi-combo-5.mp4' },
          { purpose: 'Corner Combo (Medium)', numericNotation: '2M > 5H > 2S2 > [2H].c > j.S1 > [2H] > 66 > 5M > 5H > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-6.png', video: 'videos/illaoi/combos/illaoi-combo-6.mp4' },
          { purpose: 'Corner Combo (HARD)', numericNotation: '2M > 5M > 5H > 2S2 > 66 > 5M > 5H > 2H > j.L > j.L > j.L > j.L > j.S2 > j.H > j.S1 > 2H > 2S1 > [2H].c > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-7.png', video: 'videos/illaoi/combos/illaoi-combo-7.mp4' },
          { purpose: 'Fury', numericNotation: '2M > 5M > 5H > 2S2.c > Fury > 66 > 5M > 5H > j.M > j.H > j.S2.c > 66.c > 5L > 2S1 > [2H].c > j.H > j.S2 > Super', notationImage: '/combo-notation/illaoi/illaoi-combo-8.png', video: 'videos/illaoi/combos/illaoi-combo-8.mp4' },
          { purpose: 'Grab Combo', numericNotation: 'Grab > [2H] > 66 > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-9.png', video: 'videos/illaoi/combos/illaoi-combo-9.mp4' },
          { purpose: 'Air Grab Combo', numericNotation: 'Air Grab > [2H] > 66 > 2H > j.M > j.H > j.S2', notationImage: '/combo-notation/illaoi/illaoi-combo-10.png', video: 'videos/illaoi/combos/illaoi-combo-10.mp4' }
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'For Oki', numericNotation: 'S2+M', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder1.png', video: 'videos/illaoi/combo-enders/illaoi-ender-1.mp4' },
          { purpose: 'Limit Strike', numericNotation: '2S1', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder2.png', video: 'videos/illaoi/combo-enders/illaoi-ender-2.mp4' },
          { purpose: 'Damage', numericNotation: 'S1+L', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder3.png', video: 'videos/illaoi/combo-enders/illaoi-ender-3.mp4' },
          { purpose: 'Assist Setups', numericNotation: '6S2, j.S2', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder4.png', video: 'videos/illaoi/combo-enders/illaoi-ender-4.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2S1/j.S1 > T', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder5.png', video: 'videos/illaoi/combo-enders/illaoi-ender-5.mp4' },
          { purpose: 'Wall Bounce Limit Strike', numericNotation: '[2H]', notationImage: '/combo-notation/illaoi/combo-enders/illaoi-comboEnder6.png', video: 'videos/illaoi/combo-enders/illaoi-ender-6.mp4' },
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
        description: ['Aside from Ekko, Illaoi has good teams with most characters. So we will break down each fuze type rather than give character specific examples',
        "*Illaoi is one of the most enabling characters in the game, there really aren't any bad pairings with her character-wise."
        ],
        teams: [
          {
            pairing: 'Ekko',
            fuseType: 'Freeestyle',
            explanation: 'This team abuses Illaoi\'s 2[S2] together with Ekko\'s 6S1 or j.S2 to easily approach the opponent while being very annoying to deal with. Illaoi\'s tentacle pressure also empowers Ekko to be the mixup monster that he wants to be',
            videos: [
               { id: 'HHG4Cgu7uaw' }
            ]
          },
          {
            pairing: 'Any',
            fuseType: 'Freeestyle',
            explanation: 'This fuse allows Illaoi to set up multiple tentacles or trigger ones already out while still being able to keep other character on point with the tag back.',
          },
          {
            pairing: 'Any',
            fuseType: '2x Assist',
            explanation: 'One of the best 1-2 2X assists, 5T into 4T causes the tentacle from the first assist to trigger and extend the combo. 4Tx2 hits the whole screen and is very reliable to poke with.',
          },
          {
            pairing: 'Any',
            fuseType: 'Double Down',
            explanation: 'Illaoi\'s worst duo fuse. There are some good pairings like Teemo and Blitz specifically being able to combo out of her tentacle super, but generally you want one of the other two for anyone else.',
          },
        ]
      },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'Bleed',
            description: 'Literally one of the best in the world, and they play Illaoi',
            socials: {
              twitter: 'https://x.com/bleedBTW',
              twitch: 'https://www.twitch.tv/bleedbtw_'
            },
            highlights: [
              { id: 'c_QvODVM0pw' }
            ]
          },
          {
            name: 'Yosep',
            description: 'No socials available, but look Yosep up on YouTube for some of the best Illaoi/Teemo gameplay out there',
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
            id: 'pjnlKie640o', 
          },
          { 
            id: '2Rh42FactYE', 
          },
          { 
            id: 'B0LbZ4pSACw', 
          },
        ],
      },
  ]
};
