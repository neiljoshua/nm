
        <a class="footer__email" href="mailto:neil@neiljoshua.dev">neil@neiljoshua.dev</a>

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

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-82838385-1', 'auto');
          ga('send', 'pageview');
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
