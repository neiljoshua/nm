<?php $thisPage="index"; ?>

<?php include('src/includes/header.php')
?>
  <?php include('src/includes/navigation.php')
  ?>
  <div class="home-hero">
    <div class="home--item">
      <h1 class="home--item__title"> Neil McGrath</h1>
      <p class="home--item__copy"> Web Developer</p>
    </div>
  </div>
  <div class="slider">
    <div class="slider__slide">
      <img class="source" src="/src/images/slider/slide1.jpg" alt="Photology Project">
      <p class="slider__copy">Photology</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/src/images/slider/slide2.jpg" alt="San Isisdro Project">
      <p class="slider__copy">San Isisdro</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/src/images/slider/slide3.jpg" alt="Brandi Project">
      <p class="slider__copy">Brandi</p>
    </div>
    <div class="slider__slide">
      <img class="source" src="/src/images/slider/slide4.jpg" alt="Tarapoto Project">
      <p class="slider__copy">Tarapoto</p>
    </div>
  </div>
</main>
<footer class="hidden">
<?php
    include('src/includes/footer.php')
?>
