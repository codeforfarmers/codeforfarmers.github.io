$(function(){
	$("a.twitter").attr("href", "https://twitter.com/intent/tweet?url="+ window.location.host + "&text=Code For Farmers&via=codeforfarmers");
	$("a.facebook").attr("href", "https://facebook.com/sharer.php?u="+ window.location.host);
	$("a.linkedin").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url="+ window.location.host +"&title=Code For Farmers&summary=Code For Farmers&source=codeforfarmers");
});