Template.layout.is_landing_page = function () {
	return 'landing' == Router.current().route.path();
}


Template.layout.rendered = function(){
    $('body.modal-open').removeClass('modal-open');
}