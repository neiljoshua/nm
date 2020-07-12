  <?php $thisPage="contact";
  ?>
  <?php
    include('src/includes/header.php')
  ?>
    <?php include('src/includes/navigation.php')
    ?>
    <div class="contact-hero">
      <img class="contact-hero__image" src="<?php echo cdnURL ?>images/contact/macbook.jpg" alt="Contact Neil McGrath - Front End Developer">
    </div>
    <div class="contact-form-container">
      <form id="contact-form" action="/src/includes/sendForm.php" method="POST" >
        <fieldset>
          <input type="text" name="user-name" placeholder="First Name" required>
          <input type="text" name="user-last-name" placeholder="Last Name" required>
        </fieldset>
        <fieldset>
          <input type="text" name="user-email" placeholder="Email" required>
          <input type="text" name="user-phone" placeholder="Phone">
        </fieldset>
        <textarea id="user-message-text" name="user-message" required> </textarea>
        <button class="button" type="submit" form="contact-form" value="submit">Submit</button>
        <div class="message">
          <p class="message__status center">Sending message </p>
          <p class="message__success center">Thank you for the message!</p>
        </div>
      </form>
    </div>
  </main>
<footer class="footer">
<?php
  include('src/includes/footer.php')
?>
