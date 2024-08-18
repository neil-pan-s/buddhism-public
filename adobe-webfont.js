/*

Adobe Web Font (思源宋体-Bold)
https://fonts.adobe.com/fonts/source-han-serif-traditional-chinese?ref=tk.com#fonts-section

css 引用:
  font-family: source-han-serif-tc, serif;
  font-style: normal;
  font-weight: 200;

PS: 访问网络较慢 载入时间过长 单个文件过大 Google Fonts为最优解
*/
;(function (d) {
  var config = {
      kitId: 'qzk5ccy',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0],
    a
  h.className += ' wf-loading'
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
  tk.async = true
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState
    if (f || (a && a != 'complete' && a != 'loaded')) return
    f = true
    clearTimeout(t)
    try {
      Typekit.load(config)
    } catch (e) {}
  }
  s.parentNode.insertBefore(tk, s)
})(document)
