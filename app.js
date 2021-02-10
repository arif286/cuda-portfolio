$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});
  
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
}).trigger('scroll');
  

//event listener

document.getElementById('web-btn').addEventListener('click', () => {
    const app = document.getElementById('app');
    app.style.display = 'none'
    const icon = document.getElementById('icon');
    icon.style.display = 'none'
    displayAllWeb();
})

document.getElementById('app-btn').addEventListener('click', () => {
    hideAllDiv();
    const web = document.getElementById('web');
    web.style.display = 'none'
    displayAppIcon();
    
})

document.getElementById('icon-btn').addEventListener('click', () => {
    hideAllDiv();
    displayAppIcon();
    const web = document.getElementById('web');
    web.style.display = 'block'
})

document.getElementById("all-btn").addEventListener('click', () => {
    displayAllWeb();
    displayAppIcon();

})

const hideAllDiv = () => {
    const all = document.getElementById('all');
    all.style.display = 'none'
}

const displayAllWeb = () => {
    const all = document.getElementById('all');
    all.style.display = 'block'
    const web = document.getElementById('web');
    web.style.display = 'block'
}

const displayAppIcon = () => {
    const app = document.getElementById('app');
    app.style.display = 'block'
    const icon = document.getElementById('icon');
    icon.style.display = 'block'
}