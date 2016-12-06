<?php $thisPage="contactpage"; ?>
<?php
	include('src/includes/header.php')
?>
<header>
	<?php include('src/includes/navigation.php')
?>		
</header>	

<div class="site-content">	

	<div class="hero contact-hero">
		<h1 class="center"> Drop me a line!</h1>
	</div>	
	
	<section>
		<form id="contact-form" class="contact-form">
			<fieldset>
				<input type="text" name="user-name" placeholder="First Name" required>
				<input type="text" name="user-last-name" placeholder="Last Name" required>
			</fieldset>
			<fieldset>
				<input type="text" name="user-email" placeholder="Email" required>
				<input type="text" name="user-phone" placeholder="Phone">
			</fieldset>
			<textarea name="user-message" required> </textarea>
			<button>Submit</button>
		</form>
	</section>	
</div> 
<footer class="portfolio-footer">
<?php
	include('src/includes/footer.php')
?>		
