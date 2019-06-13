<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Neil McGrath | Web Developer <?php if ($thisPage!="index")echo " - $thisPage"; ?> </title>
    <meta name="description" content=" Web Developer <?php if ($thisPage!="index") echo " - $thisPage"; ?> | Neil McGrath" >
    <meta name="keywords" content="front end developer, web developer, progressive websites, responsive websites, mobile first, html, css, javascript, jQuery, vue.js, apache, web technologies, websites, investing">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/static/images/favicon/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/dist/styles.css">

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
            include('../static/images/icons/turtle.php');
          } else {
            include('static/images/icons/turtle.php');
          }
          ?>
        </a>
        <a  href="/" class="hamburger hamburger--rot" ><span>Toggle Menu</span>
        </a>
      </header>
      <main>
