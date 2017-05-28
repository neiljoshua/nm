<!DOCTYPE html>
<html>
	<head>
		<title>Neil Joshua Web Developer <?php if ($thisPage!="")echo " | $thisPage"; ?> </title>
		<meta name="title" content="Neil Joshua <?php if ($thisPage!="") echo " | $thisPage"; ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="/src/css/styles.css">
		<link rel="stylesheet" type="text/css" href="/vendors.css">
		<script src="/plugins.min.js"></script>
		<script src="/nm.min.js"></script>
		<script type="text/javascript" src="/src/js/plugins/slick.min.js"></script>
	</head>
	<body <?php if ($thisPage=="index") echo " class=\"home\"";?>>

		<div class="wrapper">
			<header>
				<a  id="logo" <?php if ( $thisPage=="index" ) echo " class=\"logo-white\""; ?> href="/"><i class="demo-icon icon-home-circled"></i></a>
				<a  href="#" class="c-hamburger <?php if ($thisPage=="index") echo "white-burger"; ?> c-hamburger--rot"  > 
					<span>toggle menu</span> </a> 
			</header>	
	