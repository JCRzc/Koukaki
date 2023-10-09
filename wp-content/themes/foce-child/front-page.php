<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <div class="background-video">
                <video autoplay loop muted>
                    <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/Studio_Koukaki_video.mp4'; ?>" type="video/mp4">
                </video>
            </div>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class="floating-title" 
            data-0="top:0px" data-600="top:-500px"> 
        </section>
        <section id="#story" class="story">
            <h2>
                <span class="h2-contain">
                    <span class="story-h2">L'histoire</span>
                </span>
            </h2>
            <span class="observe-story"></span>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <!-- template-parts characters -->
            <?php get_template_part('template-parts/sectionCharacters') ?>
            </article>
            <article id="place">
                <div>
                    <h3>Le lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <img class="bigCloud cloud"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png';?>" alt="gros nuage"
                data-anchor-target="#place"
                data--0-bottom-top="transform: translateX(0px);"
                data-150-top="transform: translateX(300px);">
                <img class="littleCloud cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png';?>" alt="petit nuage"
                data-anchor-target="#place"
                data--0-bottom-top="transform: translateX(0px);" 
                data-100-top="transform: translateX(300px);">
            </article>
        </section>


        <section id="studio">
            <h2>
                <span class="h2-contain">
                    <span class="studio-h2 stepOne">Studio</span> <span class="studio-h2 stepTwo">Koukaki</span>
                </span>
            </h2>
            <span class="observe-studio"></span>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
            <!-- template-parts oscar -->
            <?php get_template_part( 'template-parts/sectionNomination' ); ?>
    </main><!-- #main -->

<?php
get_footer();
