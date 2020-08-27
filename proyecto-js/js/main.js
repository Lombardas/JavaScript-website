
$(document).ready(function(){

if(window.location.href.indexOf('index') > -1)
{
	// slider
	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });
}

if(window.location.href.indexOf('index') > -1)
{
	//Posts
	var posts = [
		{
			title : 'Title test 1',
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Massa tempor nec feugiat nisl pretium. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Dui vivamus arcu felis bibendum ut. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Consectetur adipiscing elit ut aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et."
		},
		{
			title : 'Title test 2',
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Massa tempor nec feugiat nisl pretium. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Dui vivamus arcu felis bibendum ut. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Consectetur adipiscing elit ut aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et."
		},
		{
			title : 'Title test 3',
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Massa tempor nec feugiat nisl pretium. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Dui vivamus arcu felis bibendum ut. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Consectetur adipiscing elit ut aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et."
		},
		{
			title : 'Title test 4',
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Massa tempor nec feugiat nisl pretium. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Dui vivamus arcu felis bibendum ut. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Consectetur adipiscing elit ut aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et."
		},
		{
			title : 'Title test 5',
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Massa tempor nec feugiat nisl pretium. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Dui vivamus arcu felis bibendum ut. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Consectetur adipiscing elit ut aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et."
		}
	];


	//console.log(posts);

	posts.forEach((item,index) => {
		var post = `
				<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
				${item.content}
				</p>
				<a href="#" class="button-more">Read more</a>
				</article>
		`;

		$("#posts").append(post);

	});
}// end if posts

//Selector de theme

var theme = $("#theme");

$("#to-green").click(function(){

	theme.attr("href","css/green.css");
});
$("#to-red").click(function(){

	theme.attr("href","css/red.css");
});
$("#to-blue").click(function(){

	theme.attr("href","css/blue.css");
});


//scroll up
$(".subir").click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop:0
	},500);
	return false;
});

//login falso

$("#login form").submit(function(){

	var form_name = $("#form_name").val();
	localStorage.setItem("form_name",form_name);
});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != undefined){

	var about_parrafo = $("#about p");

	about_parrafo.html("<br><strong>Welcome, "+ form_name +"</strong> ");
	about_parrafo.append("<a href='#' id='logout'>Log out</a>");

	$("#login").hide();

	$("#logout").click(function(){

		localStorage.clear();
		location.reload();
	});
}

$("#acordeon").accordion();
if(window.location.href.indexOf('about') > -1)
{
	$("#acordeon").accordion();
}

//validacion

if(window.location.href.indexOf('contact') > -1)
{
	
	$("form input[name='date']").datepicker({

		dateFormat: 'dd-mm-yy'
	});

	$.validate({
		lang : 'es',
	});
}



}); // end ready