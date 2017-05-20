<?php $thisPage="contactpage"; ?>
<?php
	include('src/includes/header.php')
?>
<?php include('src/includes/navigation.php')
?>		


<div class="site-content">	

	<div class="contact-hero">
		<h1 class="center" > Drop me a line!</h1>
	</div>	
	
	<section id="#startchange">
		<form id="contact-form" action="contact.php" method="POST" >
			<fieldset>
				<input type="text" name="user-name" placeholder="First Name" required>
				<input type="text" name="user-last-name" placeholder="Last Name" required>
			</fieldset>
			<fieldset>
				<input type="text" name="user-email" placeholder="you@yourwebsite.com" required>
				<input type="text" name="user-phone" placeholder="Phone">
			</fieldset>
			<textarea id="user-message-text" name="user-message" required> </textarea>
			<button>Submit</button>
		</form>
	</section>	
</div> 
<footer class="portfolio-footer">
<?php
	include('src/includes/footer.php')
?>		
