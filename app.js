/****************jQuery DOM events****************/

//$(document).ready(func) = DOMContentLoaded : JS code run when DOM is ready
$(document).ready(function () {
  console.log("document ready ", Date.now());
});

//$(window).on("load", func): wait for alltheresources to be ready
//= window.addEventListener("load", func)
$(window).on("load", function () {
  console.log("window loaded", Date.now());
});

//jQuery event handler works almost the same as vanilla JavaScript
//$("element/tag").click(function () {})

//this: inside a callback function: retrieve information or tranverse DOM
$("input").change(function (event) {
  console.log(event.which);
  console.log($(this).val()); //get the current valueof  the input
});




/*******visit jQuery DOc : https://api.jquery.com/category/events/ for more event handlers*****/

// $('input').blur(func);	Adds an event handler for the "blur" event. Useful for form input elements or elements that can gain focus, such as anchor links.
// $('input').change(func);	Adds an event handler for the "change" event. "change" event fires immediately for select boxes, check boxes and radio buttons when the user makes a selection with the mouse. For text input elements and others, "change" event only fires when the element looses focus.

// $('button').click(func);	Adds an event handler for the "click" event. You can use it on most elements.

// $('button').dblclick(func);	Adds an event handler for the "dblclick" event (double click).

// $('input').focus(func);	Adds an event handler for the "focus" event. Can be used on elements such as input, textarea, anchor links and other elements that can be gain focus.

// $('img').hover(func);	Mimics a CSS hover behaviour. Adds one event handler for "mouseenter" and one event handler for "mouseleave". Great for initiating simple animations.

// $(window).keydown(func);	Adds an event handler for the "keydown" event.

// $(window).keyup(func);	Adds an event handler for the "keyup" event.

// $(window).load(func);	Adds an event handler for the "load" event.

// $('img').mousedown(func);	Adds an event handler for the "mousedown" event.

// $('img').mouseenter(func);	Adds an event handler for the "mouseenter" event.

// $('img').mouseleave(func);	Adds an event handler for the "mouseleave" event.

// $(document).mousemove(func);	Adds an event handler for the "mousemove" event.

// $('img').mouseout(func);	Adds an event handler for the "mouseout" event.

// $('img').mouseover(func);	Adds an event handler for the "mouseover" event.

// $('img').mouseup(func);	Adds an event handler for the "mouseup" event.

// $('div').scroll(func);	Adds and event handler for the "scroll" event.



