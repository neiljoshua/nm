  <?php $thisPage="project"; ?>
  <?php
    include('../src/includes/header.php')
  ?>
    <?php include('../src/includes/navigation.php')
    ?>

    <div class="project-title">
      <h1 class="project-title__text" >Tarapoto Resort</h1>
    </div>

    <div class="project-row">

      <div class="project-image">
        <a class="project-image__link" href="https://tarapoto.neiljoshua.dev" target="_blank" >
          <img class="project-image__img" src="<?php echo cdnURL ?>images/projects/tarapoto.jpg" alt="Tarapoto Resort" >
        </a>
      </div>

      <div class="project-copy">
        <h2 class="project-copy__title">Technologies</h2>
        <ul class="project-copy__list" >
          <li class="project-copy__item">Animation</li>
          <li class="project-copy__item">SVG</li>
          <li class="project-copy__item">Responsive</li>
          <li class="project-copy__item">HMTL5</li>
          <li class="project-copy__item">Sass</li>
          <li class="project-copy__item">PHP</li>
          <li class="project-copy__item">JavaScript</li>
        </ul>
        <a class="button" href="https://tarapoto.neiljoshua.dev" target="_blank" > Explore </a>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../src/includes/footer.php')
?>
