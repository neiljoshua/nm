  <?php $thisPage="projects"; ?>
  <?php
    include('../static/includes/header.php')
  ?>
    <?php include('../static/includes/navigation.php')
    ?>

    <div class="project-title">
      <h1 class="project-title__text" >Weather</h1>
    </div>

    <div class="button">
      <a class="button__link" href="/projects/">Back to Projects</a>
      <a class="button__link" href="https://weather.neiljoshua.dev/" target="_blank">View Project</a>
    </div>

    <div class="project-row">

      <div class="project-image">
          <a class="project-image__link" href="http://weather.neiljoshua.dev/" target="_blank" >
            <img class="project-image__img" src="../static/images/projects/weather.jpg" alt="Weather App" >
          </a>
        </div>

        <div class="project-copy">
          <h2 class="project-copy__title">Technologies</h2>
          <ul class="project-copy__list">
            <li class="project-copy__item">Responsive app</li>
            <li class="project-copy__item">HMTL5</li>
            <li class="project-copy__item">CSS3</li>
            <li class="project-copy__item">jQuery</li>
            <li class="project-copy__item">AJAX</li>
            <li class="project-copy__item">JSON</li>
            <li class="project-copy__item">AccueWeather API</li>
          </ul>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../static/includes/footer.php')
?>
