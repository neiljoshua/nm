<?php $thisPage="projects"; ?>
<?php
  include('../static/includes/header.php')
?>
<?php include('../static/includes/navigation.php')
?>

    <div class="project-title">
      <h1 class="project-title__text">Stocks</h1>
    </div>

    <div class="button">
      <a class="button__link" href="/projects/">Back to Projects</a>
      <a class="button__link" href="http://stocks.neiljoshua.com" target="_blank">View Project</a>
    </div>

    <div class="project-row">

      <div class="project-image">
        <a class="project-image__link" href="http://stocks.neiljoshua.com" target="_blank" >
          <img class="project-image__img" src="../static/images/projects/stocks.jpg" alt="Brandi" >
        </a>
       </div>

      <div class="project-copy">
          <h2 class="project-copy__title">Technologies</h2>
          <ul class="project-copy__list">
            <li class="project-copy__item">Mobile First</li>
            <li class="project-copy__item">HMTL5</li>
            <li class="project-copy__item">Sass</li>
            <li class="project-copy__item">Single page App</li>
            <li class="project-copy__item">Vue</li>
            <li class="project-copy__item">Vuex</li>
            <li class="project-copy__item">Vue Router</li>
            <li class="project-copy__item">Webpack</li>
          </ul>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../static/includes/footer.php')
?>
