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

<div class="site-content">	

	<div class="hero contact-hero">
		<h1 class="center"> Drop me a line!</h1>
	</div>	
	
	<section>
		<form id="inquiry" class="contact-form">
			<fieldset>
				<input type="text" name="first-name" placeholder="First Name">
				<input type="text" name="last-name" placeholder="Last Name">
			</fieldset>
			<fieldset>
				<input type="text" name="email" placeholder="Email">
				<input type="text" name="phone" placeholder="Phone">
			</fieldset>
			<textarea> </textarea>
			<button>Submit</button>
		</form>
	</section>	
</div> 
<footer class="portfolio-footer">
<?php
	include('src/includes/footer.php')
?>		
