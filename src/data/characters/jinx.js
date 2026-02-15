export const jinx = {
  name: 'Jinx',
  isComplete: true,
  archetype: 'Zoner',
  stats: {
    range: 4,
    power: 3,
    vitality: 2,
    mobility: 2,
    ease: 4
  },
  heroImageOffset: { desktop: -164, mobile: -63 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
  guideAuthor: {
    name: 'YoTerrako', // Author name to display
    youtube: 'https://www.youtube.com/@YoTerrako', // YouTube channel URL (leave empty if none)
    twitter: 'https://x.com/TerrAkoFGC', // Twitter/X profile URL (leave empty if none)
    twitch: '', // Twitch channel URL (leave empty if none)
  },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        ''
      ],
      moves: [
        { numericNotation: '5M', notation: '', notationImage: '/key-moves-notation/jinx/jinx1.png', description: 'Her main poke and combo starter, she gets most of her damage starting from this move. Always combos into 5H even from the very tip and is generally the button you want to be pressing all the time on the ground.', video: 'videos/jinx/key-moves/jinx-key1.mp4' },
        { numericNotation: '3L', notation: '', notationImage: '/key-moves-notation/jinx/jinx2.png', description: 'Surprisingly, a good poke and can low-profile some stuff like projectiles and normals that don\'t hit low to the ground. Also, one of her only good ways to catch retreating guard.', video: 'videos/jinx/key-moves/jinx-key2.mp4' },
        { numericNotation: '66M', notation: '', notationImage: '/key-moves-notation/jinx/jinx3.png', description: 'An amazing poke and normal to challenge your opponent. It hits low, making it good at catching a retreating guard from an assist call and catching people dashing in neutral.', video: 'videos/jinx/key-moves/jinx-key3.mp4' },
        { numericNotation: 'j.S2', notation: '', notationImage: '/key-moves-notation/jinx/jinx4.png', description: 'Falling air rocket, and to some extent ground rocket are her main tools to be using in neutral. Jinx really doesn\'t want to be on the ground that much because rocket is so strong. You mainly use it to zone without being so committal, but you can use it to keep your assists safe or to approach after firing.', video: 'videos/jinx/key-moves/jinx-key4.mp4' },
        { numericNotation: 'j.2H', notation: '', notationImage: '/key-moves-notation/jinx/jinx5.png', description: 'Because you jump so much, you want to have a way to mix up what you are doing in the air. This button helps with that a lot, it changes your momentem instantly and on hit you can get a full combo into trap mix. Even if it doesn\'t hit your opponent has to guess if u will do it again that can beat their anti-air or go for a j.L or j.M that gives you better pressure.', video: 'videos/jinx/key-moves/jinx-key5.mp4' },
        { numericNotation: '2S1', notation: '', notationImage: '/key-moves-notation/jinx/jinx6.png', description: 'Clappy is a very important part of her gameplan for oki, zoning, and movement. With the new buffs in patch 1.1.1 you basically always want to set up Clappy on every knockdown other than specialized set-ups.', video: 'videos/jinx/key-moves/jinx-key6.mp4' },
        { numericNotation: '4S2', notation: '', notationImage: '/key-moves-notation/jinx/jinx7.png', description: 'Big zap gives you combos from full screen off of her projectiles and stray hits. It also beats most non-super projectiles outright.', video: 'videos/jinx/key-moves/jinx-key7.mp4' },
      ]
    },
{
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'LMH > 2H >  j.H >  j.2H > falling j.h > 2H > d.j.[H] > j.2S2 > j.S2 > 3H', notationImage: '/combo-notation/jinx/jinx-combo1.png', video: 'videos/jinx/combos/jinx-combo-1.mp4' },
          { purpose: 'Side Swap', numericNotation: 'LMH > 2H > j.H > j.2H > falling > j.h > 2H > j.[H]', notationImage: '/combo-notation/jinx/jinx-combo2.png', video: 'videos/jinx/combos/jinx-combo-2.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'LMH > 2H > j.[H] > j.2s2 > j.s2 > 5[H] > 2s1 > 5M > 2s2 > land 6s1 > 2s1 > super jump j.H > j.2H >  j.[H]', notationImage: '/combo-notation/jinx/jinx-combo4.png', video: 'videos/jinx/combos/jinx-combo-4.mp4' },
        ],  
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Oki', numericNotation: 'j.[H] or 3H > 2S1', notationImage: '/combo-notation/jinx/combo-enders/jinx-ender1.png', video: 'videos/jinx/combo-enders/jinx-ender1.mp4' },
          { purpose: 'Limit Strike', numericNotation: 'j.2H', notationImage: '/combo-notation/jinx/combo-enders/jinx-ender2.png', video: 'videos/jinx/combo-enders/jinx-ender2.mp4' },
          { purpose: 'Damage', numericNotation: '2S2 > j.S1 > S2+M', notationImage: '/combo-notation/jinx/combo-enders/jinx-ender3.png', video: 'videos/jinx/combo-enders/jinx-ender3.mp4' },
          { purpose: 'Tag Launcher', numericNotation: '2m(1) > 5H > 2T', notationImage: '/combo-notation/jinx/combo-enders/jinx-ender4.png', video: 'videos/jinx/combo-enders/jinx-ender4.mp4' },
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
            fuseType: 'Double Down',
            explanation: 'Double zoner team, its strengths are keeping people out with amazing zoning patterns and good chip. Teemo gives Jinx good damage, better tools for zoning, and easy ways to get in with super tag. He also makes up for Jinx\'s lack of mix by having an instant overhead and amazing layers of high-low with his float, and j.M. Teemo\'s pick-ups with mushrooms are also really good for this team and can keep Jinx really safe after things like overhead and minigun. Though the same way, doubling up on your strengths is good, you also have double the downsides. Teemo\'s defence isn\'t the best, and getting caught out when you don\'t have an assist or something on screen is also really bad for the team. Overall, the team is really annoying to fight and really good to play and farm some funny rage quit clips.',
            videos: [
               { id: 'wVhgjSjGnBQ' }
            ]
          },
          {
            pairing: 'Ekko',
            fuseType: 'Freeestyle',
            explanation: 'Timebomb, a classic team that, like most good teams, has Ekko on it. Ekko kinda just does everything right now. Crazy good mix, really good neutral, fast and tricky, and a lot of other things. With this team, Jinx gives Ekko really good Neutal with her rocket assist, and knockdowns can become even scarier with trap assist oki. The whole team has really good assists with rocket assist from Jinx and Ekko Cronostrike and Timewinder. Jinx can give Ekko really easy ways to skip neutral and fly past projectiles with roll and zap. Zap also gives Ekko combos from full screen. Minigun is also good in this team because it lockdowns for a long time and lets Ekko charge clone or get ready for some really good midscreen mix-ups while still being able to be a demon in the corner with Ekko\'s, solo lob mix. Overall Jinx doesn\'t really give Ekko much he doesn\'t already have, but just like a healthy couple. Jinx just enhances everything Ekko does, and Ekko gives Jinx everything she needs to be good.',
            videos: [
              { id: 'GgH3maTkxH8' }
            ]
          },
          {
            pairing: 'Warwick',
            fuseType: '2x Assist',
            explanation: 'Father and Daughter duo, Warwick Jinx is a really good win neutral team. Jinx\'s double rocket assist is really good for running it down with Warwick, while Warwick gives Jinx some really good assists that help her neutral be even more annoying, and a DP assist that can catch a lot of people trying to punish Jinx for doing grounded rocket. This team is simple but effective. Warwick leap or dash up 5M in neutral with Jinx rockets backing you up, so you can\'t get punished, and 5s1 that does your taxes, you kinda can\'t go wrong with this team. Overall, they work really well together and can be pushed to further heights.',
            videos: [
              { id: 'Z7M_sRz1k8E' }
            ]
          },
          {
            pairing: 'Yasuo',
            fuseType: 'Freestyle',
            explanation: 'Windbomb, as some like to call it. Probably Jinx\'s best team, or at least her most pushed team. Yasuo gives Jinx much-needed mix and offensive control that she lacks solo. Windwall lets her not worry about any other projectiles, and every 6 seconds, she can control the whole screen for a small amount of time while pushing off anyone trying to zone the zoner. Yasuo also loves the rocket assist, letting him not worry about running in for a while. This team is surprisingly keep-away based. Yasuo doesn\'t need to rush in like Ekko or Ahri do to make his gameplan work well because windwall is so strong. Overall good team and they work well together, giving some really nice on-block offence with Yasuo\'s sideswaps.',
            videos: [
              { id: 'wLDT-O4A9-g' }
            ]
          },
        ],
      },
    // {
    //   id: 'matchups',
    //   title: 'Matchups',
    //   matchups: {
    //     'Ahri': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'Ahri is a nightmare for Jinx. Her mobility and burst combo can delete you instantly, and you have no escape tools to avoid her Spirit Rush assassination.',
    //         'Your only defense is positioning and trap placement. Place Flame Chompers between you and her expected dash paths. Stay behind your frontline and hope they can peel her off. If she lands Charm, you\'re dead. Use your range advantage to poke before fights start.'
    //       ],
    //       keyPoints: [
    //         'She can assassinate you easily',
    //         'You have no escape from her dives',
    //         'Place traps defensively between you and her',
    //         'Rely on team peel to survive'
    //       ],
    //       videos: []
    //     },
    //     'Braum': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'Braum is difficult whether he\'s protecting his team or diving yours. His shield blocks your Zap and reduces your poke damage significantly.',
    //         'Try to poke around his shield angle. His Stand Behind Me lets him reach you quickly, and his passive stun chain can lock you down. Place traps to slow his engage. Focus other targets when his shield is up. Your team needs to peel him off you.'
    //       ],
    //       keyPoints: [
    //         'His shield negates your poke',
    //         'He can reach you quickly with W',
    //         'His passive stun locks you down',
    //         'Poke around his shield angle'
    //       ],
    //       videos: []
    //     },
    //     'Darius': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'If Darius reaches you, you\'re dead. That\'s the simple truth of this matchup. Your entire job is maintaining maximum distance and kiting with Fishbones.',
    //         'Place traps between you and him to slow his approach. Use your W to slow him from distance. If he uses Ghost or Flash, retreat immediately. Your team needs to peel him off. Never let him stack passive on you. Position very carefully in team fights.'
    //       ],
    //       keyPoints: [
    //         'If he reaches you, you die',
    //         'Maintain maximum distance always',
    //         'Place traps to slow his advance',
    //         'Your team must peel him off'
    //       ],
    //       videos: []
    //     },
    //     'Ekko': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'Ekko is another mobile assassin who can delete you. His Phase Dive and ultimate make him very difficult to pin down, and once he\'s on you, you\'re in serious trouble.',
    //         'Place traps where you predict he\'ll dash to. Use your W to slow him from distance. Stay behind your frontline at all times. If he commits his ultimate, that\'s your window to damage him. You need team peel to survive his assassination attempts.'
    //       ],
    //       keyPoints: [
    //         'Mobile assassin that can delete you',
    //         'Place traps on predicted dash paths',
    //         'Stay behind frontline always',
    //         'Need team peel to survive'
    //       ],
    //       videos: []
    //     },
    //     'Illaoi': {
    //       difficulty: 'Easy',
    //       difficultyClass: 'easy',
    //       overview: [
    //         'Jinx does very well against Illaoi. You can outrange all her abilities with Fishbones and poke her down safely while staying away from her tentacles.',
    //         'Just dodge her Test of Spirit (E) and you\'re golden. Never fight near her tentacles or in her ultimate. Use Fishbones to poke from maximum range. If she uses Flash + E to reach you, use your traps and kite back. This matchup heavily favors you.'
    //       ],
    //       keyPoints: [
    //         'You outrange all her abilities',
    //         'Dodge her E and you\'re safe',
    //         'Never fight near tentacles',
    //         'Poke from max range with Fishbones'
    //       ],
    //       videos: []
    //     },
    //     'Vi': {
    //       difficulty: 'Hard',
    //       difficultyClass: 'hard',
    //       overview: [
    //         'Vi\'s point-and-click ultimate is a death sentence for Jinx. Once she presses R on you, there\'s no escape and you\'re taking the full combo.',
    //         'Your only counterplay is positioning to avoid being in her R range. Place traps between you and her to slow her approach. Stay behind your team. If she commits ultimate on you, pray your team can peel and kill her before she kills you. Build defensively if needed.'
    //       ],
    //       keyPoints: [
    //         'Her R is unavoidable point-and-click CC',
    //         'Position to stay out of her R range',
    //         'Place traps to slow her approach',
    //         'Hope for team peel when she dives'
    //       ],
    //       videos: []
    //     },
    //     'Yasuo': {
    //       difficulty: 'Medium',
    //       difficultyClass: 'medium',
    //       overview: [
    //         'Yasuo is challenging due to his Wind Wall blocking your Zap and Super Mega Death Rocket, plus his mobility makes him hard to pin down.',
    //         'Don\'t use your R when his Wind Wall is up. Bait the wall first with Zap or wait for it to expire. Place traps to limit his dash paths. Use Pow-Pow when he\'s forced into melee range. Switch to Fishbones to poke when he\'s dashing through minions.'
    //       ],
    //       keyPoints: [
    //         'Wind Wall blocks your W and R',
    //         'Bait wall before using important abilities',
    //         'Place traps to limit his dashes',
    //         'His mobility makes him hard to hit'
    //       ],
    //       videos: []
    //     }
    //   }
    // }
      ]
    ,
};
