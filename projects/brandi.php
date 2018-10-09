<?php $thisPage="projects"; ?>
<?php
  include('../src/includes/header.php')
?>
<?php include('../src/includes/navigation.php')
?>

    <div class="project-title">
      <h1 class="project-title__text">Brandi</h1>
    </div>

    <div class="button">
      <a class="button__link" href="/projects">Back to Projects</a>
      <a class="button__link" href="http://www.brandi.neiljoshua.com" target="_blank">View Project</a>
    </div>

    <div class="project-row">

      <div class="project-image">
        <a class="project-image__link" href="http://www.brandi.neiljoshua.com" target="_blank" >
          <img class="project-image__img" src="../src/images/projects/brandi.jpg" alt="Brandi" >
        </a>
       </div>

      <div class="project-copy">
          <h2 class="project-copy__title">Technologies</h2>
          <ul class="project-copy__list">
            <li class="project-copy__item">Single page design</li>
            <li class="project-copy__item">Responsive</li>
            <li class="project-copy__item">HMTL5</li>
            <li class="project-copy__item">CSS3</li>
            <li class="project-copy__item">JavaScript</li>
            <li class="project-copy__item">AJAX</li>
            <li class="project-copy__item">JSON</li>
          </ul>
      </div>

    </div>
  </main>

<footer class="footer">
<?php
  include('../src/includes/footer.php')
?>
