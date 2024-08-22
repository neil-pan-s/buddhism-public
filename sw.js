if (!self.define) {
  let e,
    a = {}
  const s = (s, c) => (
    (s = new URL(s + '.js', c).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = s), (e.onload = a), document.head.appendChild(e)
        } else (e = s), importScripts(s), a()
      }).then(() => {
        let e = a[s]
        if (!e) throw new Error(`Module ${s} didn’t register its module`)
        return e
      })
  )
  self.define = (c, f) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (a[i]) return
    let r = {}
    const t = (e) => s(e, i),
      d = { module: { uri: i }, exports: r, require: t }
    a[i] = Promise.all(c.map((e) => d[e] || t(e))).then((e) => (f(...e), r))
  }
}
define(['./workbox-7cfec069'], function (e) {
  'use strict'
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/About-CQM700zc.js', revision: null },
        { url: 'assets/About-Deby6LJH.css', revision: null },
        { url: 'assets/ai-WaZgaUjF.png', revision: null },
        { url: 'assets/Book-vzPU3Wc3.js', revision: null },
        { url: 'assets/Category-B9u2BfuV.js', revision: null },
        { url: 'assets/Home-CtJOs978.css', revision: null },
        { url: 'assets/Home-DNUlOu4f.js', revision: null },
        { url: 'assets/index-Ctw_9MhH.js', revision: null },
        { url: 'assets/index-M5x0kktZ.css', revision: null },
        { url: 'assets/logo-BxXFPa_3.png', revision: null },
        { url: 'assets/Mantra-BAKurF96.js', revision: null },
        { url: 'assets/shot-ai-DyQKRRNp.png', revision: null },
        { url: 'assets/T-META-BinRtZV-.js', revision: null },
        { url: 'assets/T-META-SC-OWBecvr9.js', revision: null },
        { url: 'assets/temple-CUGiJfxu.jpg', revision: null },
        { url: 'icons/apple-touch-icon-180x180.png', revision: '7b4c5f774f9b8f647db7e9a42e2b6eec' },
        { url: 'icons/favicon.svg', revision: 'aed898aa97935c950c15b0201fcddce3' },
        { url: 'icons/logo.png', revision: '7be9de51585cbbfe2f90e80e291bf82d' },
        { url: 'icons/maskable-icon-512x512.png', revision: '54b310a01b658fa41be02315c29d45e0' },
        { url: 'icons/pwa-192x192.png', revision: '84d057d02988a04f91e126f6400acbab' },
        { url: 'icons/pwa-512x512.png', revision: 'cdba539190e861187ac4ec27f75bd12e' },
        { url: 'icons/pwa-64x64.png', revision: 'cf2e720bf618ca724cadb140bf0b186f' },
        { url: 'chat/favicon.svg', revision: 'aed898aa97935c950c15b0201fcddce3' },
        { url: 'chat/index.html', revision: 'aff1bd2c657824c6fb501a82833c46fa' },
        { url: 'chat/pwa-192x192.png', revision: '84d057d02988a04f91e126f6400acbab' },
        { url: 'chat/pwa-512x512.png', revision: 'cdba539190e861187ac4ec27f75bd12e' },
        { url: 'chat/assets/arc-2be5e96e.js', revision: '64c6d5e5939eb1b04ab250169cf1b0ff' },
        { url: 'chat/assets/array-9f3ba611.js', revision: '17dcebeaf673b09a1ca5da014d20022f' },
        { url: 'chat/assets/avatar-7ea0aa29.svg', revision: 'ff41fa7fb8692505a124e718c5b4db82' },
        { url: 'chat/assets/avatar-ceeb03f6.jpg', revision: '99bd9c2018d6d07a10d1220c8350585d' },
        {
          url: 'chat/assets/blockDiagram-9f4a6865-24594bd5.js',
          revision: 'ee145fd26e2787bf80b187cacc22be5b'
        },
        {
          url: 'chat/assets/c4Diagram-ae766693-1a9d2ce8.js',
          revision: '4bb5734d8564135d8dcc918e13fcf6c4'
        },
        { url: 'chat/assets/channel-8460e896.js', revision: 'c43473c799d854f4c507a32e7a53cd3a' },
        {
          url: 'chat/assets/classDiagram-fb54d2a0-4f379408.js',
          revision: '7a3145b317b6f7e0bf25465d93c4296f'
        },
        {
          url: 'chat/assets/classDiagram-v2-a2b738ad-7131dcf6.js',
          revision: '56c6c042cd505398253b9a5c2db0eaf6'
        },
        { url: 'chat/assets/clone-a989727c.js', revision: '52abcf670e6f053ea4c1fae811b80b29' },
        {
          url: 'chat/assets/createText-ca0c5216-39aab4fa.js',
          revision: 'b97f8e2c1e20b938cca3dcd7905ccd14'
        },
        {
          url: 'chat/assets/edges-066a5561-c4efe472.js',
          revision: 'e139fdd51e286db6fa04f609ae2ce22e'
        },
        {
          url: 'chat/assets/erDiagram-09d1c15f-39941458.js',
          revision: '2de2203748ec5c6fc0de106e9efef51f'
        },
        {
          url: 'chat/assets/flowchart-elk-definition-ae0efee6-1fb9072a.js',
          revision: 'f158d5bf5a131c10537775a1fed08a02'
        },
        {
          url: 'chat/assets/flowDb-c1833063-7be8af8c.js',
          revision: 'd4642a5f535b7c91c92224943800a829'
        },
        {
          url: 'chat/assets/flowDiagram-b222e15a-de50321c.js',
          revision: 'ccf4736e59b16430d54895e2bb68d33b'
        },
        {
          url: 'chat/assets/flowDiagram-v2-13329dc7-01978973.js',
          revision: 'b90c19b2a2948067ebeaf120edc39dbd'
        },
        {
          url: 'chat/assets/ganttDiagram-b62c793e-a69d2940.js',
          revision: '772e37aad98c1a7d4f699de966e3c283'
        },
        {
          url: 'chat/assets/gitGraphDiagram-942e62fe-3f9477dc.js',
          revision: '230ce8c54852642243c8ec44eae35b00'
        },
        { url: 'chat/assets/graph-3d6650ec.js', revision: 'b48f9041d17ebb7cb5431dbe352b508f' },
        {
          url: 'chat/assets/index-01f381cb-ba8f54f2.js',
          revision: 'b3c31da9e3eed522b57f2b61645f90c2'
        },
        { url: 'chat/assets/index-4183ad86.js', revision: '6c2073bcc1eb6830eca2aeb551088330' },
        { url: 'chat/assets/index-79f5a92d.js', revision: '9001a2cfd147dbe464cbda14a109013d' },
        { url: 'chat/assets/index-7b397c0e.js', revision: '6a3b601d293aa7fdd2b1609f5f604844' },
        { url: 'chat/assets/index-a7275964.css', revision: 'f7a62379a18fede75512e0c506e47ef1' },
        { url: 'chat/assets/index-b8bcac86.css', revision: '3a25857bfb1fa77e123f18c08fca233b' },
        { url: 'chat/assets/index-c1668142.js', revision: '225370ac416e9bfa73b364a24a9afcf6' },
        { url: 'chat/assets/index-f1c9143e.js', revision: 'df9c0a8baffc45dd596b4095e3b6b898' },
        {
          url: 'chat/assets/infoDiagram-94cd232f-d073651e.js',
          revision: 'f8f2312ff4dd3b4041273e2756408b23'
        },
        { url: 'chat/assets/init-77b53fdd.js', revision: '3ce28180466443e9b617d7b96e9f7b8f' },
        {
          url: 'chat/assets/journeyDiagram-6625b456-7b685000.js',
          revision: '52471b90b4f262dfc72816580c77b316'
        },
        {
          url: 'chat/assets/KaTeX_AMS-Regular-30da91e8.woff',
          revision: '10824af77e9961cfd548c8a458f10851'
        },
        {
          url: 'chat/assets/KaTeX_AMS-Regular-68534840.ttf',
          revision: '56573229753fad48910bda2ea1a6dd54'
        },
        {
          url: 'chat/assets/KaTeX_Caligraphic-Bold-07d8e303.ttf',
          revision: '497bf407c4c609c6cf1f1ad38f437f7f'
        },
        {
          url: 'chat/assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff',
          revision: 'de2ba279933d60f7819ff61f71c17bed'
        },
        {
          url: 'chat/assets/KaTeX_Caligraphic-Regular-3398dd02.woff',
          revision: 'a25140fbe6692bffe71a2ab861572eb3'
        },
        {
          url: 'chat/assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf',
          revision: 'e6fb499fc8f9925eea3138cccba17fff'
        },
        {
          url: 'chat/assets/KaTeX_Fraktur-Bold-9163df9c.ttf',
          revision: 'b9d7c4497cab3702487214651ab03744'
        },
        {
          url: 'chat/assets/KaTeX_Fraktur-Bold-9be7ceb8.woff',
          revision: '40934fc076960bb989d590db044fef62'
        },
        {
          url: 'chat/assets/KaTeX_Fraktur-Regular-1e6f9579.ttf',
          revision: '97a699d83318e9334a0deaea6ae5eda2'
        },
        {
          url: 'chat/assets/KaTeX_Fraktur-Regular-5e28753b.woff',
          revision: 'e435cda5784e21b26ab2d03fbcb56a99'
        },
        {
          url: 'chat/assets/KaTeX_Main-Bold-138ac28d.ttf',
          revision: '8e431f7ece346b6282dae3d9d0e7a970'
        },
        {
          url: 'chat/assets/KaTeX_Main-Bold-c76c5d69.woff',
          revision: '4cdba6465ab9fac5d3833c6cdba7a8c3'
        },
        {
          url: 'chat/assets/KaTeX_Main-BoldItalic-70ee1f64.ttf',
          revision: '52fb39b0434c463d5df32419608ab08a'
        },
        {
          url: 'chat/assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff',
          revision: '5f875f986a9bce1264e8c42417b56f74'
        },
        {
          url: 'chat/assets/KaTeX_Main-Italic-0d85ae7c.ttf',
          revision: '39349e0a2b366f38e2672b45aded2030'
        },
        {
          url: 'chat/assets/KaTeX_Main-Italic-f1d6ef86.woff',
          revision: '8ffd28f6390231548ead99d7835887fa'
        },
        {
          url: 'chat/assets/KaTeX_Main-Regular-c6368d87.woff',
          revision: 'f1cdb692ee31c10b37262caffced5271'
        },
        {
          url: 'chat/assets/KaTeX_Main-Regular-d0332f52.ttf',
          revision: '818582dae57e6fac46202cfd844afabb'
        },
        {
          url: 'chat/assets/KaTeX_Math-BoldItalic-850c0af5.woff',
          revision: '48155e43d9a284b54753e50e4ba586dc'
        },
        {
          url: 'chat/assets/KaTeX_Math-BoldItalic-f9377ab0.ttf',
          revision: '6589c4f1f587f73f0ad0af8ae35ccb53'
        },
        {
          url: 'chat/assets/KaTeX_Math-Italic-08ce98e5.ttf',
          revision: 'fe5ed5875d95b18c98546cb4f47304ff'
        },
        {
          url: 'chat/assets/KaTeX_Math-Italic-8a8d2445.woff',
          revision: 'ed7aea12d765f9e2d0f9bc7fa2be626c'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Bold-1ece03f7.ttf',
          revision: 'f2ac73121357210d91e5c3eaa42f72ea'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Bold-ece03cfd.woff',
          revision: '0e897d27f063facef504667290e408bd'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Italic-3931dd81.ttf',
          revision: 'f60b4a34842bb524b562df092917a542'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Italic-91ee6750.woff',
          revision: 'ef725de572b71381dccf53918e300744'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Regular-11e4dc8a.woff',
          revision: '5f8637ee731482c44a37789723f5e499'
        },
        {
          url: 'chat/assets/KaTeX_SansSerif-Regular-f36ea897.ttf',
          revision: '3243452ee6817acd761c9757aef93c29'
        },
        {
          url: 'chat/assets/KaTeX_Script-Regular-1c67f068.ttf',
          revision: 'a189c37d73ffce63464635dc12cbbc96'
        },
        {
          url: 'chat/assets/KaTeX_Script-Regular-d96cdf2b.woff',
          revision: 'a82fa2a7e18b8c7a1a9f6069844ebfb9'
        },
        {
          url: 'chat/assets/KaTeX_Size1-Regular-95b6d2f1.ttf',
          revision: '0d8d9204004bdf126342605f7bbdffe6'
        },
        {
          url: 'chat/assets/KaTeX_Size1-Regular-c943cc98.woff',
          revision: '4788ba5b6247e336f734b742fe9900d5'
        },
        {
          url: 'chat/assets/KaTeX_Size2-Regular-2014c523.woff',
          revision: 'b0628bfd27c979a09f702a2277979888'
        },
        {
          url: 'chat/assets/KaTeX_Size2-Regular-a6b2099f.ttf',
          revision: '1fdda0e59ed35495ebac28badf210574'
        },
        {
          url: 'chat/assets/KaTeX_Size3-Regular-500e04d5.ttf',
          revision: '963af864cbb10611ba33267ba7953777'
        },
        {
          url: 'chat/assets/KaTeX_Size3-Regular-6ab6b62e.woff',
          revision: '4de844d4552e941f6b9c38837a8d487b'
        },
        {
          url: 'chat/assets/KaTeX_Size4-Regular-99f9c675.woff',
          revision: '3045a61f722bc4b198450ce69b3e3824'
        },
        {
          url: 'chat/assets/KaTeX_Size4-Regular-c647367d.ttf',
          revision: '27a23ee69999affa55491c7dab8e53bf'
        },
        {
          url: 'chat/assets/KaTeX_Typewriter-Regular-e14fed02.woff',
          revision: '0e0460587676d22eae09accd6dcfebc6'
        },
        {
          url: 'chat/assets/KaTeX_Typewriter-Regular-f01f3e87.ttf',
          revision: '6bf4287568e1d3004b54d5d60f9f08f9'
        },
        { url: 'chat/assets/layout-9a43bcfc.js', revision: '55f61ceedb66435b72f2d7e2a3ff93aa' },
        { url: 'chat/assets/line-e034cbce.js', revision: '1daee4f368bb2e2933c449436c67d5cd' },
        { url: 'chat/assets/linear-1c2955ff.js', revision: '7d10bdfd90676e3165ee9baa81655443' },
        { url: 'chat/assets/logo-ai-9a9bdbac.js', revision: 'a557f3e350ed4692da2f45ccda35fe36' },
        { url: 'chat/assets/logo-ai-ea0fe418.png', revision: '7be9de51585cbbfe2f90e80e291bf82d' },
        { url: 'chat/assets/logo-b3e23a27.svg', revision: 'aed898aa97935c950c15b0201fcddce3' },
        {
          url: 'chat/assets/logo-sutra-2c0c1696.png',
          revision: 'bf9d0a7b7744bf0fff6742c63450cf22'
        },
        {
          url: 'chat/assets/mindmap-definition-307c710a-e375d51c.js',
          revision: '68219f796b392242c19918bb7d227333'
        },
        { url: 'chat/assets/ordinal-ba9b4969.js', revision: '3a57ceba2c0d70da5e704aad84f79b46' },
        { url: 'chat/assets/path-53f90ab3.js', revision: 'f86c0243cb45746453c6b4f7dbd9f34d' },
        {
          url: 'chat/assets/pieDiagram-bb1d19e5-0ba0cbbb.js',
          revision: 'd0ca0d15c99da06a1b7440bf2d02df9c'
        },
        {
          url: 'chat/assets/quadrantDiagram-c759a472-4f25082f.js',
          revision: '3d6bcf4f1e0fa8e6b7abff810c8cfeba'
        },
        {
          url: 'chat/assets/requirementDiagram-87253d64-ddcb482e.js',
          revision: '0dce0ac31e94f35e1cb180671b3902ef'
        },
        {
          url: 'chat/assets/sankeyDiagram-707fac0f-5cfce918.js',
          revision: '8de599aa277b09dde7f8c8b9a66bff56'
        },
        {
          url: 'chat/assets/sequenceDiagram-6894f283-2356ce28.js',
          revision: 'bca4f433d3aa1ce0499c642eec86df30'
        },
        {
          url: 'chat/assets/stateDiagram-5dee940d-2e343318.js',
          revision: '2eb4dce5d2449d8f52140ac31ac9a747'
        },
        {
          url: 'chat/assets/stateDiagram-v2-1992cada-8b62e0bb.js',
          revision: '6aa154a2b2b913dd38771db4f989c28a'
        },
        {
          url: 'chat/assets/styles-0784dbeb-ccc5c138.js',
          revision: 'b802e8d7df813eeddb9e08ba932c2e09'
        },
        {
          url: 'chat/assets/styles-483fbfea-a420fcb8.js',
          revision: 'ebe5b3d06fa7fcdad6c7c381e158996d'
        },
        {
          url: 'chat/assets/styles-b83b31c9-568f6e15.js',
          revision: 'b9c3b49856ed75a80975e8fdbab1c2fc'
        },
        {
          url: 'chat/assets/svgDrawCommon-5e1cfd1d-fb8bc64e.js',
          revision: '0ea58c6f87e201928ba358506769e95f'
        },
        { url: 'chat/assets/Tableau10-1b767f5e.js', revision: 'f2197f44250cada74e1e663d3abfba3e' },
        {
          url: 'chat/assets/timeline-definition-bf702344-3039f7ac.js',
          revision: '4c7461f0a38ed285ff099ef12f48d20b'
        },
        {
          url: 'chat/assets/xychartDiagram-f11f50a6-41661faf.js',
          revision: '5d2411677447aa9e9f182be0dbafc2ef'
        },
        { url: 'adobe-webfont.js', revision: '7c043b1ce65979545de8579aa667e2ea' },
        { url: 'index.html', revision: '1669bc9a509af597e1c5e32483714142' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'manifest.webmanifest', revision: '3f1c74af5b42688bc8d4d500c209564c' }
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('index.html'), {
        allowlist: [/^\/assets/, /^\/chat/, /^\/icons/]
      })
    )
})
