

<?php get_header(); ?>  
<div class="container blog">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="row">
      <div class="four columns">
        <?php if ( function_exists('has_post_thumbnail') && has_post_thumbnail($post->ID) ) {
        $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), full ); ?>

        <img src="<?php echo $thumbnail[0]; ?>" class="post-thumb" alt=""/>

        <?php }else{ ?>

        <img src="<?php echo get_template_directory_uri(); ?>/img/default.jpg" class="post-thumb" alt="default">

        <?php } ?>
      
      </div><!--end four columns-->
      <div class="blog-content eight columns">
        <h3 class="post-title"><?php the_title(); ?></h3>
  
       <?php the_excerpt(); ?><div class="ellipsis"></div>

      <small><?php the_time('F jS, Y'); ?> by Natalie Dixon</small>
      </div><!--end columns-->
    </div><!--end row-->
    <?php endwhile; else : ?>
    <p><?php _e( 'Sorry, there are no posts to display' ); ?></p>
  <?php endif; ?>
    

  </div><!--end container-->
  
            


<?php get_footer(); ?>  <!--Wordpress PHP function-->