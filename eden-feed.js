(function () {
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function blockPayload(block) {
    if (!block || !block.type) return {};
    var t = block.type;
    if (block[t] && typeof block[t] === 'object') return block[t];
    var o = {};
    for (var k in block) {
      if (Object.prototype.hasOwnProperty.call(block, k) && k !== 'type') o[k] = block[k];
    }
    return o;
  }

  function renderBlock(block) {
    var kind = block.type;
    var d = blockPayload(block);
    if (!kind) return '';

    if (kind === 'h5') {
      return '<h5>' + escapeHtml(d.text || '') + '</h5><br>';
    }
    if (kind === 'quote') {
      return '<quote>' + escapeHtml(d.text || '') + '</quote><br>';
    }
    if (kind === 'image') {
      var src = d.src || '';
      var cls = (d.class || '').trim();
      var alt = escapeHtml(d.alt || '');
      var classAttr = cls ? ' class="' + escapeHtml(cls) + '"' : '';
      if (!src) return '';
      return '<img src="' + escapeHtml(src) + '" alt="' + alt + '"' + classAttr + '><br>';
    }
    if (kind === 'big_link') {
      var href = d.url || '';
      var label = d.text || '';
      if (!href || !label) return '';
      return (
        '<h1 style="font-size: 3em;"><a href="' +
        escapeHtml(href) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(label) +
        '</a></h1><br>'
      );
    }
    if (kind === 'video') {
      var vsrc = d.src || '';
      if (!vsrc) return '';
      var mime = d.mime || 'video/mp4';
      var w = d.width != null ? Number(d.width) : 320;
      var h = d.height != null ? Number(d.height) : 240;
      return (
        '<video width="' +
        w +
        '" height="' +
        h +
        '" controls><source src="' +
        escapeHtml(vsrc) +
        '" type="' +
        escapeHtml(mime) +
        '"></video><br>'
      );
    }
    if (kind === 'audio') {
      var asrc = d.src || '';
      if (!asrc) return '';
      var amime = d.mime || 'audio/mpeg';
      return (
        '<audio controls><source src="' +
        escapeHtml(asrc) +
        '" type="' +
        escapeHtml(amime) +
        '"></audio><br>'
      );
    }
    return '';
  }

  function renderEdenFeed() {
    var el = document.getElementById('eden-feed');
    if (!el) return;
    var blocks = (window.edenBlocks && window.edenBlocks.blocks) || [];
    el.innerHTML = blocks.map(renderBlock).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderEdenFeed);
  } else {
    renderEdenFeed();
  }
})();
