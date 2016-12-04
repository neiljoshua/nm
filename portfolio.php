<?php $thisPage="portfolio"; ?>
<?php
	include('src/includes/header.php')
?>
<header class="portfolio-nav">
<?php include('src/includes/navigation.php')
?>	
</header>	
<div class="site-content">		

	<div class="page-title">
		<h1 >Portfolio</h1>
		<p> This websites were developed for the purpose of practicing the latest Web technoligies available.</p>
	</div>

	<div class="row">

		<div class="portfolio-image pull-left">
	   		<a href="http://www.brandi.neiljoshua.com" target="_blank" ><img src="src/images/brandiscreen.jpg" alt="Brandi Project" ></a>
	   	</div>	

	   	<div class="portfolio-text pull-right">
			<h2> Brandi </h2>
			<p>Responsive Website. It is a single page template that is up to date standards.
			It uses latest versios of HTML5, CSS3, JavaScript, JQuery, Responsive design that adjust to the size of the viewport
			</p>
		</div>
	</div>	

	<div class="row">
		
		<div class="portfolio-image pull-right">
	   		<a href="http://weather.neiljoshua.com/" target="_blank" ><img src="src/images/weatherscreen.jpg" alt="Weather App" ></a>
	   	</div>	
	   	
	   	<div class="portfolio-text pull-left">
			<h2> Weather App - BETA </h2>
			<p>Weather app allows you to check the weather in all cities aroubd the world. It was buit with HTML5, CSS3, JQuery, and uses Weather Channel API to get the latest weather in all the cities in the world.</p>
		</div>

	</div>

	<div class="row">
		<div class="portfolio-image pull-left">
	   		<a href="http://tarapoto.neiljoshua.com" target="_blank" ><img src="src/images/tarapoto.jpg" alt="tarapoto Resort" ></a>
	   	</div>	

	   	<div class="portfolio-text pull-right">
			<h2> Tarapoto Resort</h2>
			<p>Multi-page UI Design. Tarapoto website was built with PHP, JQuery. Tarapoto adapts to the viewport </p>
		</div>

	</div>

</div> 
<footer class="portfolio-footer">
<?php
	include('src/includes/footer.php')
?>			