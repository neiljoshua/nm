const filesToCache = [
  '/',
  '/dist/styles.css',
  '/dist/jquery.bundle.js',
  '/dist/main.bundle.js',
  '/dist/images/about/me.jpg',
  '/dist/images/contact/macbook.jpg',
  '/dist/images/favicon/favicon.ico',
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
  '/src/includes/github.php',
  '/src/includes/instagram.php',
  '/src/includes/linkedin.php',
  '/src/includes/turtle.php',
  '/src/includes/twitter.php',
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
