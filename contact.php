<?php $thisPage="contact"; ?>
<?php
	include('src/includes/header.php')
?>
<?php include('src/includes/navigation.php')
?>		

<div class="contact-hero">
	<h1 class="center" > Drop me a line!</h1>
</div>	

<div class="contact-form-container">
	<form id="contact-form" action="/src/includes/sendForm.php" method="POST" >
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
		<div class="contact-message">
			<p class="center">Thank you for the message!</p>
		</div>
	</form>
</div>	

<footer>
<?php
	include('src/includes/footer.php')
?>		
