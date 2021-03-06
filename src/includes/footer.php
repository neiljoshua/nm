
        <p class="footer__copyright">neiljoshua.dev</p>

        <div class="footer-social">
          <a class="footer-social__link" href="http://twitter.com/NeilJMV" target="_blank" rel="noopener">Twitter
          <?php if ($thisPage=="projects" || $thisPage=="project") {
            include('../src/includes/twitter.php');
          } else {
            include('./src/includes/twitter.php');
          }
          ?>
          </a>
          <a class="footer-social__link" href="http://www.linkedin.com/in/neiljoshua" target="_blank" rel="noopener">LinkedIn
          <?php if ($thisPage=="projects" || $thisPage=="project") {
            include('../src/includes/linkedin.php');
          } else {
            include('./src/includes/linkedin.php');
          }
          ?></a>
          <a class="footer-social__link" href="http://www.instagram.com/neiljoshua/" target="_blank" rel="noopener">Instagram
          <?php if ($thisPage=="projects" || $thisPage=="project") {
            include('../src/includes/instagram.php');
          } else {
            include('./src/includes/instagram.php');
          }
          ?></a>
          <a class="footer-social__link" href="http://www.github.com/neiljoshua/" target="_blank" rel="noopener">Github
          <?php if ($thisPage=="projects" || $thisPage=="project"){
            include('../src/includes/github.php');
          } else {
            include('./src/includes/github.php');
          }
          ?></a>
        </div>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-82838385-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-82838385-1');
        </script>

        <script>
          if('serviceWorker' in navigator) {
            navigator.serviceWorker
                     .register('/sw.js')
                     .then(function() { console.log("Service Worker Registered"); });
          }
        </script>

      </footer>
    </div>
  </body>
</html>
