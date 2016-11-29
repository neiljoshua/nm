<?php
	include('src/includes/header.php')
?>
<header class="portfolio-nav">
	<nav class="site-nav "> 
		<ul>
			<li><a href="portfolio">Portfolio</a></li>
		    <li><a href="about">About</a></li>
		    <li><a href="contactpage">Contact</a></li>
		</ul>
	</nav>		
</header>	
<div class="site-content contact">	

	<h2>Drop me a line!</h2>
	<form id="contact-form" class="contact-form" action="contact.php" method="post">
		<label for="name">Name:
			<input  name="user_name" type="text" id="name" placeholder="John Smith" required />
		</label>
		<label for="email">Email:
			<input name="user_email" type="text"  id="email" placeholder="johnsmith@example.com" required />
			<p class="error">Invalid Email</p>
		</label>
		<label for="message">Message:
			<input name="user_message" type="text"  id="message" placeholder="Say Hello!" required />
		</label>
		<button type="submit"> Submit </button>
	</form>
	<div class="success">
		<p>Thank You!</p>
		<button class="close-success">Close</button>
	</div>   

</div> 
<footer class="portfolio-footer">
<?php
	include('src/includes/footer.php')
?>		
