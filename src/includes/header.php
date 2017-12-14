<!DOCTYPE html>
<html>
	<head>
		<title>Neil McGrath | Web Developer <?php if ($thisPage!="index")echo " - $thisPage"; ?> </title>
		<meta name="title" content=" Web Developer <?php if ($thisPage!="index") echo " - $thisPage"; ?> | Neil McGrath" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="viewport" content="width=device-width, user-scalable=no"/>
		<link rel="shortcut icon" href="/src/images/favicon/nm.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="/src/css/styles.css">
		<link rel="stylesheet" type="text/css" href="/vendors.css">
		<script src="/plugins.min.js"></script>
		<script src="/nm.min.js"></script>
		<script type="text/javascript" src="/src/js/plugins/slick.min.js"></script>
	</head>
	<body <?php if ($thisPage=="index") {
			echo "class=\"home\"";
		} else {
			echo "class=\"$thisPage\"";
		}?>>

		<div class="wrapper">
			<header>
				<a class="logo <?php if ( $thisPage=="index" ) echo "logo--white"; ?>" href="/" >
					<i class="logo__icon icon-home-circled"></i>
				</a>
				<a  href="#" class="c-hamburger <?php if ($thisPage=="index") echo "white-burger"; ?> c-hamburger--rot"  > 	<span>toggle menu</span>
				</a>
			</header>

