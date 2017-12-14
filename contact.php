 <?php $thisPage="Contact"; ?>
<?php
	include('src/includes/header.php')
?>
<?php include('src/includes/navigation.php')
?>

<div class="contact-hero">
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
		<div class="success">
			<p class="success__message center">Thank you for the message!</p>
		</div>
	</form>
</div>

<footer class="footer">
<?php
	include('src/includes/footer.php')
?>
