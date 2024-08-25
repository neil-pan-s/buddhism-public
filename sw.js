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
    "url": "assets/app-COE7Devr.js",
    "revision": null
  }, {
    "url": "assets/app-DMxkV--P.png",
    "revision": null
  }, {
    "url": "assets/BinRtZV-.js",
    "revision": null
  }, {
    "url": "assets/BInWaZ_C.js",
    "revision": null
  }, {
    "url": "assets/BQbQ0AiB.js",
    "revision": null
  }, {
    "url": "assets/BYF_woOE.js",
    "revision": null
  }, {
    "url": "assets/CU45yI3U.css",
    "revision": null
  }, {
    "url": "assets/DCWr66CF.js",
    "revision": null
  }, {
    "url": "assets/Deby6LJH.css",
    "revision": null
  }, {
    "url": "assets/Dg_4T5iO.js",
    "revision": null
  }, {
    "url": "assets/Dk7MlfdZ.css",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/HxHylqi9.js",
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
    "revision": "192c56640cb6fdd32cbea6bbdf7e61f3"
  }, {
    "url": "chat/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "chat/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "chat/assets/arc-2d3369b9.js",
    "revision": "6583592708cb24d475d4928d8052ce50"
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
    "url": "chat/assets/blockDiagram-9f4a6865-a649fc5c.js",
    "revision": "3d9ca6c9d84c4ba921a4ffdf7ce65873"
  }, {
    "url": "chat/assets/c4Diagram-ae766693-72109471.js",
    "revision": "79fb32fabe4f999144565b27132f2cd8"
  }, {
    "url": "chat/assets/channel-d5a8452f.js",
    "revision": "22a5dc69666d6bb2841aa222ea6f2c80"
  }, {
    "url": "chat/assets/classDiagram-fb54d2a0-702a1859.js",
    "revision": "6f25995404832bf30ef6620e28e0dab7"
  }, {
    "url": "chat/assets/classDiagram-v2-a2b738ad-04569f52.js",
    "revision": "9ddc9e11d5d39b48098e4873843c1752"
  }, {
    "url": "chat/assets/clone-f1d3b3a3.js",
    "revision": "eb6a8da728da2d5010d904b1e0a8bce4"
  }, {
    "url": "chat/assets/createText-ca0c5216-1fbcc5b2.js",
    "revision": "2145b36f8a8af2310596feb8d34b7032"
  }, {
    "url": "chat/assets/donate-dbedba07.jpg",
    "revision": "f391e140e2764f73464280b7458293da"
  }, {
    "url": "chat/assets/edges-066a5561-6dc4bb15.js",
    "revision": "83695453b581a3bed482fc4ab21a2d35"
  }, {
    "url": "chat/assets/erDiagram-09d1c15f-653eabef.js",
    "revision": "6542a18accb29ef33ef900833fdd050e"
  }, {
    "url": "chat/assets/flowchart-elk-definition-ae0efee6-b63e100c.js",
    "revision": "1a3ae140064cdb87c00c2b7bde01481a"
  }, {
    "url": "chat/assets/flowDb-c1833063-4f24856a.js",
    "revision": "e3138162bf3359bfd1db022007ea04bb"
  }, {
    "url": "chat/assets/flowDiagram-b222e15a-f0e9f8f8.js",
    "revision": "c6f743bb1780e599100565415266b6f5"
  }, {
    "url": "chat/assets/flowDiagram-v2-13329dc7-1f26a2f7.js",
    "revision": "be4c7bf43c40d166483576f9c22a0847"
  }, {
    "url": "chat/assets/ganttDiagram-b62c793e-bb31d47f.js",
    "revision": "fd8d5019d79996c8a6e71c62494d8cb6"
  }, {
    "url": "chat/assets/gitGraphDiagram-942e62fe-9d302d51.js",
    "revision": "b4ef6b9cd09fe8f30fa757cc549c73ec"
  }, {
    "url": "chat/assets/graph-ff385434.js",
    "revision": "5907d6d653977ffb78c31228f3f80b96"
  }, {
    "url": "chat/assets/index-01f381cb-7c923da1.js",
    "revision": "7e5b84959e99afa9d38e19dac1c53c13"
  }, {
    "url": "chat/assets/index-026debc2.js",
    "revision": "e804148a99a6df7d41a3ea10511c0f90"
  }, {
    "url": "chat/assets/index-18b71b24.js",
    "revision": "8426134f37a1b53732a5e9cc0dfb20d6"
  }, {
    "url": "chat/assets/index-4b5b7462.css",
    "revision": "8943b0d0084fd65b1956b8627532992b"
  }, {
    "url": "chat/assets/index-ae2f82de.js",
    "revision": "2d2841c507b2aaaa52b65e916376107d"
  }, {
    "url": "chat/assets/index-b8bcac86.css",
    "revision": "3a25857bfb1fa77e123f18c08fca233b"
  }, {
    "url": "chat/assets/index-ef594b03.js",
    "revision": "189467660ed8a1e3a4b1c42371de498c"
  }, {
    "url": "chat/assets/index-fdd0330e.js",
    "revision": "d0609e9d7a66c4159c0e1e4268dcf316"
  }, {
    "url": "chat/assets/infoDiagram-94cd232f-7fa9fdfa.js",
    "revision": "f70a9c00e863116991f47e5ab3e5cd42"
  }, {
    "url": "chat/assets/init-77b53fdd.js",
    "revision": "3ce28180466443e9b617d7b96e9f7b8f"
  }, {
    "url": "chat/assets/journeyDiagram-6625b456-e88a1bed.js",
    "revision": "67424587490c8add471fc90e18a55a0f"
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
    "url": "chat/assets/layout-bc0b204c.js",
    "revision": "54d09aeda86e22093b98a6ecead05271"
  }, {
    "url": "chat/assets/line-ab208fda.js",
    "revision": "8294ee6388adbcf22ea98db688d0c42f"
  }, {
    "url": "chat/assets/linear-e0fe406a.js",
    "revision": "98cc70f106dac9a25c07f91fbb546522"
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
    "url": "chat/assets/mindmap-definition-307c710a-74739451.js",
    "revision": "bf481cd0522804fb16a85f1e8b71c9de"
  }, {
    "url": "chat/assets/ordinal-ba9b4969.js",
    "revision": "3a57ceba2c0d70da5e704aad84f79b46"
  }, {
    "url": "chat/assets/path-53f90ab3.js",
    "revision": "f86c0243cb45746453c6b4f7dbd9f34d"
  }, {
    "url": "chat/assets/pieDiagram-bb1d19e5-8211fdf4.js",
    "revision": "06bd1965bd2a063bdd135507af4175bc"
  }, {
    "url": "chat/assets/quadrantDiagram-c759a472-fa7fd06a.js",
    "revision": "309ff41fb76e7e1de50f7a1d82231102"
  }, {
    "url": "chat/assets/requirementDiagram-87253d64-3e5b080d.js",
    "revision": "cfd188d6e67f00fe7d98b5e25b8f07e9"
  }, {
    "url": "chat/assets/sankeyDiagram-707fac0f-2874b20f.js",
    "revision": "f52b4d44ec25f42172e7341f922daeb2"
  }, {
    "url": "chat/assets/sequenceDiagram-6894f283-ec765dca.js",
    "revision": "485a7a885784a12acdda3d7c6ab68e06"
  }, {
    "url": "chat/assets/stateDiagram-5dee940d-1a73f2f1.js",
    "revision": "85c32324e841798a3482c7bc8ee757da"
  }, {
    "url": "chat/assets/stateDiagram-v2-1992cada-d730385b.js",
    "revision": "434d86641f55122545da61a78a78f3c5"
  }, {
    "url": "chat/assets/styles-0784dbeb-9dfadab4.js",
    "revision": "825e5654f74bfde8fede66ca3b9cfe8c"
  }, {
    "url": "chat/assets/styles-483fbfea-094cd68f.js",
    "revision": "b1cbc82561aebb19d12218e1267028eb"
  }, {
    "url": "chat/assets/styles-b83b31c9-0f294e34.js",
    "revision": "5b857e119c12f4dbcf280b3624ec62e3"
  }, {
    "url": "chat/assets/svgDrawCommon-5e1cfd1d-76085305.js",
    "revision": "e4edf951b65ccdc1e7916f4296e74dc5"
  }, {
    "url": "chat/assets/Tableau10-1b767f5e.js",
    "revision": "f2197f44250cada74e1e663d3abfba3e"
  }, {
    "url": "chat/assets/timeline-definition-bf702344-bfbf8da5.js",
    "revision": "3e0c8c72b2b4528079478afeff59dc6f"
  }, {
    "url": "chat/assets/xychartDiagram-f11f50a6-9d4a8c27.js",
    "revision": "4ad8a546ac72ab1edf97851382a859dd"
  }, {
    "url": "sutra/0001-0151.html",
    "revision": "fc3852ba273d85e45ed88c2d3573ac0f"
  }, {
    "url": "sutra/0152-0219.html",
    "revision": "cb110c248bb062848347824dc7739ba3"
  }, {
    "url": "sutra/0220-0261.html",
    "revision": "639af3e36d31827dce909d955b47369b"
  }, {
    "url": "sutra/0262-0277.html",
    "revision": "fd4e4bd0fa7fbf4b4def9d357b257800"
  }, {
    "url": "sutra/0278-0309.html",
    "revision": "f2873fd2c12a812dd648c6bcf92c847b"
  }, {
    "url": "sutra/0310-0373.html",
    "revision": "3a52fae3a786636fc53d84fab717c4ef"
  }, {
    "url": "sutra/0374-0396.html",
    "revision": "e6701e8fdd0dafdc61994cd1bc43c910"
  }, {
    "url": "sutra/0397-0424.html",
    "revision": "2414417d37597c3b798f8c060ac5af72"
  }, {
    "url": "sutra/0425-0847.html",
    "revision": "14b2322cfce2abbb39458bcece7537fd"
  }, {
    "url": "sutra/0848-1420.html",
    "revision": "5ced19f9774bf71b8e516e7f07b5ba38"
  }, {
    "url": "vinaya/1421-1504.html",
    "revision": "cdc0a0b0d047aa48cbeaf3ee357ebde8"
  }, {
    "url": "sastra/1505-1535.html",
    "revision": "23eb367a7df850c88f6989c7b6e9ab59"
  }, {
    "url": "sastra/1536-1563.html",
    "revision": "cc3855d2f1aa953763d2913882cc49d2"
  }, {
    "url": "sastra/1564-1578.html",
    "revision": "33047f4fd1ae6e46232097b7996551fa"
  }, {
    "url": "sastra/1579-1627.html",
    "revision": "0fcb98827397c06e015ff930e847fb05"
  }, {
    "url": "sastra/1628-1692.html",
    "revision": "f0a6aab63b4cd9c19ab07150a46fadf7"
  }, {
    "url": "other/1693-1803.html",
    "revision": "6f62b17fe6b17f48ae4c867aa640837b"
  }, {
    "url": "other/1804-1815.html",
    "revision": "6b96bdcd275bbb37ee00ee56ab1b82a3"
  }, {
    "url": "other/1816-1850.html",
    "revision": "eaee1c6f9411be1c71e6a47ca5ffb383"
  }, {
    "url": "other/1851-2025.html",
    "revision": "6488e8836947b560562e9549874d363e"
  }, {
    "url": "other/2026-2120.html",
    "revision": "712029af9bb6bfe4e618dbd7bb1febbd"
  }, {
    "url": "other/2121-2136.html",
    "revision": "984041964bfd71e6412bf6b9c258b878"
  }, {
    "url": "other/2137-2144.html",
    "revision": "aadcefcd6eb39b7580e7807180c3daee"
  }, {
    "url": "other/2145-2184.html",
    "revision": "f46b6402cdb6b63873f429870d30dc7b"
  }, {
    "url": "other/2732-2864.html",
    "revision": "9260e1ce11d0527ca49db083aff5998c"
  }, {
    "url": "other/2865-2920.html",
    "revision": "f2f74f24d03d8feb814e0a7df87409e8"
  }, {
    "url": "hot/0001/001.html",
    "revision": "a8c6c2f0944ef918ccd2279754dcf95a"
  }, {
    "url": "hot/0235/001.html",
    "revision": "a6a6454d97058822da052503c898497a"
  }, {
    "url": "hot/0251/001.html",
    "revision": "7d50ef7ee34ccda50200904ab82cee45"
  }, {
    "url": "hot/0262/001.html",
    "revision": "9d6f91542bde27601554d5e016f500cd"
  }, {
    "url": "hot/0278/001.html",
    "revision": "79ec5d77dc2a2448b3ba4797ae147479"
  }, {
    "url": "hot/0364/001.html",
    "revision": "309a78122dae733d6956943e2e979116"
  }, {
    "url": "hot/0365/001.html",
    "revision": "8e88f03a27a6f1aa0946b353fe87ef8b"
  }, {
    "url": "hot/0366/001.html",
    "revision": "512752a31eb596699f4bc15ea60c96be"
  }, {
    "url": "hot/0412/001.html",
    "revision": "7bd029d7a70d04e8a0abe303eb15aa57"
  }, {
    "url": "hot/0784/001.html",
    "revision": "93367d49b39f9b65d40141ac7c39e92b"
  }, {
    "url": "hot/0945/001.html",
    "revision": "a959e1c8018007313181bd61db4fa4dc"
  }, {
    "url": "hot/1911/001.html",
    "revision": "4315de3d2b0e476e26f366134c8ce605"
  }, {
    "url": "hot/2016/001.html",
    "revision": "baf2e91b987b25a12909922f12a9c129"
  }, {
    "url": "about.html",
    "revision": "5bb65c9245ab7fa8bfb67cd1f89fdaa0"
  }, {
    "url": "adobe-webfont.js",
    "revision": "7c043b1ce65979545de8579aa667e2ea"
  }, {
    "url": "book.html",
    "revision": "c58491bcc660fecb7c5926735786204d"
  }, {
    "url": "category.html",
    "revision": "0a69b49f75cd4381d568c094c488491d"
  }, {
    "url": "chat.html",
    "revision": "757cca0652c0c0eb526bee81489598fd"
  }, {
    "url": "index.html",
    "revision": "0ba73daa32d960a2b7252e3d5fcd93c3"
  }, {
    "url": "mantra.html",
    "revision": "a53ae1b1d870260d98fe65b0ac5e91c3"
  }, {
    "url": "other.html",
    "revision": "22d5135a93733f874664363d01fa6185"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "sastra.html",
    "revision": "1d558437d4a27aca570dddc31ed569ae"
  }, {
    "url": "sutra.html",
    "revision": "2925ccf3827d4de933e176c05918b82e"
  }, {
    "url": "vinaya.html",
    "revision": "aa3fa03e2d85a235811512734c819e6b"
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
