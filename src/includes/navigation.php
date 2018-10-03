<div class="menu">
  <ul class="menu__list">
    <li class="menu__item" <?php if ($thisPage=="projects") echo "id=\"currentpage\""; ?>>
      <a class="menu__link" href="/projects" data-color="#5C415D">Projects</a>
    </li>
    <li class="menu__item" <?php if ($thisPage=="about") echo "id=\"currentpage\"";?>>
      <a class="menu__link" href="/about" data-color="#1789FC">About</a>
    </li>
    <li class="menu__item"<?php if ($thisPage=="contact") echo "id=\"currentpage\"";?>>
      <a class="menu__link" href="/contact" data-color="#F4442E">Contact</a>
    </li>
  </ul>
</div>
