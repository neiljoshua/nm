<?php $thisPage="index"; ?>

<?php include('src/includes/header.php')
?>
  <?php include('src/includes/navigation.php')
  ?>
  <div class="home__hero">
    <div class="home-info">
      <h1 class="home-info__title"> Neil McGrath</h1>
      <p class="home-info__copy"> Web Developer</p>
    </div>
  </div>
  <div class="slider">
    <div class="slider__slide">
      <img class="source" src="/dist/images/slider/slide1.jpg" alt="Photology Project">
      <p class="slider__copy">Photology</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/dist/images/slider/slide2.jpg" alt="San Isisdro Project">
      <p class="slider__copy">San Isidro</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/dist/images/slider/slide3.jpg" alt="Brandi Project">
      <p class="slider__copy">Brandi</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/dist/images/slider/slide4.jpg" alt="Tarapoto Project">
      <p class="slider__copy">Tarapoto</p>
    </div>
  </div>
</main>
<footer class="hidden">
<?php
    include('src/includes/footer.php')
?>
