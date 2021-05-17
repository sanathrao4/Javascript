/*var x = document.getElementById("test");
x.innerHTML = "hello bro"

function person(name, age) {
	this.name = name;
	this.age = age;
 	this.isAdult = function() {
 		return(this.age >= 18);
	};
 	this.toString = function(){
 		return this.name + " " + this.age;
 	};
};
var y = new person("Sanath",23);
x.innerHTML = y;
var arr = ["asdfmf", "dsfsdfafd","safdsfsd"];
alert(arr[0])
var arr1 = document.getElementById("abc").getElementsByTagName("li");
alert(arr1[0].innerHTML);
var arr = ["asdfmf", "dsfsdfafd","safdsfsd"];
*/


// var x = document.getElementById("abc");




// var x = document.getElementById("xyz");
// x.setAttribute("class","test");
// x.removeAttribute("class");
// alert(x.getAttribute("id"));




// var x = document.getElementById("abc").childNodes[2];
// alert(x);



// var x = document.querySelectorAll("li");
// alert(x[5].innerHTML);            



// var x = document.querySelectorAll("li");
// x[4].style.display = "none";



// var x = document.querySelectorAll("li");
// x[4].style.color = "red";




// var x = document.querySelectorAll("li");
// for (var i in x)
// {
// 	x[i].style.color = "red";
// }


/* 
		MODULE STARTS HERE
var p =document.createElement("p");
p.style.color = "blue";
p.className = "para";
p.innerHTML = "<p id = 'test2'>hello sanath</p>";
var x =  document.querySelector("body");
x.appendChild(p);
// below statement "1" is refered in the comment section below
var test2 = document.getElementById("test2"); 
// p.innerHTML += "4";  
// below statement "2" is refered in the comment section below 
var test2 = document.getElementById("test2");
*/ 
/*-> the use of this repeated statement is that innerHTML resets the whole tag when called and any changes done after accessing the element by id by "1" wont be valid and we should use "2" to make any changes
while testing this module comment "2" and test to know the changes
*/
/*
test2.style.fontSize = "20px";
			MODULE ENDS HERE
*/



// var x =  document.querySelector("#xyz");
// x.parentNode.removeChild(x);
// other ways of achieving the above action are
// var x =  document.querySelector("#abc");
// x.style.display = "none"
// var x =  document.querySelector("#abc");
// x.setAttribute("class","test1");



// var sample = document.getElementById("sample");
// sample.onmouseover= function() {
// 	alert("OK BYE!");
// }
// sample.onmouseover= alert("OK BYE!"); -> if we use this statement instead of the above statement the alert msg is popped when the page is reloaded instead of occurring when the event takes place.



/* 
		MODULE STARTS HERE

// changes element color to blue on mouseover event i.e, when the cursor is over the element 
// function changeColor() {
// 	this.className = "test";
// }

// changes element color back to black on mouseout event i.e, when the cursor is not over the element
// function changeColorOut() {
// 	this.className = "test2"
// }

// this function calls the changecolor function in the CSS file
// function changeColorClick() {
// 	this.className = "changeColor";
//  }

// var sample =  document.getElementById("sample");
// var increase = document.getElementById("increase");
// var decrease = document.getElementById("decrease");
// sample.onmouseover = changeColor;
// sample.onmouseout = changeColorOut;
// sample.onclick = changeColorClick;

			MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE


// function increaseSize() {
// 	sample.className = "increase";
// }

// function decreaseSize() {
// 	sample.className = "decrease";
// }

// var sample =  document.getElementById("sample");
// var increase = document.getElementById("increase");
// var decrease = document.getElementById("decrease");
// increase.onclick = increaseSize;
// decrease.onclick = decreaseSize;

			MODULE ENDS HERE 
*/ 

/* 
		MODULE STARTS HERE

// window.load helps to load the js file along with the web page so that necessary lines of code is js file can be executed. To know the difference test the module by removing defer keyword in the head section of the html code and run with and without "window.load".
 window.onload = function () {

function changeColor() {
	this.className = "test";
}
function changeColorOut() {
	this.className = "test1"
}
var sample =  document.getElementById("sample");
sample.onmouseout = changeColorOut;
sample.onmouseover = changeColor;

}

			MODULE ENDS HERE 
*/ 

/* 
		MODULE STARTS HERE

window.onload = function () {
	function changeColorOut() {
		this.className = "test1"
	}

	function changeColor() {
		this.className = "test";
	}
	function changeFontSize() {
		// the below statement helps to get the browser default property value for the element. here the property is fontsize and to see the value use it inside an alert statement.
		// alert(window.getComputedStyle(this).getPropertyValue("font-size"));
		// the font size value will be a string by default and hence parseInt is used to convert it to an integer to increase or decrease the size of the font.
		var fontSize= parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
		this.style.fontSize = (fontSize+20) + "px";
	}
	var sample =  document.getElementById("sample");
	// sample.onmouseout = changeFontSize;
	// sample.onmouseover = changeColor;
	// no need to "on" keyword while adding event listeners unlike the above statement where manually capture the occurrence of the event.
	sample.addEventListener("mouseover", changeColor);
	sample.addEventListener("mouseover",changeFontSize);
	sample.addEventListener("mouseout", changeColorOut);
	}
	
			MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE

window.onload = function () {
		function changeColorOut() {
			this.className = "test1"
		}
	
		function changeColor() {
			this.className = "test";
		}
		function changeFontSize() {
			var fontSize= parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
		this.style.fontSize = (fontSize+20) + "px";
	}

	var sample =  document.getElementById("sample");
	var stop =  document.getElementById("stop");
	sample.addEventListener("mouseover", changeColor);
	sample.addEventListener("mouseover",changeFontSize);
	sample.addEventListener("mouseout", changeColorOut);

	stop.addEventListener("click",function()
			{
				sample.removeEventListener("mouseover",changeFontSize);
			}
		);
	}
			MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE

// the first argument of the function assigned to the event is always an event object.

window.onload = function () {

	function doSomething(e) {
		var tmp = document.getElementById("tmp");
		// to check if alt button was clicked or not. returns a boolean value.
		// tmp.innerHTML = e.altKey;
		// to check which button was clicked the event should be onmousedown. its not exactly the buttons on the keyboard but the mouse buttons(mouseclicks which are considered to be buttons )
		// tmp.innerHTML = e.button;
		// to know which position the mouse is in.the event is onmousemove.to test move the mouse along the length of the element(horizontally)
		// tmp.innerHTML = e.clientX;
		// to know which position the mouse is in.the event is onmousemove.to test move the mouse along the length of the element(vertically)
		// tmp.innerHTML = e.clientY;
		tmp.innerHTML = e.clientY;
		
	}

	var sample =document.getElementById("sample");
	sample.onmousemove = doSomething;
	// sample.onmousedown = doSomething;

}
		MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE

window.onload = function () {

	function doSomething(event) 
	{
		var e = event || window.event;
		var tmp = document.getElementById("tmp");
		tmp.innerHTML = e;

		var toolTip = document.getElementById("tooltip");
		toolTip.style.display = "block";
		// to know the changes test the module by commenting the below two lines and then by uncommenting the below two lines.refer the above module for doubts.
		// what the below two lines do is that they move the toolTip element to the position where the cursor is pointing(x,y).
		toolTip.style.left = e.clientX + "px";
		toolTip.style.top = e.clientY + "px";
	}

var sample =  document.getElementById("sample");
sample.onmousemove = doSomething;
}
		MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE

window.onload = function () {

	function doSomething(event, str) 
	{
		var tmp = document.getElementById("tmp");
		tmp.innerHTML = str;

	}
	 function doNothing() 
	{
		
		tmp.innerHTML = "temp";
	}


var sample =  document.getElementById("sample");
// since the first argument of a function assigned to the evenT is always an event object follow the below steps to pass other arguments to the function.
sample.onmouseover = function(event)
	 {
		doSomething(event, "zzz");
	}
sample.onmouseout = doNothing;
}

			MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE


window.onload = function () {

	function doSomething(event, eventObj) 
		{
			// the below two lines are used to make sure the event woks
		var e = event || window.event;
		var srcElement = e.target || e.srcElement;
// for more info on .target and .tagName refer --> 'https://www.w3schools.com/jsref/event_target.asp'

		var tmp1 = document.getElementById("tmp1");
		tmp1.innerHTML = "source of events:" + srcElement.tagName + "<br>events assigned to tag:" + eventObj.tagName;

		}


	var zzz =  document.getElementById("zzz");
	var bolded = document.getElementById("bolded");
	var button1 = document.getElementById("button1");
	zzz.onclick = function(event)
		{ 
			alert("you are in zzz");
		// here this is referencing the object zzz
			doSomething(event, this);
		};

	// while testing the module test by commenting 'event.stopPropagation();' and uncommenting the same to know the difference
	// to read about it refer 'https://naspers.udemy.com/course/javascript-from-beginner-to-expert-bring-life-to-your-site/learn/lecture/2516244#overview' or read about event propogation
	bolded.onclick = function(event)
		{ 
			alert("you clicked bolded");
			doSomething(event, this);
			// event.stopPropagation();
			
		};

	button1.onclick = function(event)
		{ 
			alert("you clicked button");
			doSomething(event, this);
			// event.stopPropagation();
			
		};

}


			MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE

window.onload = function() 
{
	var email = document.getElementById("email");
	var sumbmitFormButton = document.querySelector("#newform input[type = 'submit']");

	sumbmitFormButton.onclick = function(e)
	{
		// prevents the default browser action. test by commenting and uncommenting the below line.
		e.preventDefault();

		var newFrom = document.getElementById("newform");
		var tmp2 = document.getElementById("tmp2");
		if(email.value == "zzzz")
			newFrom.submit();
		else
			tmp2.innerHTML = "email is wrong"

	}

	// to know the usage comment the below lines of code and rught click on the sumbit button before clicking submit. then uncomment the set of codes and test by right click again on the submit button.
	sumbmitFormButton.oncontextmenu = function(e)
	{
		if(e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;

	}
}

			MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE

window.onload = function()
{
	var toTopButton = document.getElementById("toTopButton");

	window.onscroll = function() 
	{
		var span1 =  document.getElementById("span1");
		var toTopButton = document.getElementById("toTopButton");
		if(window.pageYOffset > 300)
		{
			toTopButton.style.display = "block";
			span1.innerHTML = window.pageYOffset;
		}
		else	
			toTopButton.style.display = "none";
		
	}
	toTopButton.onclick = function() 
	{
		// scrollBy(x co-ordinate(horizontal), y co-ordinate(vertical))
		// +ve x value --> move left to right and -ve x value --> right to left
		// +ve y value --> move top to bottom and -ve y value --> bottom to top
		window.scrollBy(0, -1 * window.pageYOffset);
	}
}

			MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE
		THE MODU8LE IS ABOUT DRAGGING THE IMAGE WHILE CLICKING AND DRAGGING
		

function movingImage(e, objToMove) 
{
	objToMove.style.left = e.clientX - objToMove.width/2 + "px";
	objToMove.style.top = e.clientY - objToMove.width/2 + "px";
}


window.onload = function() 
{
	var sampleImage = document.getElementById("sampleImage");
	sampleImage.onmousedown = function()
	{	
		// assigning sampleImage to a variable called self.
		var self = this;
		document.onmousemove = function(e)
		{
			movingImage(e, self);
		};
	};

	sampleImage.ondragstart = function() 
		{
		e.preventDefault();
		};

	sampleImage.onmouseup = function()
	{
		document.onmousemove = null;
	}
}	


			MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE

// Read in the below link abou the usage of clearInterval and setInterval.
// https://www.w3schools.com/jsref/met_win_clearinterval.asp

window.onload = function() {
var  startingValue = document.getElementById("startingValue").value;
var  startButton = document.getElementById("startButton");
var  stopButton = document.getElementById("stopButton");

var  stopWatchHandler = document.getElementById("stopWatchHandler");
var intervalReferenceId;
startButton.onclick = function() 
{	
	if(intervalReferenceId)
		clearInterval(intervalReferenceId);
	var startingValue = document.getElementById("startingValue").value;
	stopWatchHandler.innerHTML = startingValue;
	intervalReferenceId =  setInterval(function()
		{
			if(startingValue <= 0 )
			{
				clearInterval(intervalReferenceId);
				return;
			}	
				
			stopWatchHandler.innerHTML = --startingValue;
		},1000);
};

stopButton.onclick = function()
{
	clearInterval(intervalReferenceId);
};

};

		MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE

// window.onload = function() 
// {
// 	var numberField = document.getElementById("myForm").numberField;
// 	var textField = document.getElementById("myForm").textField;
// 	var subitMyFormButton = document.getElementById("myForm").subitMyFormButton;

// 	var info = document.getElementById("info");
// 	var i = 0;
// 	isValid is to make sure that send works only when all the fields have proper inputs.
// 	var isValid = true;

	// keydown event occurs when you press a key and can be implemented with onkeypress event.
	// numberField.onkeydown = function(e)
	// {
	// 	info.innerHTML = ++i;
	// 	// to know which key was pressed.gives ASCII value
	// 	info.innerHTML = e.which;
	// };


	// numberField.onkeyup = function(e)
	// {
	// 	info.innerHTML = ++i;
	// 	// to know which key was pressed.gives ASCII value
	// 	info.innerHTML = e.which;
	// };


	// event occurs when you click on the input element (numberField)
	// numberField.onfocus = function(e)
	// {
	// 	info.innerHTML = ++i;
		
	// };

	// numberField.onblur = function(e)
	// {
	// 	info.innerHTML = ++i;
		
	// };

	// numberField.onchange = function(e)
	// {
	// 	info.innerHTML = ++i;
		
	// };

// to validate the form follow the below module.validation of number field i.e to check whether the user enter only number or not in the NumberField.
// 	function isNumber(valueToCheck)
// 	{
// 		// return true if its not a number
// 		return !isNaN(valueToCheck);
// 	}

// 	numberField.onkeydown = function(e)
// 	{
// 		this.style.backgroundColor = "white";
		
// 		// String.fromCharCode--> converts an ascii value to character.
// 		// e.which !== 8 --> to check if the key pressed is "backspace" key or not. backspace ascii is 8. if this condn is not checked then backspace cant be pressed.
// 		if(!isNumber(String.fromCharCode(e.which)) && e.which !== 8)
// 		{
// 			info.innerHTML = "please enter a number";
// 			// this.style.backgroundColor = "red";
// 			e.preventDefault();
// 			isValid = false;
// 		}
// 		else
// 		{	
// 			info.innerHTML = "";
// 			this.style.backgroundColor = "green";
// 			isValid = true;
// 		}
// 	};

// 	subitMyFormButton.onclick = function(e)
// 	{
// 		if(!isValid)
// 		{
// 			// preventDefault doesnt allow the send button to work if the fields do not have proper input.
// 			e.preventDefault();
// 		}
		
// 	};

// };


		MODULE ENDS HERE 
*/ 