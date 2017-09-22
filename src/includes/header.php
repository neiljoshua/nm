<!DOCTYPE html>
<html>
	<head>
		<title>Neil NcGrath Web Developer <?php if ($thisPage!="")echo " | $thisPage"; ?> </title>
		<meta name="title" content="Neil Joshua <?php if ($thisPage!="") echo " | $thisPage"; ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="viewport" content="width=device-width, initial-scale=1.5">
		<meta name="viewport" content="width=device-width, initial-scale=2">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
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

