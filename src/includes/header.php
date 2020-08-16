<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Neil McGrath | Web Developer <?php if ($thisPage!="index")echo " - $thisPage"; ?> </title>
    <?php
    define('cdnURL', 'https://cdn.neiljoshua.dev/');
    ?>

    <meta name="description" content=" Web Developer <?php if ($thisPage!="index") echo " - $thisPage"; ?> | Neil McGrath" >
    <meta name="keywords" content="front end developer, web developer, progressive websites, responsive websites, mobile first, html, css, javascript, jQuery, vue.js, apache, web technologies, websites, investing">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="<?php echo cdnURL ?>images/favicon/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="<?php echo cdnURL ?>styles.css">
    <script type='text/javascript'>
            var cdnURL = '<?php echo cdnURL ?>';
    </script>
    <script async src="<?php echo cdnURL ?>jquery.bundle.js"></script>
    <script src="<?php echo cdnURL ?>main.bundle.js"></script>
  </head>
  <body>
    <div <?php if ($thisPage=="index") {
      echo "class=\"wrapper home\"";
    } else {
      echo "class=\"wrapper $thisPage\"";
    }
    ?> >
      <header>
        <a class="logo" href="/" rel="noopener">
          <?php if ($thisPage=="projects" || $thisPage=="project")  {
            include('../src/includes/turtle.php');
          } else {
            include('./src/includes/turtle.php');
          }
          ?>
        </a>
        <a  href="/" class="hamburger hamburger--rot" rel="noopener"><span>Toggle Menu</span>
        </a>
      </header>
      <main>
