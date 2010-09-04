  Galleria.loadTheme('galleria/themes/classic/galleria.classic.js');

  var albums = [ 155533561124914 , 155530174458586 , 155643997780537];
  var albumNames = [ "Kids" , "Family" , "Love" ];

  function hideOverlay(cb) {
    $('#overlay').animate({
      'margin-top': '-2000px'
    },500, function() { if(cb) cb(); } );        
  };
  
  function showOverlay(cb) {
    $('#overlay').css('margin-top','-2000px');
    $('#overlay').show();    
    $('#overlay').animate({
      'margin-top': '-50px'
    },500, function() { if(cb) cb(); });    
  };
  
  function showGallery(num) {
    hideOverlay();
    $('#gallery').show();
    var url = 'http://graph.facebook.com/' + albums[num] + '/photos?callback=?';
    $.getJSON(
      url,
      function(data) {
        var photos = [];
        data = $.shuffle(data.data);        
        for(var k in data) {

          var photo = {
            image : data[k].source,
            thumb : null,
            title : data[k].title,
            description : null,
            link : null
          };
          photos.push(photo);
        }

        $('#galleryName').html(albumNames[num]);
        $('#galleryButtons').show();
        $('#shadow').css('opacity','1');        
        showOverlay(); 
        
        $('#galleria').galleria({
          autoplay: true,
          clicknext: true,
          image_crop: 'height',
          transition: 'slide',
          data_source: photos
        });
    });  
  };
  
  function showAboutMe() {
    $('#aboutme').show(); 
    showSubsection("About Me");
  };
  
  function showContact() {
    $('#contact').show();  
    showSubsection("Contact");  
  };
    
  function showPricing() {
    $('#pricing').show();
    showSubsection("Pricing");  
  };
  
  function showSubsection(name) {
    $('#galleryName').html(name);            
    $('#shadow').css('opacity','1');        
    showOverlay();
  }
      
  function closeOverlay() {
    $('#gallery').hide();
    $('#aboutme').hide();
    $('#contact').hide();    
    $('#pricing').hide();        
    $('#galleryButtons').hide();        
    hideOverlay();
  };
  