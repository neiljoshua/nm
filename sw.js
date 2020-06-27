const filesToCache = [
  '/',
  '/dist/styles.css',
  '/dist/build.js',
  '/dist/images/about/me.jpg',
  '/dist/images/contact/macbook.jpg',
  '/dist/images/favicon/nm.ico',
  '/dist/images/icons/github.php',
  '/dist/images/icons/instagram.php',
  '/dist/images/icons/linkedin.php',
  '/dist/images/icons/turtle.php',
  '/dist/images/icons/twitter.php',
  '/dist/images/projects/brandi.jpg',
  '/dist/images/projects/photology.jpg',
  '/dist/images/projects/sanisidro.jpg',
  '/dist/images/projects/stocks.jpg',
  '/dist/images/projects/tarapoto.jpg',
  '/dist/images/projects/weather.jpg',
  '/dist/images/projects/neiljoshua.jpg',
  '/dist/images/slider/slide1.jpg',
  '/dist/images/slider/slide2.jpg',
  '/dist/images/slider/slide3.jpg',
  '/dist/images/slider/slide4.jpg',
  '/dist/fonts/Catamaran-Regular.ttf',
  '/dist/fonts/Catamaran-SemiBold.ttf',
  '/dist/fonts/Catamaran-Thin.ttf',
  '/dist/fonts/Halant-Regular.ttf',
  '/dist/fonts/Halant-Light.ttf',
  '/dist/fonts/Halant-Medium.ttf',
  '/dist/fonts/Halant-SemiBold.ttf',
  '/dist/fonts/Halant-Bold.ttf',
  '/projects/',
  '/contact',
  '/about',
  '/projects/brandi',
  '/projects/index.php',
  '/projects/photology',
  '/projects/sanisidro',
  '/projects/stocks',
  '/projects/tarapoto',
  '/projects/weather',
  '/projects/neiljoshua',
  '/src/includes/footer.php',
  '/src/includes/header.php',
  '/src/includes/navigation.php',
  '/index.php',
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function (event) {
  // console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(filesToCache);
  }));
});

self.addEventListener('fetch', function (event) {

  if (event.request.method === 'POST') {
    return;
  }
  console.log('Fetch event for ', event.request.url);
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      // console.log('Found ', event.request.url, ' in cache');
      return response;
    }
    // console.log('Network request for ', event.request.url);
    return fetch(event.request);

    return caches.open(staticCacheName).then(function (cache) {
      cache.put(event.request.url, response.clone());
      return response;
    });
  }).catch(function (error) {
    // console.log("Service Worker failed to be installed");
    // TODO 6 - Respond with custom offline page
  }));

});
