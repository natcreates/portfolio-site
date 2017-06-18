<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Natalie Dixon: Web Designer & Developer</title>
  <meta name="description" content="Portfolio site for London web designer and developer Natalie Dixon">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

  <!--Scripts-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-custom.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="img/favicon.png">

<?php wp_head(); ?> <!-- //Wordpress function to allow admin drop-down -->
</head>
<body>

  <!-- HEADER
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<header class="nd-site-header">
  <div class="container">
    <div class="row">
        <div class="six columns">
            <h1 class="nd-site-header__title">
              <a href="<?php bloginfo('url'); ?>">Natalie Dixon <span class="nd-site-header__title-tag">| Designer & Developer</span></a>
            </h1>
        </div><!--end column-->

        <nav class="six columns nd-site-header__nav">
          <div class="nd-site-header__nav-icon"></div>
          <?php wp_nav_menu( array('theme_location' => 'header-menu', 'container_class' => 'menu' ) ); ?>
           
        </nav>
      </div><!--end row-->
    </div><!--end container-->
</header> 
