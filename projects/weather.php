<?php $thisPage="Weather"; ?>
<?php
	include('../src/includes/header.php')
?>
<?php include('../src/includes/navigation.php')
?>

<div class="project-title">
	<h1 class="project-title__text" >Weather</h1>
</div>

<div class="button">
	<a class="button__link" href="projects.php">Back to Projects</a>
	<a class="button__link" href="http://weather.neiljoshua.com/" target="_blank">View Project</a>
</div>

<div class="project-row">

	<div class="project-image">
   		<a class="project-image__link" href="http://weather.neiljoshua.com/" target="_blank" >
   			<img class="project-image__img" src="../src/images/projects/weather.jpg" alt="Weather App" >
   		</a>
   	</div>

   	<div class="project-copy">
		<ul class="project-copy__list">
			<li class="project-copy__item">Responsive app</li>
			<li class="project-copy__item">HMTL5</li>
			<li class="project-copy__item">CSS3</li>
			<li class="project-copy__item">JavaScript</li>
			<li class="project-copy__item">AJAX</li>
			<li class="project-copy__item">JSON</li>
			<li class="project-copy__item">Weather Underground API</li>
		</ul>
	</div>

</div>

<footer class="footer">
<?php
	include('../src/includes/footer.php')
?>
