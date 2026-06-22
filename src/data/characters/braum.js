export const braum = {
  name: 'Braum',
  isComplete: true,
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
    name: 'DragonPunched', // Author name to display
    twitter: 'https://twitter.com/dragon_punched', // Twitter/X profile URL (leave empty if none)
    youtube: 'https://www.youtube.com/@dragonpunched9294/videos', // YouTube channel URL (leave empty if none)
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
          { numericNotation: '5M', notation: '', notationImage: '/key-moves-notation/braum/braum1.png', description: 'Main poke to get your pressure started', video: 'videos/braum/key-moves/braum1.mp4' },
          { numericNotation: '2M', notation: '', notationImage: '/key-moves-notation/braum/braum2.png', description: 'Also a good poke only been a frame slower then 5M making it 15 frames but reaches slight further then 5M', video: 'videos/braum/key-moves/braum2.mp4' },
          { numericNotation: '6S1 or [6S1]', notation: '', notationImage: '/key-moves-notation/braum/braum3.png', description: 'Your only projectile can be good to catch something fullscreen or to throw it out with no charge during a blockstring', video: 'videos/braum/key-moves/braum3.mp4' },
          { numericNotation: '6S1', notation: '', notationImage: '/key-moves-notation/braum/braum4.png', description: '6s1 can OTG a knockdown opponent after his 3H for his BNBs', video: 'videos/braum/key-moves/braum4.mp4' },
          { numericNotation: '[6S1]', notation: '', notationImage: '/key-moves-notation/braum/braum5.png', description: '6S1 is fast and can recover in time in some situations, and they can also interrupt your opponent while you\'re getting hit', video: 'videos/braum/key-moves/braum5.mp4' },   
          { numericNotation: '4S2', notation: '', notationImage: '/key-moves-notation/braum/braum6.png', description: 'Is the BRAUM SHIELD, used to protect yourself and assists. Also stops you from being killed by chip.', video: 'videos/braum/key-moves/braum6.mp4' },
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'Corner Carry no UB', numericNotation: '5L > 5M > 2M > 5H > 6H > 3H > 6s1 > 5M > 2H-2H > [5s2] > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo1.png', video: 'videos/braum/combos/brombo1.mp4' },
          { purpose: 'Corner Carry with UB', numericNotation: '5L > 5M > 2M > 5H > 6H > 5s1 > {jH} > 5H > 6H > 3H > 6s1 > 66 5M > 2H-2H > [5s2] > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo2.png', video: 'videos/braum/combos/brombo2.mp4' },
          { purpose: 'Midscreen BnB no UB', numericNotation: '5L > 5M > 2M > 5H > 6H-6H > [5s2] > 5M > 2H > 2H > [6s1] > 6H > 5s2-s2', notationImage: '/combo-notation/braum/brombo3.png', video: 'videos/braum/combos/brombo3.mp4' },
          { purpose: 'Midscreen BnB with UB', numericNotation: '5L > 5M > 2M > 5H > 6H > 5s1 > {jH} > 5H > 6H > 2H-2H > js2 > 6H > 5s2-s2', notationImage: '/combo-notation/braum/brombo4.png', video: 'videos/braum/combos/brombo4.mp4' },
          { purpose: 'M Route No UB', numericNotation: '5M > 2M > 5H > 6H > 3H > 6s1 > Dash > 5M > 2H > jL > jM > d.jH > 5H-5H > 5s2-s2', notationImage: '/combo-notation/braum/brombo5.png', video: 'videos/braum/combos/brombo5.mp4' },
          { purpose: 'M Route with UB', numericNotation: '5M > 5H > 5s1 > [6H] > dash > 5s1 > [6H] > dash > [6s1] > dash > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo6.png', video: 'videos/braum/combos/brombo6.mp4' },
          { purpose: 'M Corner Route No UB', numericNotation: '5M > 2M > 5H > 6H-6H > [5s2] > 5M > 2H-2H > [6s1] > 6H > 5s2-s2', notationImage: '/combo-notation/braum/brombo7.png', video: 'videos/braum/combos/brombo7.mp4' },
          { purpose: 'M Corner Route with UB(hard)', numericNotation: '5M > 5H > 5s1 > [6H] > backdash > d.[6H] > backdash > d.[6s1] > [5s2] > 2M > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo8.png', video: 'videos/braum/combos/brombo8.mp4' },    
          { purpose: '3H Midscreen', numericNotation: '3H > 2s2 > 5s1 > dash > [jH] > 5M > 2M > 5s2-s2', notationImage: '/combo-notation/braum/brombo9.png', video: 'videos/braum/combos/brombo9.mp4' },    
          { purpose: '3H Corner', numericNotation: '3H > 2s2 > 6H > 5s1 > backdash > 2M > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo10.png', video: 'videos/braum/combos/brombo10.mp4' },    
          { purpose: 'Air Throw NonUB', numericNotation: 'Airthrow > d.js2 > dash > 5M > 2M > 5s2-s2', notationImage: '/combo-notation/braum/brombo11.png', video: 'videos/braum/combos/brombo11.mp4' },    
          { purpose: 'Air Throw with UB', numericNotation: 'Airthrow > d.js2 > dash > 5H > 2s2 > 6H > 5s2-s2', notationImage: '/combo-notation/braum/brombo12.png', video: 'videos/braum/combos/brombo12.mp4' },    
          { purpose: 'Command Grab Combo UB', numericNotation: '2s1 > [6H] > dash > [6s1] > 5H-5H > 5s2-s2', notationImage: '/combo-notation/braum/brombo13.png', video: 'videos/braum/combos/brombo13.mp4' },    
          { purpose: 'Shield Charge Midscreen', numericNotation: '[5s2] > d.5s1 > 6H > dash > [6s1] > dash > 5M > 5s2-s2', notationImage: '/combo-notation/braum/brombo14.png', video: 'videos/braum/combos/brombo14.mp4' },    
          { purpose: 'Shield Charge Corner', numericNotation: '[5s2] > 5H > 2s2 > d.2M > 5M > 2H > 5s2-s2', notationImage: '/combo-notation/braum/brombo15.png', video: 'videos/braum/combos/brombo15.mp4' },    

        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [          
          { purpose: 'For Unbreakable', numericNotation: '5S2>S2', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder3.png', video: 'videos/braum/combo-enders/braumEnder2.mp4' },
          { purpose: 'For Dmg and Unbreakable', numericNotation: 'S2+M', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder4.png', video: 'videos/braum/combo-enders/braumEnder3.mp4' },
          { purpose: 'For Niche Fast Oki', numericNotation: 'S1+L', notationImage: '/combo-notation/braum/combo-enders/braum-comboEnder1.png', video: 'videos/braum/combo-enders/braumEnder1.mp4' },
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
            pairing: 'Darius',
            fuseType: '2x Assist',
            explanation: 'This team is about simple gameplans and high damage. Braum shield + Amazing Darius assist = safe wall bounce combos. Use your fundamentals to win neutral, force them to the corner, either apply bleed or get unbreakable.',
            videos: [
               { id: 'i_yBJF7k3VE' }
            ]
          },
          {
            pairing: 'Vi',
            fuseType: 'Double Down',
            explanation: 'Once again, Braum is all about simple gameplans. Vi enables wicked strong corner carry, a good neutral, and with charge s1 shenanigans, with Braum shield, plenty of neutral abuse.',
            videos: [
              { id: 'gh4td8yIdJk' }
            ]
          },
          {
            pairing: 'Ahri',
            fuseType: 'Freestyle',
            explanation: 'Ahri with her ability to confirm off of many buttons, and carry to the corner, eables braum to get unbreakable. Meanwhile Braum can protect ahri while she abuses multioverhead mix. She also makes up for his slower speed.',
            videos: [
              { id: 'HpWFAOu0cuw' }
            ]
          },          
        ]
      },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'Lighwisp',
            description: '',
            socials: {
              twitch: 'https://www.twitch.tv/lightwhisp'
            },
            highlights: [
              { id: 'mGRc941KzuA' }
            ]
          },
          {
            name: 'Galliated',
            description: 'No socials to speak of here, but totally worth looking up Vods for Braum sauce.',
            socials: {
              twitch: ''
            },
            highlights: [
              { id: 'i_yBJF7k3VE' }
            ]
          },
          {
            name: 'MrChupy',
            description: 'No socials to speak of here, but totally worth looking up Vods for Braum sauce.',
            socials: {
              twitter: 'https://x.com/Mrchupy01'
            },
            highlights: [
              { id: '3XPIISjef70' }
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