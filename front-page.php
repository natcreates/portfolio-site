

<?php get_header(); ?>  
<main role="main">
  <div class="container">
    <div class="row">
      <section>
          <div class="ten columns offset-by-one column summary">
           <img class ="homepage" src="<?php echo get_template_directory_uri(); ?>/img/homeicon.jpeg" alt="designing illustration">
           <div class="headline">
            <h2>Natalie Dixon</h2>
            <h1><span class="designer">Web Designer</span> <br>& FRONT-END DEVELOPER</h1>
            <h3 class="strapline">Crafts code, doesn't talk in it.</h3>
          </div>
        </div>
      </section>
    </div><!--end row-->
    <div class="row">
       <div class="twelve columns intro">
          <p>I'm a London-based web designer, developer and writer. By day I work in a UX-driven, CSS-heavy and UI design-focussed role (I'm not currently seeking freelance work); other hours find me writing or drawing, usually to psytrance. I love people, design and CSS (and I'm starting to love JavaScript, too). 
</p>
          <!--<p class="calltoaction">Let's give your ideas a voice and a platform. <a href="#contact">Hire me.</a></p>-->
        </div>
    </div><!--end row-->
    <div class="row">
      <div class="eight columns">
         <blockquote>As a small business we wanted a website that would be beautiful, easy-to-use and express who we were. Natalie made this happen for us. We are so happy!!<cite>--Amber Cassidy, <a href="http://www.barneysbubble.com">www.barneysbubble.com</a></cite></blockquote>
      </div>
      <div class="four columns">
         <p class="download">See my experience.<a href="<?php echo get_template_directory_uri(); ?>/files/NatalieDixon_CV_2015WEB.pdf" target="_blank">Download my CV.</a></p>
      </div>
    </div>

    <hr>
    <div class="row">
      <h2>SKILLS</h2>
      <a id="skills"></a>
      <section class="skills twelve columns">

      <div class="skill-detail four columns">
          <a id="web"></a>
          <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
               <i class="fa fa-code fa-stack-1x"></i>
              </span>
          <h3>CODE</h3>
          <p>I build responsive, device-agnostic websites that make sense to visitors, search engines and you. Because I build over content management systems like WordPress, you'll find updating your site a breeze. I can breathe life into an existing design, or work with you to create one that's aligned with your brand and your customers' needs.</p>
          <ul>
            <li class="skill">HTML5</li>
            <li class="skill">CSS3</li>
            <li class="skill">WordPress</li>
          </ul>
        </div>

        <div class="skill-detail four columns">
          <a id="content"></a>
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
          <a id="graphics"></a>
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

      </section>
    </div><!--end row-->
    <hr>

    <section id="recent-projects">
    <a id="work"></a>
      <h2>Recent Projects</h2>

      <div class="row"> 
      <article class="six columns">
        <figure>
          <img src="<?php echo get_template_directory_uri(); ?>/img/BarneysBubblehome.png" alt="Barney's Bubble website screenshot">
          <figcaption class="mouse-tap-overlay">
          <div class="project-info">
            <a href="http://www.barneysbubble.com">
            <h3>Barney's Bubble</h3>
              <p>Design to WordPress custom theme</p>
              <button>See live</button>
              <ul>
                <li class="skill-tag">HTML5</li>
                <li class="skill-tag">CSS3</li>
                <li class="skill-tag">Illustrator</li>
                <li class="skill-tag">Design</li>
                <li class="skill-tag">WordPress</li>
                <li class="skill-tag">SASS</li>
                <li class="skill-tag">Responsive</li>
              </ul>
            </a>
          </div>
          </figcaption>
        </figure>
      </article>

      <article class="six columns">
        <figure>
          <img src="<?php echo get_template_directory_uri(); ?>/img/jennystarkscreenshot.png" alt="Jenny Stark website screenshot">
          <figcaption class="mouse-tap-overlay">
          <div class="project-info">
            <a href="<?php echo get_template_directory_uri(); ?>/files/about.html">
            <h3>Jenny Stark: portfolio</h3>
              <p>Responsive design and build</p>
              <button>See prototype</button>
              <ul>
                <li class="skill-tag">HTML5</li>
                <li class="skill-tag">CSS3</li>
                <li class="skill-tag">SASS</li>
                <li class="skill-tag">Design</li>
                <li class="skill-tag">Responsive</li>
              </ul>
            </a>
          </div>
          </figcaption>
        </figure>
      </article>

      </div>

    <div class="row"> 
      <article class="six columns">
        <figure>
          <img src="<?php echo get_template_directory_uri(); ?>/img/mybossthemusescreenshot.png" alt="My Boss the Muse website screenshot">
          <figcaption class="mouse-tap-overlay">
          <div class="project-info">
            <a href="http://www.mybossthemuse.com">
            <h3>My Boss the Muse</h3>
              <p>PSD to WordPress blog</p>
              <button>See live</button>
              <ul>
                <li class="skill-tag">PSD to HTML5</li>
                <li class="skill-tag">CSS3</li>
                <li class="skill-tag">SASS</li>
                <li class="skill-tag">WordPress</li>
              </ul>
            </a>
          </div>
          </figcaption>
        </figure>
      </article>

      <article class="six columns">
        <figure>
          <img src="<?php echo get_template_directory_uri(); ?>/img/homescreenshot.png" alt="homepage screenshot">
          <figcaption class="mouse-tap-overlay">
          <div class="project-info">
            <a href="http://www.nataliejdixon.com">
            <h3>Portfolio Site</h3>
              <p>Web Design to custom WordPress theme</p>
              <button>You're looking at it.</button>
              <ul>
                <li class="skill-tag">Design</li>
                <li class="skill-tag">CSS3</li>
                <li class="skill-tag">LESS</li>
                <li class="skill-tag">WordPress</li>
                <li class="skill-tag">Responsive</li>
                <li class="skill-tag">jQuery</li>
              </ul>
            </a>
          </div>
          </figcaption>
        </figure>
      </article>
    </div><!--end row-->
    </section>

  
    <hr>
    </div><!--end container-->
         <h2>And more...</h2>

      <?php echo do_shortcode('[ngg_images gallery_ids="1" display_type="photocrati-nextgen_basic_thumbnails"]'); ?>
    

    <div class="container">

    <hr>

    <section class="contact-details">
      <div class="row">
        <div class="twelve columns">
          <h2>CONTACT</h2>
          <p>Intrigued? Get in touch!</p>
          <a id="contact"></a>
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
  </main>

<?php get_footer(); ?>  <!--Wordpress PHP function-->