export const ahri = {
  name: 'Ahri',
  isComplete: false,
  archetype: 'rushdown',
  stats: {
    range: 3,
    power: 2,
    vitality: 2,
    mobility: 5,
    ease: 3
  },
  heroImageOffset: { desktop: -104, mobile: -27 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
  tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Ahri is all about that movement, that runaway, that...temptress energy.",
          "Ahri's mobility is her greatest strength, allowing her to control space and create opportunities.",
          "She can be as complex or simple as you want, with a variety of tools to keep opponents guessing.",
        ],
        moves: [
          { numericNotation: '5M', notation: '', notationImage: '/key-moves-notation/ahri/ahri1.png', description: 'Good poke that gives a full combo on hit	', video: 'videos/ahri/key-moves/ahri1.mp4' },
          { numericNotation: '2M', notation: '', notationImage: '/key-moves-notation/ahri/ahri2.png', description: 'Good poke that also beats Retreating Guard and can catch people running away from her, it also has more range than 2M	', video: 'videos/ahri/key-moves/ahri2.mp4' },
          { numericNotation: '3H', notation: '', notationImage: '/key-moves-notation/ahri/ahri3.png', description: 'Classic sweep that beats Retreating Guard at the end of a blockstring	', video: 'videos/ahri/key-moves/ahri3.mp4' },
          { numericNotation: '2S1', notation: '', notationImage: '/key-moves-notation/ahri/ahri4.png', description: 'A set up fireball that can be used when tagging out or on oki to make a really nasty mix-up.	', video: 'videos/ahri/key-moves/ahri4.mp4' },
          { numericNotation: 'j.66', notation: '', notationImage: '/key-moves-notation/ahri/ahri5.png', description: 'Airdash. But for real this airdash is really fast and really good at a lot of things, it makes her really scary to fight on offense and really hard to fight in nuetral.', video: 'videos/ahri/key-moves/ahri5.mp4' },   
          { numericNotation: 'j.H, j.2H', notation: '', notationImage: '/key-moves-notation/ahri/ahri6.png', description: 'Her really good air buttons that you will use a lot after airdsah in neutral 	', video: 'videos/ahri/key-moves/ahri6.mp4' },   
          { numericNotation: 'j.S1, j.2S1', notation: '', notationImage: '/key-moves-notation/ahri/ahri7.png', description: 'Her air fireballs are really good at controling space while not leaving yourself really vulnerable like ground fireball. It also goes farther than grounded fireball.', video: 'videos/ahri/key-moves/ahri7.mp4' }, 
      ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [
        ],
        combos: [
          { purpose: 'Easy BnB', numericNotation: 'L>M>H > 6s2~7s2~ slight dl 5s1 IAD j.{H} 66 5H > j.2h dl j.H > 5H > j.2h dl j.H > j.3s2 > (3H 5s2~2s1)', notationImage: '/combo-notation/blitz/blitzCombo1.png', video: 'videos/blit/combos/blitzCombo1.mp4' },
          { purpose: 'Side Swap', numericNotation: 'L>M>H -> 6s2~7s2~5s1 IAD j.{H} 66 5H > j.2h dl j.H > 5H > j.2h dl j.H > j.3s2 > (3H 5s2~2s1)', notationImage: '/combo-notation/blitz/blitzCombo2.png', video: 'videos/blitz/combos/blitzCombo2.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'L>M>H > 5s1~s1~j.5s1 IAD j.{H} 66 5H > j.2h dl j.H > 5H > j.2h dl j.H > j.3s2 > (3H 5s2~2s1)', notationImage: '/combo-notation/blitz/blitzCombo3.png', video: 'videos/blitz/combos/blitzCombo3.mp4' },
         ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki', numericNotation: '3h 5s2~2s1', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder1.png', video: 'videos/blitz/combo-enders/ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: '3h 5s2~2s1', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder2.png', video: 'videos/blitz/combo-enders/ender2.mp4' },
          { purpose: 'Damage', numericNotation: '3h 5s2(2) Super 2', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder3.png', video: 'videos/blitz/combo-enders/ender3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '3h T', notationImage: '/combo-notation/blitz/combo-enders/blitzEnder4.png', video: 'videos/blitz/combo-enders/ender4.mp4' },
        ],
        //below everything
        description3: [
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: 'Blitz is a strong support character and can work with any character if you play arounnd his restand mix ability, you can make all characters work. However, here are some fun suggestions.',
        teams: [
          {
            pairing: 'Ekko',
            fuseType: '2x or Freestyle',
            explanation: 'Team is mix city, they both give eachother access to good mix, better on block pressure, and some fun grounded resets, making sure the only option the opponent has is to block right. Neutral with this team might make you think a little harder because you can\'t skip it as easily as a Yasuo or Vi can, but with the plenty of tricky options this team has it won\'t be too hard to get into your opponent\'s face and mix them to the grave.',
            videos: [
               { id: 'TzoYcRbVl-4' }
            ]
          },
          {
            pairing: 'Teemo',
            fuseType: 'Freeestyle',
            explanation: 'This team has really good neutral with Teemo pebble, mushrooms, and Ahri orb. This team doesn\'t have a braindead neutral skip like other teams do, so you have to think a little more to win, but the tools you have are really good. You can\'t become too predictable and rotate your tools properly, because if your opponent knows what you will be doing, it\'s easy to beat out any opponent without an assist. If you know your combos, you can get some crazy damage with this team too. Overall, the team is really good, and if you put in the work to master it with all the puppeting you can do with this team, you will get an amazing team that only gets better with time.',
            videos: [
              { id: 'Gip_qxuc7bg' }
            ]
          },
          {
            pairing: 'Yasuo',
            fuseType: 'Freestyle',
            explanation: 'Yasuo and Ahri are a really good duo for damage. You basically want to 2 touch with this team every time, with the amazing damage you get off of orb Yasuo pick-ups to the easy confirms you get off of any stray hit to the great mix that Yasuo gets off of Ahri assists. You want to get in and hit hard with the movement of a low damage character.',
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
            name: 'Blaizzy',
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
            id: '7PVir9a_dmQ', 
          },
          { 
            id: 'E2yJ-Fziqzo', 
          },
          { 
            id: 'X_bf85QGOGg', 
          },
        ],
      },
  ]
};