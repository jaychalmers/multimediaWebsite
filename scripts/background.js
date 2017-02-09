/* COOKIE SETUP */
function set_cookie ( cookie_name, cookie_value, lifespan_in_days){
	document.cookie = cookie_name + "=" + cookie_value + "; max-age=" + (60*60*24* lifespan_in_days) + ";";
}

function get_cookie ( cookie_name )
{
  // http://www.thesitewizard.com/javascripts/cookies.shtml
  var cookie_string = document.cookie ;
  if (cookie_string.length != 0) {
    var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
    return decodeURIComponent ( cookie_value[2] ) ;
  }
  return '' ;
}

/*BACKGROUND CONTROL */

function set_dark() {
	set_cookie("bg", "dark", 30);
	
	var page = document.getElementById("all");
	page.style.background = '#0d0d0c';
	var container = document.getElementById("container");
	container.style.border = '1px solid #353531';
}

function set_light() {
	set_cookie("bg", "light", 30);
	var page = document.getElementById("all");
	page.style.background = '#f4f2f0';
	var container = document.getElementById("container");
	container.style.border = '1px solid black';
}

var myBackground = get_cookie("bg");

if (myBackground == "dark"){
	set_dark();
}
else{
	set_light();
}