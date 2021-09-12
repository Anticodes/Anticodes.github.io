'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a7680b9e099b30342abfea4f6e762e30",
".git/config": "59c0935e9740c061ef60bbd709300a5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "576388a1b19b28fcae9e48fee277adbd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0661243c25a6257de1a4d9a2424bfd4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec2673ea15effb39fe6c7b79c78f4dfd",
".git/logs/refs/heads/main": "189788301d715fc85238b717bc340258",
".git/logs/refs/heads/master": "703f188aa7887330cc6c93f50b7289f0",
".git/logs/refs/remotes/origin/main": "d95e5b8a6f234e674bd04497fbdb61b7",
".git/logs/refs/remotes/origin/master": "fa932e87ce55c5f7696a0cf671050ba4",
".git/objects/03/a1da5f5bdcb3372b554509d62d2a3d45a62884": "4b5547eab530a068449ade85b39b48f6",
".git/objects/07/2f84ff1aae9d2228363f5f67cb75500c02056b": "d716feebc4f3c82e0fc6674e4a425763",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/26/f2b3976c0ac3d7cdd6fb97f84cf7f773d4d766": "559ce8a8f686ba7017e13867f02c769f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ae8a69249a47a43511fe28c4d36d36dc1279f6": "1d8e1aa8f4408dff11959f47bffc5f79",
".git/objects/50/99e3f0a153891a1df819a3ff8ee97b42bcd768": "64a7c63bf66a7812412146423826fc1f",
".git/objects/50/ed813ad903152961bb029aab191000e486b0d7": "b6ba6268d06cae3befc8bf0eeef5b75c",
".git/objects/5d/915d7b2e08c714e1fa6f504a69d215095a4872": "62d0214286a86f08832416551fb0308a",
".git/objects/60/67ed1b7cee38b5659997253451eb191221009f": "26839a2db767963a136dfa9974e51816",
".git/objects/76/937b7448029c92323b8f3e3f3d53a1abdeb202": "60745c77772463243491ebfea6a2d306",
".git/objects/77/574a5051ae0e459d251400242905492a8036b2": "06180046cdb1916ea50e040a6598751c",
".git/objects/77/7358f90513158fb31ddbd3e652db83849aacec": "379336c6005645c484091f9306009954",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/62f53d33f17019d02df1c4b2983f2f17ed45d2": "a19cc76c5dc516165cb8c42299de5b41",
".git/objects/83/68a2862cd70c39465858df700e60c0aa4ece67": "a80ac9c12303215b1f649612d5e96016",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/8b91238255ed1f1d7c4dc7a4f26fa202175357": "a2981369f17ce65232e622ebdb48acd0",
".git/objects/99/03308185d3def32b353545136aec65867cc115": "e4d20125786bd00341b9debec8c58b7e",
".git/objects/9a/e0f2b9d046d9288dcf2a813862ded70ed28a17": "68938a530015c6b5aacca3ab736260fa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/98882b8fcf4b0efea9077daf3f28441ab22bad": "ccac0732e7fa01dc183857f82378497c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/14cf2ddd82a35b9aa49e51fc74039e29eeb8dd": "a7482b7583256f1a2532118fc51794ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/9e88b5b42246cd633dab63bcdb3a87dd49a82a": "2be380cf131a61a707a81bd5815354ee",
".git/objects/c9/c112a5b95597810bdf4aac6472a6cd738b8ac2": "4053a7e8668efb8de83ac7f7e316f64b",
".git/objects/df/102702812914769d325cb528371ff43537904a": "7eae45d9acdf41624c20d6d39aafb783",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/cfbdcd47e7368b4d5fcaaba58368e16d50bcd7": "fb8cddb37e40bfc63e6683dfeb79e152",
".git/objects/f1/3cb58f31dfd102c183f31421dcab9ccd7e4b1e": "458f7183af9097c749fc0fac8deb5d38",
".git/objects/pack/pack-7d502b067d411ff2fc6d5d66d25495a58924fefd.idx": "40c9f799b17f1eefba7758efedf2b9ab",
".git/objects/pack/pack-7d502b067d411ff2fc6d5d66d25495a58924fefd.pack": "dabe0a3d0823a8fc3f3a87a763ef4459",
".git/ORIG_HEAD": "2c9bcf6019dea37fc5dbfc4663e7e241",
".git/refs/heads/main": "84519f64da064e19abb22ff604773834",
".git/refs/heads/master": "8210f693d0581f44546543c4f2d0295b",
".git/refs/remotes/origin/main": "84519f64da064e19abb22ff604773834",
".git/refs/remotes/origin/master": "8210f693d0581f44546543c4f2d0295b",
"assets/AssetManifest.json": "7e1713922b66a55681071b4b781b3bbd",
"assets/assets/images/favicon.png": "66033a032f65001d07a07b291ba6ddc8",
"assets/assets/images/pets_thumbnail.png": "65fb01008cb07bbc2bac8a12dd952fd2",
"assets/assets/images/SquareAntimax.png": "9ff80a1fe3d26c81bec5d76068cb39a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6afc4bd4863431ce6bdd0e8e149f18aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "66033a032f65001d07a07b291ba6ddc8",
"icons/Icon-192.png": "7af933962c5baae5c0bd9a9b52d5c85b",
"icons/Icon-512.png": "7859c06f65029bebc8dd576f2b31adaa",
"index.html": "34851483030a89619cbfc641f8ddc27e",
"/": "34851483030a89619cbfc641f8ddc27e",
"main.dart.js": "3408e24f21bd8b8ab75bd41f4ea89da3",
"manifest.json": "18a708272eb930588045a08fdccb9288",
"version.json": "38b0ec7935a09e55fcd3b01971ca0f36"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
