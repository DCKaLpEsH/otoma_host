'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5c452b163f5bde79aab506dba0287ef2",
"assets/assets/pngs/adobe.png": "1c561417eb35091d9b5bd75627bff7bc",
"assets/assets/pngs/armando.png": "91caf67a676d0fecf473af0abc2259b2",
"assets/assets/pngs/course_1.png": "c7debe782e0e3a733097c88135712484",
"assets/assets/pngs/course_2.png": "8014bd3ec70843c1aebc1299789da4e9",
"assets/assets/pngs/course_3.png": "4589719873f5a83dee36ce57f34b634d",
"assets/assets/pngs/downloads.png": "81fc12ce1804e595417f2ac94867553c",
"assets/assets/pngs/facebook.png": "131a1749dd440d3e348965023c439adf",
"assets/assets/pngs/google.png": "3e20a6fc6be69fdbca3f312d52c53b29",
"assets/assets/pngs/grabbs.png": "2525d9680b8ce6563dfd7d525149e9eb",
"assets/assets/pngs/hand.png": "82ac3352dbff41032d0f3a4c7c35d4b2",
"assets/assets/pngs/hourglass.png": "791f78484bf9a7981ec8a67ca3ae1af0",
"assets/assets/pngs/jane_doe.png": "4826bf87c027eac7ad8e31ea941da925",
"assets/assets/pngs/john_doe.png": "13d2e63b7dfe4b9b1c8be86ea7c0d63e",
"assets/assets/pngs/lock.png": "0ae93dabc4fbfa441c5ae3ad5f1076b6",
"assets/assets/pngs/loupe.png": "a22808f138a7ce25be61a2edc9e913c9",
"assets/assets/pngs/matthew_james.png": "f0c15f614784b2b4253f39c80b10aca8",
"assets/assets/pngs/Nike.png": "7eb7a975b8a6ae7d112c8b3f4355b937",
"assets/assets/pngs/notebook.png": "a47aca917cdffc7e3176150ed16b96dc",
"assets/assets/pngs/olsen.png": "73f3ba810df26fa5a9ed537b3dcd5583",
"assets/assets/pngs/pencil_man.png": "78c3dd0a3f808843013c227d4ef0839e",
"assets/assets/pngs/phone.png": "aa1db4505803e0aca96ed360295c6bd9",
"assets/assets/pngs/polygon.png": "aab87f7bc36f014f06d4cd5984b97798",
"assets/assets/pngs/Slack.png": "01cdb374989c412e9bdad702d168a9be",
"assets/assets/pngs/spotify.png": "d8b94a4adecfe877293725f4f42d0197",
"assets/assets/svgs/behance.svg": "f8be00e21faead1140d7ea64f9e57862",
"assets/assets/svgs/calendar.svg": "73a2f6380d3305efb9268e07cb351361",
"assets/assets/svgs/clock.svg": "1f34ef5442a3df7c508ab49e267ff809",
"assets/assets/svgs/clock_blue.svg": "be1acaf3b423c0c432063d01dbcec789",
"assets/assets/svgs/clock_red.svg": "eb8e683c4de1ff081306a00607c3eef4",
"assets/assets/svgs/discord.svg": "b4fc35884869489098241fe5a17f283d",
"assets/assets/svgs/dribbble.svg": "8b8a735d607d12fc179f9f974d015e14",
"assets/assets/svgs/instagram.svg": "6f5743266347846f403aa5048f4a3121",
"assets/assets/svgs/linkedin.svg": "37edc8457db20df26966f51cd3d25907",
"assets/assets/svgs/maestro.svg": "bbb40baad8df0b2f97577ade7cfe19da",
"assets/assets/svgs/mastercard.svg": "37739e660ed78dd5908e6335a54835cc",
"assets/assets/svgs/paypal.svg": "b176094e0ca217597db21264141eb8ec",
"assets/assets/svgs/polygon.svg": "84a5b0c0a9f22eb25f41df250d0f6492",
"assets/assets/svgs/visa.svg": "203d513923b298ef61a026eac688170e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8facf4260469677c724e5567f483454f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a45feee77b3cbaccbe084bd5dad000ce",
"/": "a45feee77b3cbaccbe084bd5dad000ce",
"main.dart.js": "2dae8c4942be76dae80bd95bcb23971d",
"manifest.json": "a649ac2bd2d987df1aae162d84c73ccd",
"version.json": "8101910f7843b5b53eac078a3dd0e02b"
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
