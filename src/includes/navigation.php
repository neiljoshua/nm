<div class="overlay <?php if ($thisPage=="index") echo " class=\"home\""; ?>"> 
		<ul class="site-nav">
			<li<?php if ($thisPage=="portfolio") echo " id=\"currentpage\""; ?>><a <?php if ($thisPage=="index") echo " class=\"home-page-a\""; ?> href="portfolio">Portfolio</a></li>
		    <li<?php if ($thisPage=="about") echo " id=\"currentpage\""; ?>><a <?php if ($thisPage=="index") echo " class=\"home-page-a\""; ?> href="about">About</a></li>
		    <li<?php if ($thisPage=="contactpage") echo " id=\"currentpage\""; ?>><a <?php if ($thisPage=="index") echo " class=\"home-page-a\""; ?> href="contactpage">Contact</a></li>
		</ul>
</div>		