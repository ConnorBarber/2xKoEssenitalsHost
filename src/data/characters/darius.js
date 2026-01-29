export const darius =  {
    name: 'Darius',
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
          ''
        ],
        moves: [
          { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/darius/darius-passive.png', description: 'UNDER CONSTRUCTION', video: '/videos/darius-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/darius/darius-q.png', description: 'UNDER CONSTRUCTION', video: '/videos/darius-q.mp4' },
          { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/darius/darius-w.png', description: 'UNDER CONSTRUCTION', video: '/videos/darius-w.mp4' },
          { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/darius/darius-e.png', description: 'UNDER CONSTRUCTION', video: '/videos/darius-e.mp4' },
          { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/darius/darius-r.png', description: 'UNDER CONSTRUCTION', video: '/videos/darius-r.mp4' }
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        content: 'UNDER CONSTRUCTION'
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        content: 'UNDER CONSTRUCTION' 
      },
      // {
      //   id: 'matchups',
      //   title: 'Matchups',
      //   matchups: {
      //     'Ahri': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Ahri is a difficult matchup for Darius due to her superior range and mobility. She can kite you effectively and has the tools to escape your all-in attempts.',
      //         'Your only chance is catching her with your pull when her Spirit Rush is down. Ghost or Flash is almost mandatory in this matchup. Try to bait out her dashes before committing your pull. If she wastes mobility, that\'s your window to engage.'
      //       ],
      //       keyPoints: [
      //         'She can kite you easily with range and mobility',
      //         'Need Ghost/Flash to have any chance',
      //         'Only engage when her R is down',
      //         'She can interrupt your Q with Charm'
      //       ],
      //       videos: []
      //     },
      //     'Braum': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //       overview: [
      //         'Braum is tankier than you\'d like, but not impossible. His shield doesn\'t help against your melee attacks, so once you\'re in range, you can stack your passive effectively.',
      //         'The challenge is his crowd control can interrupt your Decimate, and his team protection makes it hard to reach his backline. Focus on stacking your passive on him first, then look for his teammates. Don\'t let him stun you with his passive.'
      //       ],
      //       keyPoints: [
      //         'His shield doesn\'t block melee attacks',
      //         'His CC can interrupt your Q',
      //         'Stack passive on him, then reach backline',
      //         'Avoid getting stunned by his passive'
      //       ],
      //       videos: []
      //     },
      //     'Ekko': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Ekko has all the tools to make your life miserable. His mobility, range, and ultimate make it nearly impossible to catch him and keep him in melee range long enough to kill.',
      //         'This matchup requires patience and Ghost/Flash. Try to bait his Phase Dive before using your pull. If he uses his ultimate, all your passive stacks disappear. Fight near walls to limit his escape angles. You need him to make a mistake to win.'
      //       ],
      //       keyPoints: [
      //         'His mobility and ultimate counter you hard',
      //         'Need him to make mistakes to win',
      //         'Fight near walls to limit escapes',
      //         'His R resets the fight completely'
      //       ],
      //       videos: []
      //     },
      //     'Illaoi': {
      //       difficulty: 'Medium',
      //       difficultyClass: 'medium',
      //       overview: [
      //         'This is a juggernaut vs juggernaut matchup that depends on who gets their setup first. Both champions excel at extended fights in specific zones.',
      //         'Dodge her Test of Spirit - if she lands it, the trade heavily favors her. Never fight in her ultimate. Instead, pull her away from her tentacles and fight in open space. Your passive stacks beat her in sustained damage if you avoid her tentacles.'
      //       ],
      //       keyPoints: [
      //         'Juggernaut vs juggernaut - positioning matters',
      //         'Dodge her E or lose the trade',
      //         'Never fight in her R',
      //         'Pull her away from tentacles'
      //       ],
      //       videos: []
      //     },
      //     'Jinx': {
      //       difficulty: 'Easy',
      //       difficultyClass: 'easy',
      //       overview: [
      //         'Jinx is an ideal target for Darius. She has no mobility and once you close the gap, she\'s done for. Your passive stacks ramp up quickly on her.',
      //         'The challenge is reaching her through her team and traps. Use Ghost/Flash to close the gap. Once you\'re on top of her, she\'s dead. Watch for her Flame Chompers when you\'re chasing. Focus her in team fights as a priority target.'
      //       ],
      //       keyPoints: [
      //         'Perfect target - no mobility',
      //         'Need Ghost/Flash to reach her',
      //         'Watch for her traps when chasing',
      //         'Once on top of her, she\'s dead'
      //       ],
      //       videos: []
      //     },
      //     'Vi': {
      //       difficulty: 'Easy',
      //       difficultyClass: 'easy',
      //       overview: [
      //         'Vi engages into you, which is exactly what you want as Darius. When she commits with her ultimate, she\'s stuck in melee range where you excel.',
      //         'Let her engage on you or your team, then counter-engage with your pull and start stacking passive. Your W empowered auto plus E pull keeps her in range. Once you get 5 stacks, you win the extended trade. Her % health damage is annoying but manageable.'
      //       ],
      //       keyPoints: [
      //         'She engages into your ideal range',
      //         'Let her engage then counter',
      //         'Your stacked passive wins extended trades',
      //         'E pull keeps her from escaping'
      //       ],
      //       videos: []
      //     },
      //     'Yasuo': {
      //       difficulty: 'Hard',
      //       difficultyClass: 'hard',
      //       overview: [
      //         'Yasuo\'s mobility with Sweeping Blade makes him very difficult for Darius. He can dash in and out, poking you while avoiding extended trades where your passive would win.',
      //         'Try to fight when there are fewer minions for him to dash through. Your pull can catch him mid-dash if timed well. His Wind Wall doesn\'t block your abilities since they\'re all melee, but his mobility is the real problem. Need Ghost/Flash and patience.'
      //       ],
      //       keyPoints: [
      //         'His dash spam makes him hard to catch',
      //         'Fight when fewer minions available',
      //         'E can catch him mid-dash',
      //         'Wind Wall doesn\'t stop your melee abilities'
      //       ],
      //       videos: []
      //     }
      //   }
      // }
    ]
  }