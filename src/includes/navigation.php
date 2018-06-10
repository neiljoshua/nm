<!-- Navigation -->
<div class="menu">

<ul class="menu__list">
	<li class="menu__item" <?php if ($thisPage=="Projects") echo " id=\"currentpage\""; ?>>
		<a class="menu__link" href="/projects">Projects</a>
	</li>
	<li class="menu__item" <?php if ($thisPage=="About") echo " id=\"currentpage\""; ?>>
		<a class="menu__link" href="/about">About</a>
	</li>
	<li class="menu__item"<?php if ($thisPage=="Contact") echo " id=\"currentpage\""; ?>>
		<a class="menu__link" href="/contact">Contact</a>
	</li>
</ul>

</div>
