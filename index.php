<?php $thisPage="index"; ?>
<?php 
	include('src/includes/header.php')
?>
	<header <?php if ($thisPage=="index") echo " class=\"home\""; ?>>>
		<?php include('src/includes/navigation.php')
		?>	
	</header>	
	<div class="hero">
		<h1> Neil Malpartida</h1>
		<p> Web Developer</p>
	</div>
	<footer>
<?php

	include('src/includes/footer.php')

?>