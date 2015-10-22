

<?php get_header(); ?>  

  <div class="container">
    <div class="row">
        <section class="summary twelve columns">
          <img src="<?php echo get_template_directory_uri(); ?>/img/homeicon.jpeg">
          <h1>GRAPHIC AND WEB DESIGN</h1>
          <p>Hi there. I'm a print and web designer who can write and edit. I'm the all-in-one package you need when there's not much time on your hands in a world where one-trick ponies are increasingly useless. My mission is to craft exciting, persuasive content, whether that's a beautiful poster design, call-to-action copy or a slick website. Read more about my skills and work below. </p>
          <ul>
            <li>
              <a href="#content">
                <span class="fa-stack fa-1x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-pencil fa-stack-1x"></i>
              </span>
                <h3>CONTENT</h3>
              </a>
            </li>
            <li>
              <a href="#graphics">
                <span class="fa-stack fa-1x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-paint-brush fa-stack-1x"></i>
              </span>
                <h3>GRAPHICS</h3>
              </a>
            </li> 
            <li>
              <a href="#web">
                <span class="fa-stack fa-1x">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-code fa-stack-1x"></i>
              </span>
                <h3>WEB</h3>
              </a>
            </li>
          </ul>

        </section>
    </div><!--end row-->

    <hr>
    <div class="row">
      <h2>WORK</h2>
      <a name="work"></a>
      <section class="twelve columns">

      <?php echo do_shortcode('[ngg_images gallery_ids="1" display_type="photocrati-nextgen_basic_thumbnails"]'); ?>
    
      </section><!--end portfolio-->

    </div><!--end row-->
    <hr>
    <div class="row">
      <h2>SKILLS</h2>
      <a name="skills"></a>
      <section class="skills twelve columns">
        <div class="skill-detail four columns">
          <a name="content"></a>
          <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-pencil fa-stack-1x"></i>
              </span>
          <h3>CONTENT</h3>
          <p>With several roles in publishing editorial and communications behind me, I know how to make a message clear, consistent and accurate. I've crafted compelling copy for insurance companies, homestay businesses and financial publishers. I'm used to coordinating difficult projects. Working with me is a jargon-free experience.</p>
          <ul>
            <li class="skill">Writing</li>
            <li class="skill">Editing</li>
            <li class="skill">Proofing</li>
          </ul>
        </div>

        <div class="skill-detail four columns">
          <a name="graphics"></a>
          <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-paint-brush fa-stack-1x"></i>
              </span>
          <h3>GRAPHICS</h3>
          <p>I have extensive experience with Photoshop, Illustrator and InDesign, which means I can create everything from painterly artwork to scaleable vector graphics and sophisticated page layouts. I've worked both in-house and as a freelancer, designing eye-catching adverts, posters, logos, sponsorship proposals and marketing materials. </p>
          <ul>
            <li class="skill">Photoshop</li>
            <li class="skill">Illustrator</li>
            <li class="skill">InDesign</li>
          </ul>
        </div>

        <div class="skill-detail four columns">
          <a name="web"></a>
          <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-code fa-stack-1x"></i>
              </span>
          <h3>WEB</h3>
          <p>This site means I can code, too. I built this website using HTML5 and CSS3, made it responsive, and then married it up with Wordpress, the most popular content management system in the world, dipping into some PHP in the process. I'm learning JavaScript, and all I can about developing web technologies. </p>
          <ul>
            <li class="skill">HTML5</li>
            <li class="skill">CSS3</li>
            <li class="skill">Wordpress</li>
          </ul>
        </div>

      </section>
    </div><!--end row-->
    <hr>

    <section class="contact-details">
      <div class="row">
        <div class="twelve columns">
          <h2>CONTACT</h2>
          <p>Intrigued? Get in touch!</p>
          <a name="contact"></a>
        </div><!--end twelve columns-->
      </div><!--end row-->

        <div class="row">
          <div class="six columns">
              <a href="tel:00447548282074">
                <span class="fa-stack fa-2x">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-phone fa-stack-1x"></i>
                </span>
                <p>+447548282074</p>
             </a>
          </div><!--end six columns-->
          
          <div class="six columns">
            <a href="mailto:natalie@nataliejdixon.com">
              <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-stack-1x"></i>
              </span>
              <p>natalie@nataliejdixon.com</p>
            </a>
          </div><!--end six columns-->
        </div><!--end row-->
      </section><!--end section-->

  </div><!--end container-->

<?php get_footer(); ?>  <!--Wordpress PHP function-->