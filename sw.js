const filesToCache = [
  '/',
  '/dist/styles.css',
  '/dist/build.js',
  '/static/images/about/me.jpg',
  '/static/images/contact/macbook.jpg',
  '/static/images/favicon/nm.ico',
  '/static/images/icons/github.php',
  '/static/images/icons/instagram.php',
  '/static/images/icons/linkedin.php',
  '/static/images/icons/turtle.php',
  '/static/images/icons/twitter.php',
  '/static/images/projects/brandi.jpg',
  '/static/images/projects/photology.jpg',
  '/static/images/projects/sanisidro.jpg',
  '/static/images/projects/stocks.jpg',
  '/static/images/projects/tarapoto.jpg',
  '/static/images/projects/weather.jpg',
  '/static/images/slider/slide1.jpg',
  '/static/images/slider/slide2.jpg',
  '/static/images/slider/slide3.jpg',
  '/static/images/slider/slide4.jpg',
  '/static/font/catamaran/Catamaran-Regular.ttf',
  '/static/font/catamaran/Catamaran-SemiBold.ttf',
  '/static/font/catamaran/Catamaran-Thin.ttf',
  '/static/font/catamaran/OFL.txt',
  '/static/font/halant/Halant-Regular.ttf',
  '/static/font/halant/Halant-Light.ttf',
  '/static/font/halant/Halant-Medium.ttf',
  '/static/font/halant/Halant-SemiBold.ttf',
  '/static/font/halant/Halant-Bold.ttf',
  '/projects/brandi.php',
  '/projects/index.php',
  '/projects/photology.php',
  '/projects/sanisidro.php',
  '/projects/stocks.php',
  '/projects/tarapoto.php',
  '/projects/weather.php',
  '/static/includes/footer.php',
  '/static/includes/header.php',
  '/static/includes/navigation.php',
  '/static/includes/pre-loader.php',
  '/static/includes/sendForm.php',
  '/index.php',
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function (event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(filesToCache);
  }));
});

self.addEventListener('fetch', function (event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      console.log('Found ', event.request.url, ' in cache');
      return response;
    }
    console.log('Network request for ', event.request.url);
    return fetch(event.request);

    return caches.open(staticCacheName).then(function (cache) {
      cache.put(event.request.url, response.clone());
      return response;
    });
  }).catch(function (error) {

    // TODO 6 - Respond with custom offline page

  }));
});