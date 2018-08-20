<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Neil McGrath | Web Developer <?php if ($thisPage!="index")echo " - $thisPage"; ?> </title>
		<meta name="Description" content=" Web Developer <?php if ($thisPage!="index") echo " - $thisPage"; ?> | Neil McGrath" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="/src/images/favicon/nm.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="/src/css/styles.css">
		<link rel="stylesheet" type="text/css" href="/vendors.css">
		<script src="/plugins.min.js"></script>
		<script src="/nm.min.js"></script>
		<script src="/src/js/plugins/slick.min.js"></script>
	</head>
	<body <?php if ($thisPage=="index") {
			echo "class=\"home\"";
		} else {
			echo "class=\"$thisPage\"";
		}?>>

		<?php include('pre-loader.php')
		?>
		<div class="wrapper">
			<header>
				<a class="logo <?php if ( $thisPage=="index" ) echo "logo--white"; ?> icon-home-circled" href="/" >
				</a>
				<a  href="#" class="c-hamburger <?php if ($thisPage=="index") echo "white-burger"; ?> c-hamburger--rot"  > 	<span></span>
				</a>
			</header>

