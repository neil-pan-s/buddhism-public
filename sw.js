/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/ai-WaZgaUjF.png",
    "revision": null
  }, {
    "url": "assets/app-CWt1QT0N.js",
    "revision": null
  }, {
    "url": "assets/app-DMxkV--P.png",
    "revision": null
  }, {
    "url": "assets/B3u48P4v.js",
    "revision": null
  }, {
    "url": "assets/BD-4rJ79.js",
    "revision": null
  }, {
    "url": "assets/BinRtZV-.js",
    "revision": null
  }, {
    "url": "assets/C5seuc6F.js",
    "revision": null
  }, {
    "url": "assets/CMjYN6K4.js",
    "revision": null
  }, {
    "url": "assets/CU45yI3U.css",
    "revision": null
  }, {
    "url": "assets/D6scTVsA.js",
    "revision": null
  }, {
    "url": "assets/D7-DZF2H.js",
    "revision": null
  }, {
    "url": "assets/Deby6LJH.css",
    "revision": null
  }, {
    "url": "assets/Dk7MlfdZ.css",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/logo-BxXFPa_3.png",
    "revision": null
  }, {
    "url": "assets/OWBecvr9.js",
    "revision": null
  }, {
    "url": "assets/pDRG5IRj.js",
    "revision": null
  }, {
    "url": "assets/shot-ai-DyQKRRNp.png",
    "revision": null
  }, {
    "url": "assets/temple-CUGiJfxu.jpg",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "7b4c5f774f9b8f647db7e9a42e2b6eec"
  }, {
    "url": "icons/favicon.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "icons/logo.png",
    "revision": "7be9de51585cbbfe2f90e80e291bf82d"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "54b310a01b658fa41be02315c29d45e0"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "cf2e720bf618ca724cadb140bf0b186f"
  }, {
    "url": "chat/favicon.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "chat/index.html",
    "revision": "2ec13b08b8a62196df21132d538d2132"
  }, {
    "url": "chat/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "chat/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "chat/assets/arc-01f8500b.js",
    "revision": "af00f1a1fc878fb2bb17beed9107c315"
  }, {
    "url": "chat/assets/array-9f3ba611.js",
    "revision": "17dcebeaf673b09a1ca5da014d20022f"
  }, {
    "url": "chat/assets/avatar-7ea0aa29.svg",
    "revision": "ff41fa7fb8692505a124e718c5b4db82"
  }, {
    "url": "chat/assets/avatar-ceeb03f6.jpg",
    "revision": "99bd9c2018d6d07a10d1220c8350585d"
  }, {
    "url": "chat/assets/blockDiagram-9f4a6865-801d6510.js",
    "revision": "5d5c3b92edc178fb398d1295e437c7cf"
  }, {
    "url": "chat/assets/c4Diagram-ae766693-8528bd8e.js",
    "revision": "6168621427f45e8958cfb58fa6f33fb2"
  }, {
    "url": "chat/assets/channel-8d71450b.js",
    "revision": "009a7ffa910933dd1cc4046ecbb0190d"
  }, {
    "url": "chat/assets/classDiagram-fb54d2a0-c281dac9.js",
    "revision": "4aa0d4665693a3e627fd5dc846f1a95d"
  }, {
    "url": "chat/assets/classDiagram-v2-a2b738ad-cea11d41.js",
    "revision": "23deec18b121c0e554fce98321cdb991"
  }, {
    "url": "chat/assets/clone-3b056e8d.js",
    "revision": "2dde15f7227de99c6957ec63b007d702"
  }, {
    "url": "chat/assets/createText-ca0c5216-7247e183.js",
    "revision": "3d0b33ab1fc2c2769050cf5c1da333d3"
  }, {
    "url": "chat/assets/donate-dbedba07.jpg",
    "revision": "f391e140e2764f73464280b7458293da"
  }, {
    "url": "chat/assets/edges-066a5561-a28d6fdc.js",
    "revision": "22a8e29e40e5309f8ba57d1c6330c07e"
  }, {
    "url": "chat/assets/erDiagram-09d1c15f-62800eec.js",
    "revision": "c07b7c0103f1f20f663cf20d41d01742"
  }, {
    "url": "chat/assets/flowchart-elk-definition-ae0efee6-62bee956.js",
    "revision": "2d5b90325b1c153c62bc450700843c48"
  }, {
    "url": "chat/assets/flowDb-c1833063-2be2eb5b.js",
    "revision": "12b2eb6808c5b994a7f463da8425cd7c"
  }, {
    "url": "chat/assets/flowDiagram-b222e15a-5eb7ae9b.js",
    "revision": "26e028db962ec04623b83628bcb9fb7a"
  }, {
    "url": "chat/assets/flowDiagram-v2-13329dc7-4494afd7.js",
    "revision": "c3892dbd2e713dee6ce94a3cd750fae3"
  }, {
    "url": "chat/assets/ganttDiagram-b62c793e-a52e93bf.js",
    "revision": "081ca2e921ca2be638b9d190fa4fef04"
  }, {
    "url": "chat/assets/gitGraphDiagram-942e62fe-1bc14a9c.js",
    "revision": "ba58f5d81110b644b36a8fc4251d96ee"
  }, {
    "url": "chat/assets/graph-5cb0726f.js",
    "revision": "1ec4382860c3290364414fde82e6e0f0"
  }, {
    "url": "chat/assets/index-01f381cb-8a4893f8.js",
    "revision": "fe3c6e6039f2edaa2eda618762019836"
  }, {
    "url": "chat/assets/index-1d6cd776.js",
    "revision": "0b42ea680bcd729acd926923602061e0"
  }, {
    "url": "chat/assets/index-4b5b7462.css",
    "revision": "8943b0d0084fd65b1956b8627532992b"
  }, {
    "url": "chat/assets/index-7309afa7.js",
    "revision": "8b57f6b5039eee1865d7439f482aef01"
  }, {
    "url": "chat/assets/index-84cb69b3.js",
    "revision": "6927eaa6b1f62ca0ebb8aa453a236f85"
  }, {
    "url": "chat/assets/index-8a5a1122.js",
    "revision": "7258061b4fe2e123295ca0e82db8adfc"
  }, {
    "url": "chat/assets/index-b8bcac86.css",
    "revision": "3a25857bfb1fa77e123f18c08fca233b"
  }, {
    "url": "chat/assets/index-d27cfb12.js",
    "revision": "47504b9a7e30ee0876b5b972bc62d6ff"
  }, {
    "url": "chat/assets/infoDiagram-94cd232f-e5cfa5cf.js",
    "revision": "a29f753ca3e25f9cc3e28ccbd25dceca"
  }, {
    "url": "chat/assets/init-77b53fdd.js",
    "revision": "3ce28180466443e9b617d7b96e9f7b8f"
  }, {
    "url": "chat/assets/journeyDiagram-6625b456-5e3df50e.js",
    "revision": "d3b1f278ca58c592726ade67d4401b04"
  }, {
    "url": "chat/assets/KaTeX_AMS-Regular-30da91e8.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  }, {
    "url": "chat/assets/KaTeX_AMS-Regular-68534840.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",
    "revision": "de2ba279933d60f7819ff61f71c17bed"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Regular-3398dd02.woff",
    "revision": "a25140fbe6692bffe71a2ab861572eb3"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Bold-9163df9c.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Regular-5e28753b.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  }, {
    "url": "chat/assets/KaTeX_Main-Bold-138ac28d.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  }, {
    "url": "chat/assets/KaTeX_Main-Bold-c76c5d69.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  }, {
    "url": "chat/assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  }, {
    "url": "chat/assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  }, {
    "url": "chat/assets/KaTeX_Main-Italic-0d85ae7c.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  }, {
    "url": "chat/assets/KaTeX_Main-Italic-f1d6ef86.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  }, {
    "url": "chat/assets/KaTeX_Main-Regular-c6368d87.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  }, {
    "url": "chat/assets/KaTeX_Main-Regular-d0332f52.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  }, {
    "url": "chat/assets/KaTeX_Math-BoldItalic-850c0af5.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  }, {
    "url": "chat/assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  }, {
    "url": "chat/assets/KaTeX_Math-Italic-08ce98e5.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  }, {
    "url": "chat/assets/KaTeX_Math-Italic-8a8d2445.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Bold-ece03cfd.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Italic-3931dd81.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Italic-91ee6750.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Regular-f36ea897.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  }, {
    "url": "chat/assets/KaTeX_Script-Regular-1c67f068.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  }, {
    "url": "chat/assets/KaTeX_Script-Regular-d96cdf2b.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  }, {
    "url": "chat/assets/KaTeX_Size1-Regular-95b6d2f1.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  }, {
    "url": "chat/assets/KaTeX_Size1-Regular-c943cc98.woff",
    "revision": "4788ba5b6247e336f734b742fe9900d5"
  }, {
    "url": "chat/assets/KaTeX_Size2-Regular-2014c523.woff",
    "revision": "b0628bfd27c979a09f702a2277979888"
  }, {
    "url": "chat/assets/KaTeX_Size2-Regular-a6b2099f.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  }, {
    "url": "chat/assets/KaTeX_Size3-Regular-500e04d5.ttf",
    "revision": "963af864cbb10611ba33267ba7953777"
  }, {
    "url": "chat/assets/KaTeX_Size3-Regular-6ab6b62e.woff",
    "revision": "4de844d4552e941f6b9c38837a8d487b"
  }, {
    "url": "chat/assets/KaTeX_Size4-Regular-99f9c675.woff",
    "revision": "3045a61f722bc4b198450ce69b3e3824"
  }, {
    "url": "chat/assets/KaTeX_Size4-Regular-c647367d.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  }, {
    "url": "chat/assets/KaTeX_Typewriter-Regular-e14fed02.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  }, {
    "url": "chat/assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  }, {
    "url": "chat/assets/layout-290ed7be.js",
    "revision": "acbc087f7ee671ad341754b8698e8339"
  }, {
    "url": "chat/assets/line-e6a8dbb1.js",
    "revision": "2341703bd313f8e84f1a7eace02a1574"
  }, {
    "url": "chat/assets/linear-c3d4f219.js",
    "revision": "d5c50ccba462409ee804784d42961859"
  }, {
    "url": "chat/assets/logo-ai-9a9bdbac.js",
    "revision": "a557f3e350ed4692da2f45ccda35fe36"
  }, {
    "url": "chat/assets/logo-ai-ea0fe418.png",
    "revision": "7be9de51585cbbfe2f90e80e291bf82d"
  }, {
    "url": "chat/assets/logo-b3e23a27.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "chat/assets/logo-sutra-2c0c1696.png",
    "revision": "bf9d0a7b7744bf0fff6742c63450cf22"
  }, {
    "url": "chat/assets/mindmap-definition-307c710a-883d0e27.js",
    "revision": "02b114010dd8ac79e3d38b7faba85847"
  }, {
    "url": "chat/assets/ordinal-ba9b4969.js",
    "revision": "3a57ceba2c0d70da5e704aad84f79b46"
  }, {
    "url": "chat/assets/path-53f90ab3.js",
    "revision": "f86c0243cb45746453c6b4f7dbd9f34d"
  }, {
    "url": "chat/assets/pieDiagram-bb1d19e5-eca062b3.js",
    "revision": "683e99731bfbe7fd280c6c24e1e4c46e"
  }, {
    "url": "chat/assets/quadrantDiagram-c759a472-e2439451.js",
    "revision": "c6bb734f14b42cc0fce3c4bfadb0e3b3"
  }, {
    "url": "chat/assets/requirementDiagram-87253d64-2a216676.js",
    "revision": "2946233802483411b148df290cab2332"
  }, {
    "url": "chat/assets/sankeyDiagram-707fac0f-b25713b3.js",
    "revision": "5ed711f2f04f4c0c980725f8caf1ea31"
  }, {
    "url": "chat/assets/sequenceDiagram-6894f283-0aa1a00e.js",
    "revision": "d77070835f9d3a946ffc45a794df64e5"
  }, {
    "url": "chat/assets/stateDiagram-5dee940d-16c8566f.js",
    "revision": "22ceb6a8104b3bff3682097e3543b940"
  }, {
    "url": "chat/assets/stateDiagram-v2-1992cada-0d5c7265.js",
    "revision": "3fd869abec71abe11747e85cc046625d"
  }, {
    "url": "chat/assets/styles-0784dbeb-95490b75.js",
    "revision": "70d8c7a95e7f993778f0326145ad99e3"
  }, {
    "url": "chat/assets/styles-483fbfea-6124b10f.js",
    "revision": "f8d843cff5a706cf5d404a02adc75260"
  }, {
    "url": "chat/assets/styles-b83b31c9-bdde33cc.js",
    "revision": "ff55871498b674d6accef13b61c846d4"
  }, {
    "url": "chat/assets/svgDrawCommon-5e1cfd1d-8b0bba3e.js",
    "revision": "bca8dfeb18003c09ec8c110c4025b3a2"
  }, {
    "url": "chat/assets/Tableau10-1b767f5e.js",
    "revision": "f2197f44250cada74e1e663d3abfba3e"
  }, {
    "url": "chat/assets/timeline-definition-bf702344-08637f84.js",
    "revision": "9957dfabbb03b25e2adf812a6e9236a1"
  }, {
    "url": "chat/assets/xychartDiagram-f11f50a6-5fdb2b35.js",
    "revision": "f571ef14749fbb128c4b651d36289cd3"
  }, {
    "url": "sutra/0001-0151.html",
    "revision": "4db38c1c7b828e969191a576f7bdb013"
  }, {
    "url": "sutra/0152-0219.html",
    "revision": "08d563178278e87e46082e14555bcd11"
  }, {
    "url": "sutra/0220-0261.html",
    "revision": "45b8c73400002a6e15ab88c9052295ff"
  }, {
    "url": "sutra/0262-0277.html",
    "revision": "3b564984afcb06f5e657d155c2216def"
  }, {
    "url": "sutra/0278-0309.html",
    "revision": "c58decc1129ce5c6b3fad47c1ec4692c"
  }, {
    "url": "sutra/0310-0373.html",
    "revision": "44e97422e9562853f83dc751c9af6b1a"
  }, {
    "url": "sutra/0374-0396.html",
    "revision": "4e60be137ce8941fcf541efa2372e238"
  }, {
    "url": "sutra/0397-0424.html",
    "revision": "46fa56429b94898d55a13e51e41e03ca"
  }, {
    "url": "sutra/0425-0847.html",
    "revision": "6f0c418dfe1a82cdbff121b5610de7c7"
  }, {
    "url": "sutra/0848-1420.html",
    "revision": "8d95a8ad6218b8af06368556e8646e9c"
  }, {
    "url": "vinaya/1421-1504.html",
    "revision": "0d501e60f90ec5f73df073bc2638f21b"
  }, {
    "url": "sastra/1505-1535.html",
    "revision": "c15a8d3d101944195c7e67f480c4d9f9"
  }, {
    "url": "sastra/1536-1563.html",
    "revision": "c2e6fe02a998cd0b7616defacf51c4b8"
  }, {
    "url": "sastra/1564-1578.html",
    "revision": "447b1fdb18bf9f4ee222f476c0161a61"
  }, {
    "url": "sastra/1579-1627.html",
    "revision": "5fafe37fd3eab298b14f7f6cca2662cb"
  }, {
    "url": "sastra/1628-1692.html",
    "revision": "f5d926f022ad5877f1df5442773bcd0d"
  }, {
    "url": "other/1693-1803.html",
    "revision": "fe9aaf18369a232f66bbd8fc0dd52343"
  }, {
    "url": "other/1804-1815.html",
    "revision": "07695dee861667b6dec7494a408fce0d"
  }, {
    "url": "other/1816-1850.html",
    "revision": "e5661041da540df809b93755ae2480b7"
  }, {
    "url": "other/1851-2025.html",
    "revision": "368e431b5d12b78e7610d9fe16ee6417"
  }, {
    "url": "other/2026-2120.html",
    "revision": "ce2a0e10e249ffe8fd924d073623ec29"
  }, {
    "url": "other/2121-2136.html",
    "revision": "243d02365cc85911f65a5cf177817c1a"
  }, {
    "url": "other/2137-2144.html",
    "revision": "cc2a57233640ed77e840fefbceddc8f8"
  }, {
    "url": "other/2145-2184.html",
    "revision": "90e5cd8942d94d5a9e091ef41af946df"
  }, {
    "url": "other/2732-2864.html",
    "revision": "cb2bf56b2a46c8c8a3180b79e6be5f11"
  }, {
    "url": "other/2865-2920.html",
    "revision": "62e673a2161664c6ffd2b256d620b01e"
  }, {
    "url": "hot/0001/001.html",
    "revision": "5997f14c4ee6adaaf0e0d5b6184dfe71"
  }, {
    "url": "hot/0235/001.html",
    "revision": "19f7d1dde4c5f342e6e11cbeddedda29"
  }, {
    "url": "hot/0251/001.html",
    "revision": "3d9f03d9d4a4ca8d1cdea3a8c24c5197"
  }, {
    "url": "hot/0262/001.html",
    "revision": "e068a2215ab8009a4d08ba661c977f85"
  }, {
    "url": "hot/0278/001.html",
    "revision": "336251fcdd91dc584314bbc8ee851f16"
  }, {
    "url": "hot/0364/001.html",
    "revision": "160f69440218a4fb6f20542e42bcd0c1"
  }, {
    "url": "hot/0365/001.html",
    "revision": "7d095d07b14f2523defbeb5e67c6752e"
  }, {
    "url": "hot/0366/001.html",
    "revision": "085b8a315f413be3d2053c8ef4fb5a47"
  }, {
    "url": "hot/0412/001.html",
    "revision": "c990369ad1094a957fbac4460974f193"
  }, {
    "url": "hot/0784/001.html",
    "revision": "0a1a542dc02c19ad3f2b9a1a68054ec2"
  }, {
    "url": "hot/0945/001.html",
    "revision": "3034388573f6faaef0f4c23396afe928"
  }, {
    "url": "hot/1911/001.html",
    "revision": "6df3925301e0144b3bdd559330cd89ba"
  }, {
    "url": "hot/2016/001.html",
    "revision": "b35e0996dd99cb250e3567f8a4a25294"
  }, {
    "url": "about.html",
    "revision": "09b64d005e581e8a3daaed593537861e"
  }, {
    "url": "adobe-webfont.js",
    "revision": "7c043b1ce65979545de8579aa667e2ea"
  }, {
    "url": "book.html",
    "revision": "fee4dae814b2b993980c8f03f92f8283"
  }, {
    "url": "category.html",
    "revision": "3bb0e2c79ba7c95198bcd6fa60c1e903"
  }, {
    "url": "chat.html",
    "revision": "757cca0652c0c0eb526bee81489598fd"
  }, {
    "url": "index.html",
    "revision": "65620fa6ddb571621492a81ff6b2a0c0"
  }, {
    "url": "mantra.html",
    "revision": "d0001bde6a763d602099a09d5feb54e3"
  }, {
    "url": "other.html",
    "revision": "90c05064fe9807d36931ff8149518c07"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "sastra.html",
    "revision": "1a3c093db13229088bca419529344654"
  }, {
    "url": "sutra.html",
    "revision": "18ffa4cb987f11462f47229c21661dc1"
  }, {
    "url": "vinaya.html",
    "revision": "29f3de9a1b5310ea4bb01791a929af6a"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "manifest.webmanifest",
    "revision": "3e057658a17b57b1a13f4aa8365c4812"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    allowlist: [/^\/assets/, /^\/chat/, /^\/icons/, /^\/sutra/, /^\/vinaya/, /^\/sastra/, /^\/other/, /^\/hot/]
  }));

}));
