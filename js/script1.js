/* 
		MODULE STARTS HERE


// window.onload  = function()
// {
//     var myForm = document.getElementById("myForm");
//     var submitButton = document.getElementById("myForm").submitButton;

//     var info = document.getElementById("info");
    

//     submitButton.onclick = function(e)
//     {   
//         var tmpString = "";
//         for (var i = 0; i<myForm.courseName.length; i++)
//         {
//             // returns the "value" defined in the tag i.e at 0th position the course is PHP but the value is php(which is returned).
//             // info.innerHTML = myForm.courseName[0].value;
//             // returns true if the element is ticked in the check box.
//             tmpString += myForm.courseName[i].checked + " ";
//         }
//         info.innerHTML = tmpString;
//         e.preventDefault();
//     };

// };


		MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE


window.onload  = function()
{
    var myForm = document.getElementById("myForm");
    var submitButton = document.getElementById("myForm").submitButton;

    var info = document.getElementById("info");
    myForm.acceptationOfToS[1].checked = true;
    submitButton.disabled = true;
    
    submitButton.onclick = function(e)
    {   
        var tmpString = "";
        for (var i = 0; i<myForm.courseName.length; i++)
        {
            // returns the "value" defined in the tag i.e at 0th position the course is PHP but the value is php(which is returned).
            // info.innerHTML = myForm.courseName[0].value;
            // returns true if the element is ticked in the check box.
            tmpString += myForm.courseName[i].checked + " ";
        }
        info.innerHTML = tmpString;
        e.preventDefault();
    };


    myForm.acceptationOfToS[0] --> YES, myForm.acceptationOfToS[1] --> NO. the below function enables ADD when YES is clicked which is disabled and NO is checked as defaults.
    myForm.acceptationOfToS[0].onclick = function()
    {
        submitButton.disabled = false;
    }

    myForm.acceptationOfToS[1].onclick = function()
    {
        submitButton.disabled = true;
    }


    // the below code isnt working.
// //  the below set of code is to optimise the bove fucntionality
    for (var i = 0; i<myForm.acceptationOfToS.length; i++)
    {
        myForm.acceptationOfToS[i].onclick = function()
        {  
             in the below code "this" refers to acceptationOfToS 
                submitButton.disabled = this.value === "true";
        }; 
    }

};

		MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE



window.onload = function()
{
    var myForm = document.getElementById("myForm");
    var info = document.getElementById("info");

    var newOption = document.createElement("option");
    newOption.text = "Python";
    myForm.courses.add(newOption);


    myForm.courses.remove[0];
    myForm.courses.onchange = function()
    {

        // the below line returns the index of the selected option from the dropdown menu.
        // info.innerHTML = myForm.courses.selectedIndex;

        // the below line returns the value of the selected option from the dropdown menu.
        // info.innerHTML = myForm.courses.options[myForm.courses.selectedIndex].value;

        
        
        myForm.courses.onchange = function()
        {   
            info.innerHTML = myForm.courses.options[myForm.courses.selectedIndex].value;
            // or info.innerHTML = this.value;
        };
 
    };

}


        MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE



// new String("asda") -->to create a string
// var_name.charAt(pos) --> to retrieve a character at position pos
// var_name.toUpperCase() --> to convert into upper case
// var_name.substring(start_pos, end_pos) --> to get the substring from start_pos to end_pos from the string.
// slice also works the same as substring() but can be sliced using the negative variable.
// var_name.substr(start_pos, no_of_char_to_slice) --> var_name.substr(1,4) retrieves the next 4 characters from the 1st position in which 1st position is also included.
// var_name.indexOf(char) --> gives the index of the first occurrence of the char
// var_name.lastIndexOf(char) --> gives the index of the last occurrence of the char
// var_name.split(char_to_split_at) -->var x = "php html" --> x.split(" ") --> returns php.
// var_name.trim() --> trims white space on either sides of the string.
window.onload = function()
{
    var info = document.getElementById("info");
    var info1 = document.getElementById("info1");
    var info2 = document.getElementById("info2");
    var info3 = document.getElementById("info3");

    var tmp = "abcd,xyz,uvw";

    var tmp1 = tmp.replace('abcd', 'lmn');

    var tmp2 = tmp1.split(" ");
    tmp1[1] = "css";
    var tmp3 = tmp2.join(", ")

    alert(tmp1);
    info.innerHTML = tmp;
    info1.innerHTML = tmp1;
    info2.innerHTML = tmp2;
    info3.innerHTML = tmp3;


} 

        MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE


// go through this file for any doubts --> D:\project\docs\regexp 
window.onload = function()
{
    var info = document.getElementById("info");

    var indexes  = "A-565 B-12 K-51 A-53 A#58 S#45 A.51 a-98 Aj2454 a-4124";

   var res = indexes.match(/A/);
   var res = indexes.match(/A/g);
   var res = indexes.match(/A/gi);
   var res = indexes.match(/./gi);
   var res = indexes.match(/A-[0-9]/gi);
   var res = indexes.match(/A-[0-9]{1,}/gi);
   var res = indexes.match(/A-[0-9]+/gi);
   var res = indexes.match(/A-\d+/gi);
   var res = indexes.match(/A.[0-9]+/gi);
   var res = indexes.match(/A(-|#)[0-9]+/gi);
   var res = indexes.match(/A(-|#|\.)[0-9]+/gi);
   var res = indexes.match(/A(-|#|.)[0-9]+/gi);


    var regExp = /A.[0-9]+/gi;
    var row = "";
    var res = "";
    
    while(row = regExp.exec(indexes))
    {
         res += row + " "; 
    }
    info.innerHTML = res;
};


        MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE


window.onload = function()
{
    var info = document.getElementById("info");
    
    var test = document.getElementById("myForm").test;

    test.onclick =  function(e)
    {
        e.preventDefault();
        var pw = document.getElementById("myForm").pw.value;
        var formula = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;
        if(formula.test(pw))
        {
            document.getElementById("myForm").submit();
        }
        else
        {
            info.innerHTML = "please enter the correct password";
        }
    }
  
};


        MODULE ENDS HERE 
*/ 



/* 
		MODULE STARTS HERE


window.onload  =  function()
{
    var info =  document.getElementById("info");

    var today = new Date();

    info.innerHTML = today;
    // month count starts from "0" --> jan-0 feb-1
    info.innerHTML = today.getMonth() + 1;
    info.innerHTML = today.getDate();
    info.innerHTML = today.getFullYear();
    info.innerHTML = (today.getMonth()+ 1) + "/" + today.getDate() + "/" + today.getFullYear();
    info.innerHTML = getStringMonthFromNumber((today.getMonth()+ 1)) + "/" + today.getDate() + "/" + today.getFullYear();
    function getStringMonthFromNumber (monthNumber) 
    {
        var months = ["jan","feb","mar","apr","may","jun","jul",
                        "aug", "sept","oct","nov","dec"];
        return months[monthNumber];
    };
   
    // info.innerHTML = today.toLocaleTimeString();
    // today.setDate(today.getDate() + 1);
    // info.innerHTML = today.toLocaleString();
    
    var tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24);
    info.innerHTML = tomorrow.toLocaleString();
   
    
};


        MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE



function Clock(elementHandler)
{
    this.elementHandler = elementHandler;
    this.actualDate = new Date();

    this.start = function()
    {
        this.updateElementHandlerContent();
        var self = this;
        setInterval(function(){   
            self.addSecond();
            self.updateElementHandlerContent();
        }, 1000)
    };

    this.updateElementHandlerContent = function() 
    {
        this.elementHandler.innerHTML = this.actualDate.toLocaleTimeString();
    };
    this.addSecond = function()
    {
       this.actualDate = new Date();
    };
}
window.onload = function()
{
    var info = document.getElementById("info");
    var clock = new Clock(info);

    clock.start();

}

        MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE


window.onload = function()
{
    var info = document.getElementById("info");
    var createCookie = document.getElementById("createCookie");
    var removeCookie = document.getElementById("removeCookie");


    createCookie.onclick = function()
    {
        // document.cookie = "name=Sanath G;";
        // document.cookie = "surname=Rao;";
        // // to make the cookie available on all sites use path=/
        // document.cookie = "zzzz=zzzz;path=/";
        
        var expirationDateofCookie = new Date();
        expirationDateofCookie.setTime(expirationDateofCookie.getTime() + 1000 * 60 * 60);
        document.cookie = "name=SanathG;expires="+expirationDateofCookie.toUTCString()+";path=/";
        document.cookie = "surname=Rao;";
        info.innerHTML = "created cookie";
        
    };

    removeCookie.onclick = function()
    {
        var expirationDateofCookie = new Date();
        expirationDateofCookie.setTime(expirationDateofCookie.getTime() - 1);
        document.cookie = "name=;expires="+expirationDateofCookie.toUTCString()+";path=/";
        info.innerHTML = "Deleted cookie";
    };

}


        MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE


window.onload = function()
{
    var info = document.getElementById("info");
    var createCookie = document.getElementById("createCookie");
    var removeCookie = document.getElementById("removeCookie");


    createCookie.onclick = function()
    {
        var expirationDateofCookie = new Date();
        
        createCookies("name", "Sanath", 10);
        createCookies("age", 23);
        info.innerHTML = "Created cookies";
        
    };

    removeCookie.onclick = function()
    {
        removeCookies("name");
        removeCookies("age");
        info.innerHTML = "Deleted cookies";
    };



    function createCookies(key, value, days) 
    {
        var expirationDateofCookie = "";
        if(days)
        {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);
            expirationDateofCookie = ";expires="+expirationDate.toUTCString();
        }
        document.cookie = key + "=" + value +expirationDateofCookie+";path=/";
    }


    function removeCookies(key)
    {
        var expirationDateofCookie = new Date();
        expirationDateofCookie.setDate(expirationDateofCookie.getDate() - 1);
        document.cookie = key + "=;expires="+expirationDateofCookie.toUTCString()+";path=/";

    }

}

        MODULE ENDS HERE 
*/ 





/* 
		MODULE STARTS HERE

window.onload = function()
{
    var info = document.getElementById("info");
    var createCookie = document.getElementById("createCookie");
    var removeCookie = document.getElementById("removeCookie");

    info.innerHTML = getCookieByKey("age");

    createCookie.onclick = function()
    {
        var expirationDateofCookie = new Date();
        
        createCookies("name", "Sanath", 10);
        createCookies("age", 23);
        info.innerHTML = "Created cookies";
        
    };

    removeCookie.onclick = function()
    {
        removeCookies("name");
        removeCookies("age");
        info.innerHTML = "Deleted cookies";
    };



    function createCookies(key, value, days) 
    {
        var expirationDateofCookie = "";
        if(days)
        {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);
            expirationDateofCookie = ";expires="+expirationDate.toUTCString();
        }
        document.cookie = key + "=" + value +expirationDateofCookie+";path=/";
    }


    function removeCookies(key)
    {
        var expirationDateofCookie = new Date();
        expirationDateofCookie.setDate(expirationDateofCookie.getDate() - 1);
        document.cookie = key + "=;expires="+expirationDateofCookie.toUTCString()+";path=/";

    }

    function getCookieByKey(key)
    {
        var cookies = document.cookie.split("; ");
        for (var i = 0; i<cookies.length; i++)
        {
            var splitCookies = cookies[i].split("=");
            var cookieKeyName = splitCookies[0];

            if(key === cookieKeyName)
            {
                var cookieValue = splitCookies[1];
                return cookieValue;
            }
        } 
    }

}





/* 
		MODULE STARTS HERE

//  to use special characters in the value of a cookie we use encodeURIComponent while creating a cookie and decodeURICompoenent while trying to fetch the value of the key.
window.onload = function()
{
    var info = document.getElementById("info");
    var createCookie = document.getElementById("createCookie");
    var removeCookie = document.getElementById("removeCookie");

    info.innerHTML = getCookieByKey("name");

    createCookie.onclick = function()
    {
        var expirationDateofCookie = new Date();
        
        createCookies("name", "San;ath", 10);
        createCookies("age", 23);
        info.innerHTML = "Created cookies";
        
    };

    removeCookie.onclick = function()
    {
        removeCookies("name");
        removeCookies("age");
        info.innerHTML = "Deleted cookies";
    };



    function createCookies(key, value, days) 
    {
        var expirationDateofCookie = "";
        if(days)
        {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);
            expirationDateofCookie = ";expires="+expirationDate.toUTCString();
        }
        document.cookie = key + "=" + encodeURIComponent(value) +expirationDateofCookie+";path=/";
    }


    function removeCookies(key)
    {
        var expirationDateofCookie = new Date();
        expirationDateofCookie.setDate(expirationDateofCookie.getDate() - 1);
        document.cookie = key + "=;expires="+expirationDateofCookie.toUTCString()+";path=/";

    }

    function getCookieByKey(key)
    {
        var cookies = document.cookie.split("; ");
        for (var i = 0; i<cookies.length; i++)
        {
            var splitCookies = cookies[i].split("=");
            var cookieKeyName = splitCookies[0];

            if(key === cookieKeyName)
            {
                var cookieValue = splitCookies[1];
                return decodeURIComponent(cookieValue);
            }
        } 
    }

}
        MODULE ENDS HERE 
*/ 




/* 
		MODULE STARTS HERE


window.onload = function()
{
    var info = document.getElementById("info");
    var x  = 2.5;
    var x  = 2.49;

    info.innerHTML = Math.round(x);
    info.innerHTML = Math.ceil(x);
    info.innerHTML = Math.floor(x);
    info.innerHTML = x.toFixed(3);

    var x = -2.43;
    info.innerHTML = Math.abs(x);

    var x = 3;
    info.innerHTML = Math.pow(x, 3);

    var x = "3";
    info.innerHTML = typeof(x);

    var x = 3;
    info.innerHTML = typeof(x);

    var x = parseInt("3123");
    info.innerHTML = Math.round(x);

    var x = parseFloat("3123.232");
    info.innerHTML = x.toFixed(3);

    var randomNumber = Math.random();
    info.innerHTML = randomNumber;

    var randomNumber =  Math.random() * 2;
    info.innerHTML = randomNumber;

    var randomNumber =  Math.floor(Math.random() * 6);
    info.innerHTML = randomNumber;


    var quotes = ["zzz", "xxxxx", "aaaaaa", "nnnnnnn"];
    var randomNumber =  Math.floor(Math.random() * quotes.length);
    info.innerHTML = quotes[randomNumber];
}


        MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE



window.onload = function()
{
    var info = document.getElementById("info");
    var hyperLink = document.getElementById("hyperLink");


    hyperLink.onclick = function(e)
    {
        e.preventDefault();

        // PEFORM ANY OPERATIONS HERE BEFORE YOU ALLOW THE USER TO NAVIGATE WHEN HE CLICKS THE LINK
        
        window.location  = this.getAttribute("href");
    }
    info.innerHTML = window.location;
}


        MODULE ENDS HERE 
*/ 

/* 
		MODULE STARTS HERE



function loadMoreImages()
{
    var images = document.getElementById("images");

    var image = new Image();
    image.src = "css/images/_NM73635.jpg";
    images.appendChild(image);
    var loadMoreButtonClone = this.cloneNode(true);
    loadMoreButtonClone.onclick = loadMoreImages;
    this.parentNode.removeChild(this);
    document.body.appendChild(loadMoreButtonClone);
}
window.onload = function()
{
    var loadMoreButton = document.getElementById("loadMoreButton");
    loadMoreButton.onclick = loadMoreImages;
    
}


        MODULE ENDS HERE 
*/ 


/* 
		MODULE STARTS HERE


window.onload = function()
{
    var slideShow = document.getElementById("slideShow");

    var  imagesSrc = ["image1.JPG", "image2.JPG", "image3.JPG", "image4.JPG", "image5.JPG"];

    for(var i = 0 ; i<imagesSrc.length; i++)
    {
        var image = new Image();
        image.src = "css/images/" + imagesSrc[i];
        image.setAttribute("class", "sampleImage1");
        slideShow.appendChild(image);
    }
    slideShow.childNodes[0].setAttribute("class","firstImage");
    var i = 0;
    n = imagesSrc.length;
    setInterval(function(){
        slideShow.childNodes[i%n].setAttribute("class", "sampleImage1");
        slideShow.childNodes[(i+1)%n].setAttribute("class","firstImage");

        i++;
    }, 5000);
};


        MODULE ENDS HERE 
*/ 

/* 
		MODULE STARTS HERE



window.onload = function()
{
    var mainImage = document.getElementById("mainImage");
    
    var image = new Image();
    
    mainImage.appendChild(image);
    
    var thumbnails = document.getElementsByClassName("thumbnail");
    image.src = thumbnails[0].getAttribute("src");
    var currentThumbnail = thumbnails[0];
    currentThumbnail.className += " current";
    
    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnails[i].onmouseover = function()
        {
            currentThumbnail.className =  currentThumbnail.className.replace("current", "");
            
            currentThumbnail = this;
            
            currentThumbnail.className += " current";
            image.src = this.getAttribute("src");
        };
    }
    
};



function createImageTip()
{
    var elementsWithImageTip = document.getElementsByClassName("imageTip");
    var imageTipContainer = document.createElement("div");
    imageTipContainer.id = "imageTipContainer";
    document.body.appendChild(imageTipContainer);
    for(var i=0; i<elementsWithImageTip; i++)
    {
        elementsWithImageTip[i].addEventListener("mouseover",function()
        {
            alert("a");
        });
    }
}


window.onload = function()
{
    createImageTip();
    var mainImage = document.getElementById("mainImage");
    
    var image = new Image();
    
    mainImage.appendChild(image);
    
    var thumbnails = document.getElementsByClassName("thumbnailImageTip");
    image.src = thumbnails[0].getAttribute("src");
    var currentThumbnail = thumbnails[0];
    currentThumbnail.className += "current";
    
    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnails[i].addEventListener("mouseover", function() 
        {
            currentThumbnail.className =  currentThumbnail.className.replace("current", "");
            
            currentThumbnail = this;
            
            currentThumbnail.className += " current";
            image.src = this.getAttribute("src");
        });
    }
    
};


        MODULE ENDS HERE 
*/ 


/*
        MODULE STARTS HERE


//  http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

function product(name, price)
{
    var name = name;
    var price = price;
    var id = 0;

    //closure function 
    function getInfo()
    {
        return name + " " + price + " " + (++id);
    }

    return getInfo;
}

function product2(name, price)
{
    this.name = name;
    this.price = price;
}


window.onload = function()
{
    var a = product("Earphone", 60);
    var b = product("Ball", 30);
    var c = product("Bat", 100 );

    alert(a());
    alert(a());
    alert(a());
    alert(a());
    alert(a());

    alert(b());
    alert(b());
    alert(b());

    
    var clickMe = document.getElementById("clickMe");
    
    clickMe.onclick = (function(e)
    {
         var counter = 0;
         function closure()
         {
            counter++;
            if(counter === 2)
            {
                counter = 0;
                alert("zz");
            }
         }
         return closure;
      
    })();
}


        MODULE ENDS HERE 
*/ 



window.onload = function()
{
     var y = 5
     y++;
     alert("y = " + y);

     var z = "5";
     z++;
     alert("z = " + z);
}
