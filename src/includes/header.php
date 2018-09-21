<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Neil McGrath | Web Developer <?php if ($thisPage!="index")echo " - $thisPage"; ?> </title>
		<meta name="Description" content=" Web Developer <?php if ($thisPage!="index") echo " - $thisPage"; ?> | Neil McGrath" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="/src/images/favicon/nm.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="/dist/css/vendors.css">
		<link rel="stylesheet" type="text/css" href="/dist/css/styles.css">
		<script src="/dist/js/jquery.min.js"></script>
		<script src="/dist/js/plugins.min.js"></script>
		<script src="/dist/js/nm.min.js"></script>
	</head>
	<body>

		<?php include('pre-loader.php')
		?>
		<div <?php if ($thisPage=="index") {
			echo "class=\"wrapper home\"";
		} else {
			echo "class=\"wrapper $thisPage\"";
		}
		?> >
			<header>
				<a class="logo" href="/">
					<?php if ($thisPage=="projects") {
						include('../src/includes/turtle.php');
					} else {
						include('src/includes/turtle.php');
					}
					?>
				</a>
				<a  href="#" class="hamburger hamburger--rot" ><span>Toggle Menu</span>
				</a>
			</header>
			<main>

