// Custom Decap CMS widget "youtube-id" - a plain text box for a YouTube
// video ID, with a fixed "youtube.com/watch?v=" prefix so it's visually
// obvious only the ID belongs in the box (not a full link). The `pattern`
// set on the field in config.yml blocks saving anything that isn't a bare
// ID (e.g. a pasted full URL).
// Uses the same `createClass` / `h` hyperscript globals as preview-templates.js
// - see https://decapcms.org/docs/custom-widgets/

var YouTubeIdControl = createClass({
  handleChange: function (e) {
    this.props.onChange(e.target.value);
  },
  render: function () {
    return h(
      'div',
      { style: { display: 'flex', alignItems: 'stretch', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' } },
      h(
        'span',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            background: '#f0f0f0',
            color: '#666',
            fontSize: '15px',
            whiteSpace: 'nowrap',
            borderRight: '1px solid #ccc',
          },
        },
        'youtube.com/watch?v='
      ),
      h('input', {
        id: this.props.forID,
        className: this.props.classNameWrapper,
        type: 'text',
        value: this.props.value || '',
        onChange: this.handleChange,
        placeholder: 'dQw4w9WgXcQ',
        style: { flex: 1, border: 'none', padding: '8px', fontSize: '15px', outline: 'none' },
      })
    );
  },
});

var YouTubeIdPreview = createClass({
  render: function () {
    var id = this.props.value;
    if (!id) return null;
    return h('a', { href: 'https://youtube.com/watch?v=' + id, target: '_blank', rel: 'noreferrer' }, 'youtube.com/watch?v=' + id);
  },
});

CMS.registerWidget('youtube-id', YouTubeIdControl, YouTubeIdPreview);
