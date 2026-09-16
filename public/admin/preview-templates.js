// Custom Decap CMS preview for the "characters" file collection.
// Uses the `createClass` / `h` (hyperscript) globals that decap-cms.js
// exposes specifically so custom previews can be written without a
// JSX/build step - see https://decapcms.org/docs/customization/#registerpreviewtemplate

var styles = {
  section: { marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #dfdfdf' },
  heading: { fontSize: '1.1em', fontWeight: 'bold', marginBottom: '8px' },
  table: { borderCollapse: 'collapse', width: '100%', marginBottom: '12px' },
  th: { textAlign: 'left', padding: '4px 8px', borderBottom: '1px solid #ccc', background: '#f5f5f5' },
  td: { padding: '4px 8px', borderBottom: '1px solid #eee', verticalAlign: 'top' },
  card: { border: '1px solid #ddd', borderRadius: '6px', padding: '12px', marginBottom: '12px' },
  badge: { display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em', marginLeft: '8px', color: '#fff' },
  badgeComplete: { background: '#2e7d32' },
  badgeIncomplete: { background: '#b26a00' },
};

var statLabels = {
  range: 'Range',
  power: 'Power',
  vitality: 'Vitality',
  mobility: 'Mobility',
  ease: 'Ease of Use',
};

function Field(label, value) {
  if (value === undefined || value === null || value === '') return null;
  return h('div', { style: { marginBottom: '4px' } }, h('strong', {}, label + ': '), String(value));
}

function ListParagraphs(list) {
  if (!list || !list.length) return null;
  return h(
    'div',
    { style: { marginBottom: '8px', color: '#555' } },
    list.map(function (p, i) {
      return h('p', { key: i }, p);
    })
  );
}

function YouTubeList(videos) {
  if (!videos || !videos.length) return null;
  return h(
    'ul',
    {},
    videos.map(function (v, i) {
      return h(
        'li',
        { key: i },
        h('a', { href: 'https://youtube.com/watch?v=' + v.id, target: '_blank', rel: 'noreferrer' }, v.id)
      );
    })
  );
}

// Media paths in the character JSON are resolved by the live site at a
// root-level URL (e.g. /blitzcrank), so a relative path like
// "videos/blitz/key-moves/blitz1.mp4" resolves to "/videos/...". The CMS
// itself is served from /admin/, so the browser's default relative-URL
// resolution would instead produce "/admin/videos/..." and 404. Force
// root-relative resolution here to match what the live site actually does.
function resolveAssetUrl(rawUrl) {
  if (!rawUrl) return rawUrl;
  var url = String(rawUrl);
  if (/^(https?:|blob:|data:)/i.test(url)) return url;
  return url.charAt(0) === '/' ? url : '/' + url;
}

function MediaPreview(getAsset, path, type) {
  if (!path) return null;
  var resolved = resolveAssetUrl(getAsset(path));
  if (type === 'video') {
    if (/^https?:\/\//i.test(resolved) && !/\.(mp4|webm|mov)(\?.*)?$/i.test(resolved)) {
      // Not a direct video file (e.g. a YouTube link typed into the field) -
      // a <video> tag can't play it, so link out instead.
      return h('a', { href: resolved, target: '_blank', rel: 'noreferrer' }, 'View video ↗');
    }
    return h('video', {
      src: resolved,
      controls: true,
      style: { maxWidth: '220px', display: 'block', marginTop: '4px' },
    });
  }
  return h('img', { src: resolved, style: { maxWidth: '140px', display: 'block', marginTop: '4px' } });
}

function movesTable(moves, getAsset) {
  if (!moves || !moves.length) return null;
  return h(
    'table',
    { style: styles.table },
    h(
      'thead',
      {},
      h(
        'tr',
        {},
        h('th', { style: styles.th }, 'Notation'),
        h('th', { style: styles.th }, 'Description'),
        h('th', { style: styles.th }, 'Media')
      )
    ),
    h(
      'tbody',
      {},
      moves.map(function (m, i) {
        return h(
          'tr',
          { key: i },
          h('td', { style: styles.td }, (m.notation ? m.notation + ' - ' : '') + m.numericNotation),
          h('td', { style: styles.td }, m.description),
          h(
            'td',
            { style: styles.td },
            MediaPreview(getAsset, m.notationImage, 'image'),
            MediaPreview(getAsset, m.video, 'video')
          )
        );
      })
    )
  );
}

function combosTable(combos, getAsset) {
  if (!combos || !combos.length) return null;
  return h(
    'table',
    { style: styles.table },
    h(
      'thead',
      {},
      h(
        'tr',
        {},
        h('th', { style: styles.th }, 'Purpose'),
        h('th', { style: styles.th }, 'Notation'),
        h('th', { style: styles.th }, 'Media')
      )
    ),
    h(
      'tbody',
      {},
      combos.map(function (c, i) {
        return h(
          'tr',
          { key: i },
          h('td', { style: styles.td }, c.purpose),
          h('td', { style: styles.td }, c.numericNotation),
          h(
            'td',
            { style: styles.td },
            MediaPreview(getAsset, c.notationImage, 'image'),
            MediaPreview(getAsset, c.video, 'video')
          )
        );
      })
    )
  );
}

function teamsTable(teams) {
  if (!teams || !teams.length) return null;
  return h(
    'div',
    {},
    teams.map(function (t, i) {
      return h(
        'div',
        { key: i, style: { marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' } },
        h('div', {}, h('strong', {}, t.pairing), ' - ', t.fuseType),
        h('p', { style: { color: '#555' } }, t.explanation),
        YouTubeList(t.videos)
      );
    })
  );
}

function playersTable(players) {
  if (!players || !players.length) return null;
  return h(
    'div',
    {},
    players.map(function (p, i) {
      var socials = p.socials || {};
      var socialBits = ['twitch', 'youtube', 'twitter']
        .filter(function (k) {
          return socials[k];
        })
        .map(function (k) {
          return k + ': ' + socials[k];
        })
        .join(' | ');
      return h(
        'div',
        { key: i, style: { marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' } },
        h('div', {}, h('strong', {}, p.name)),
        p.description ? h('p', { style: { color: '#555' } }, p.description) : null,
        socialBits ? h('div', { style: { fontSize: '0.85em', color: '#777' } }, socialBits) : null,
        YouTubeList(p.highlights)
      );
    })
  );
}

function renderTab(tab, getAsset) {
  var header = h('h3', {}, (tab.title || tab.id) + ' (' + tab.id + ')');
  switch (tab.id) {
    case 'key_moves':
      return h('div', {}, header, ListParagraphs(tab.description), movesTable(tab.moves, getAsset));
    case 'important_solo_combos':
      return h(
        'div',
        {},
        header,
        ListParagraphs(tab.description),
        tab.combos && tab.combos.length ? h('h4', {}, 'Combos') : null,
        combosTable(tab.combos, getAsset),
        ListParagraphs(tab.description2),
        tab.comboEnders && tab.comboEnders.length ? h('h4', {}, 'Combo Enders') : null,
        combosTable(tab.comboEnders, getAsset),
        ListParagraphs(tab.description3)
      );
    case 'team_synergies':
      return h('div', {}, header, teamsTable(tab.teams));
    case 'top_players':
      return h('div', {}, header, playersTable(tab.players));
    case 'guides':
      return h('div', {}, header, YouTubeList(tab.videos));
    default:
      return h('div', {}, header, h('pre', {}, JSON.stringify(tab, null, 2)));
  }
}

var CharacterPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var getAsset = this.props.getAsset;
    var data = entry.get('data') ? entry.get('data').toJS() : {};

    var stats = data.stats || {};
    var heroImageOffset = data.heroImageOffset || {};
    var guideAuthor = data.guideAuthor;
    var tabs = data.tabs || [];

    return h(
      'div',
      { style: { padding: '16px', fontFamily: 'sans-serif' } },

      h(
        'div',
        { style: styles.section },
        h('h1', {}, data.name),
        h(
          'span',
          { style: Object.assign({}, styles.badge, data.isComplete ? styles.badgeComplete : styles.badgeIncomplete) },
          data.isComplete ? 'Guide Complete' : 'Work In Progress'
        ),
        h('div', { style: { marginTop: '8px' } }, h('strong', {}, 'Archetype: '), data.archetype)
      ),

      h(
        'div',
        { style: styles.section },
        h('h2', { style: styles.heading }, 'Stats'),
        h(
          'table',
          { style: styles.table },
          h(
            'tbody',
            {},
            ['range', 'power', 'vitality', 'mobility', 'ease'].map(function (key) {
              return h(
                'tr',
                { key: key },
                h('td', { style: styles.td }, statLabels[key]),
                h('td', { style: styles.td }, String(stats[key]))
              );
            })
          )
        ),
        h(
          'div',
          {},
          h('strong', {}, 'Hero image offset: '),
          'desktop ' + heroImageOffset.desktop + 'px, mobile ' + heroImageOffset.mobile + 'px'
        )
      ),

      guideAuthor
        ? h(
            'div',
            { style: styles.section },
            h('h2', { style: styles.heading }, 'Guide Author'),
            Field('Name', guideAuthor.name),
            Field('YouTube', guideAuthor.youtube),
            Field('Twitter/X', guideAuthor.twitter),
            Field('Twitch', guideAuthor.twitch)
          )
        : null,

      h(
        'div',
        {},
        h('h2', { style: styles.heading }, 'Guide Sections'),
        tabs.map(function (tab, i) {
          return h('div', { key: i, style: styles.card }, renderTab(tab, getAsset));
        })
      )
    );
  },
});

// "characters" is a `files:` collection (not a `folder:` collection), so
// registerPreviewTemplate must target each individual file's `name`, not
// the collection's name - registering against 'characters' silently
// matches nothing.
[
  'ahri',
  'akali',
  'blitzcrank',
  'braum',
  'caitlyn',
  'darius',
  'ekko',
  'illaoi',
  'jinx',
  'senna',
  'teemo',
  'thresh',
  'vi',
  'warwick',
  'yasuo',
].forEach(function (fileName) {
  CMS.registerPreviewTemplate(fileName, CharacterPreview);
});
