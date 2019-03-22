  <?php $thisPage="projects"; ?>
  <?php
    include('../static/includes/header.php')
  ?>
    <?php include('../static/includes/navigation.php')
    ?>

    <div class="project-title">
      <h1 class="project-title__text">Photology</h1>
    </div>

    <div class="button">
      <a class="button__link" href="/projects/">Back to Projects</a>
      <a class="button__link" href="https://photology.neiljoshua.dev/" target="_blank">View Project</a>
    </div>

    <div class="project-row">

      <div class="project-image">
        <a class="project-image__link" href="http://photology.neiljoshua.com/" target="_blank" >
          <img class="project-image__img" src="../static/images/projects/photology.jpg" alt="Photology" >
        </a>
       </div>

      <div class="project-copy">
          <h2 class="project-copy__title">Technologies</h2>
          <ul class="project-copy__list">
            <li class="project-copy__item">Ruby On Rails</li>
            <li class="project-copy__item">Turbolinks</li>
            <li class="project-copy__item">Haml</li>
            <li class="project-copy__item">Responsive</li>
            <li class="project-copy__item">HMTL5</li>
            <li class="project-copy__item">CSS3</li>
            <li class="project-copy__item">MySQL</li>
            <li class="project-copy__item">CoffeeScript</li>
          </ul>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../static/includes/footer.php')
?>
