
        <a class="footer__email" href="mailto:neil@neiljoshua.com">neil@neiljoshua.com</a>

        <div class="footer-social">
          <a class="footer-social__link" href="http://twitter.com/NeilJMV" target="_blank">Twitter
          <?php if ($thisPage=="projects") {
            include('../static/images/icons/twitter.php');
          } else {
            include('static/images/icons/twitter.php');
          }
          ?>
          </a>
          <a class="footer-social__link" href="http://www.linkedin.com/in/neiljoshua" target="_blank">LinkedIn
          <?php if ($thisPage=="projects") {
            include('../static/images/icons/linkedin.php');
          } else {
            include('static/images/icons/linkedin.php');
          }
          ?></a>
          <a class="footer-social__link" href="http://www.instagram.com/neiljoshua/" target="_blank">Instagram
          <?php if ($thisPage=="projects") {
            include('../static/images/icons/instagram.php');
          } else {
            include('static/images/icons/instagram.php');
          }
          ?></a>
          <a class="footer-social__link" href="http://www.github.com/neiljoshua/" target="_blank">Instagram
          <?php if ($thisPage=="projects") {
            include('../static/images/icons/github.php');
          } else {
            include('static/images/icons/github.php');
          }
          ?></a>
        </div>
        <script src="/dist/build.js"></script>

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
