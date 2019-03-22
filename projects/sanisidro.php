    <?php $thisPage="projects"; ?>
    <?php
      include('../static/includes/header.php')
    ?>

    <?php include('../static/includes/navigation.php')
    ?>

    <div class="project-title">
      <h1 class="project-title__text" >San Isidro</h1>
    </div>

    <div class="button">
      <a class="button__link" href="/projects/"> Back to Projects</a>
      <a class="button__link" href="https://sanisidro.neiljoshua.dev" target="_blank">View Project</a>
    </div>

    <div class="project-row">

      <div class="project-image">
          <a class="project-image__link" href="http://sanisidro.neiljoshua.com" target="_blank" >
            <img class="project-image__img" src="../static/images/projects/sanisidro.jpg" alt="San Isidro" >
          </a>
        </div>

        <div class="project-copy">
          <h2 class="project-copy__title">Technologies</h2>
          <ul class="project-copy__list">
            <li class="project-copy__item">WordPress</li>
            <li class="project-copy__item">Ajax</li>
            <li class="project-copy__item">JSON</li>
            <li class="project-copy__item">Timber</li>
            <li class="project-copy__item">ACF</li>
            <li class="project-copy__item">PHP</li>
            <li class="project-copy__item">jQuery</li>
            <li class="project-copy__item">Sass</li>
            <li class="project-copy__item">HTML5</li>
        </ul>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../static/includes/footer.php')
?>
