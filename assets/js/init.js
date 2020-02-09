$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({
        indicators: false
    });
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
	$('.materialboxed').materialbox();
	
	// init Lazy Image Load
	$('.lazy').lazy();
});
