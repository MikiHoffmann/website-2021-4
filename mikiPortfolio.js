// script for mikihoffmann.amsterdam
// miki hoffmann | 2021-4
/* menu for the pages on index.html
    script in html: $(document).ready(function) {
    $("menuButtons").makeMenuForPage("pages", "pagesContent")
}) */
$.fn.makeMenuForPage = (function(pages,contents) {
    // get content
    var $menus = this,
        $pages = $(pages),
        $contents = $(contents);
    // if menubuttons and pages are not equal in number
    if ($menus.length !== $pages.length) throw new console.error('menus length must be equal to pages length');
    // set default
    $menus.first().addClass('activeMenu first');
    $menus.last().addClass('last');
    $pages.first().css('height', '100%');
    // click the menubutton
    $menus.each(function(i, menuButton) {
        var $menuButton = $(menuButton),
            $page = $($pages[i]);
        $menuButton.click(function() {
            // switch active menubutton
            $menus.removeClass('activeMenu');
            $menuButton.addClass('activeMenu');
            $pages.css('height', '0%');
            $page.css('height', '100%').animate({
                // scroll the content back up
                scrollTop: $contents.offset({top: '6em'})
            });
        });
        // back to top button
        $('.backToTop').click(function() {
            $page.animate({
                // scroll the content back up
                scrollTop: $page.offset().top
            }, 1200);
        });
    });
});
// set footer content for each page
$(document).ready(function() {
    $('.footer').html('<p>follow me on <a href="https://www.facebook.com/MikiHoffmanndesigns" target="_blank">facebook</a>' +
    ' or <a href="https://www.instagram.com/miki_hoffmann_designs/" target="_blank">instagram</a>' +
    '<br><br>let\'s connect on <a href="https://www.linkedin.com/in/miki-hoffmann/" target="_blank">linkedin</a></p>'+
    '<hr/><p>this website is designed by miki | 2021' +
    '<br><br><a href="https://www.mikihoffmann.amsterdam" target="_blank">www.mikihoffmann.amsterdam</a>');
});
// gallery
// images for gallery
function $images(id,name,url) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.setImages = setImages;
}
var $image = new Array();
$image[0] = new $images("01", "orange sleeve", "orangeSleeve.jpg");
$image[1] = new $images("12", "cancan torso", "cancanTorso.png");
$image[2] = new $images("03", "blazer in progress", "blazerInProgress.png");
$image[3] = new $images("04", "cordoroy jacket 2016", "cordoroy2016.png");
$image[4] = new $images("05", "'dutch pink' shirt", "dutchPinkShirt.png");
$image[5] = new $images("07", "inside pocket", "insidePocket.png");
$image[6] = new $images("08", "kilt", "kilt.png");
$image[7] = new $images("09", "'kitchen table' shirt", "kitchenTableShirt.png");
$image[8] = new $images("10", "milkshake outfit", "milkshakeOutfit.png");
$image[9] = new $images("11", "newyearseve dress", "newyearseveDress.png");
$image[10] = new $images("12", "orange lace blazer", "orangeBlazer.jpg");
$image[11] = new $images("12", "pride glitter shirt", "prideGlitterShirt.png");
$image[12] = new $images("12", "red glitter gilets", "redGlitterGilets.png");
$image[13] = new $images("12", "sinterklazen Montmartre", "sinterklazenMontmartre.png");
$image[14] = new $images("12", "sleeve sewing", "sleeveSewing.png");
// template image container
var $imageTemplate = '<figure class="imageContainer hasBackground"><img src="../mikiPortfolio2021-4/mikiPortfolioImages/gallery/\'{{url}}\'"/>'+
                    '<figcaption class="imageCaption">\'{{cap}}\'</figcaption></figure>';
// set images in container
function setImages() {
    var $imagesContainer = [];
    // set all images in container
    for (let i = 0; i < $image.length; i++) {
        var $imageContainer = $imageTemplate;
        $imageContainer = $imageContainer.replace('\'{{url}}\'', $image[i].url);
        $imageContainer = $imageContainer.replace('\'{{cap}}\'', $image[i].name);
        $imagesContainer.push($imageContainer);
        $('#galleryContainer').html($imagesContainer);
    }
    // gallery slides
    var $sliders = $('#galleryContainer');
    $sliders.cycle({
        fx: 'scrollHorz',
        speed: 170,
        height: $sliders.height(),
        width: $sliders.width(),
        fit: true
    });
    // vav buttons
    $('.continueButtons').css('display', 'none');
    $('#pauseButton').click(function() {
        $('.continueButtons').css('display', 'block');
        $('.pauseButtons').css('display', 'none');
        $sliders.cycle('pause');
    });
    $('#continueButton').click(function() {
        $('.continueButtons').css('display', 'none');
        $('.pauseButtons').css('display', 'block');
        $sliders.cycle('resume');
    });
    $('#navLeft').click(function() {
        $sliders.cycle('prev');
    });
    $('#navRight').click(function() {
        $sliders.cycle('next');
    });
};
//iFrame
$.fn.makeIFrame = (function() {
    // iFrame links
    $('.frameLink').click(function() {
        $('#iFrameContainer').css('height', '100%');
    });
    $('#iFrameClose').click(function() {
        $('#iFrameContainer').css('height', '0%');
    });
});
