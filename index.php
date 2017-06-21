<?php $thisPage="index"; ?>
<?php 
	include('src/includes/header.php')
?>
	<?php include('src/includes/navigation.php')
	?>

	<div class="hero">
		<div class="hero-text">
			<h1> Neil Malpartida</h1>
			<p> Web Developer</p>
		</div>		
	</div>

	<div class="slider-container">

		<div class="slider">
			<div class="slick-container">
				<img class="source" src="/src/images/slider1.jpg" alt="Wordpress" >
			</div>
			<div class="slick-container"> 
				<img class="source" src="/src/images/slider2.jpg" alt="tarapoto Resort" >
			</div>
			<div class="slick-container"> 
				<img class="source" src="/src/images/slider3.jpg" alt="Brandi Project" >
			</div>
		</div>
		
	</div>

</div>

<footer class="invisible">
<?php
	include('src/includes/footer.php')
?>