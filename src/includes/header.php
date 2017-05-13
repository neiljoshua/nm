<!DOCTYPE html>
<html>
	<head>
		<title>Neil Joshua Web Developer <?php if ($thisPage!="")echo " | $thisPage"; ?> </title>
		<meta name="title" content="Neil Joshua <?php if ($thisPage!="") echo " | $thisPage"; ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="src/css/styles.css">
		<link rel="stylesheet" type="text/css" href="vendors.css">
		<script src="plugins.min.js"></script>
		<script src="nm.min.js"></script>
	</head>
	<body <?php if ($thisPage=="index") echo " class=\"home\"";?>>

		<div class="wrapper">
			<a  id="logo" <?php if ($thisPage=="portfolio") echo " class=\"dark-logo\""; ?> href="/">N</a>
			<a  href="#" class="c-hamburger <?php if ($thisPage=="index" OR $thisPage=="portfolio") echo "dark-burger"; ?> c-hamburger--rot"  > <span>toggle menu</span> </a> 
	