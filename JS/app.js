//Add sections to menu
const menu = document.querySelector('#navlist');
const sections = document.getElementsByTagName('section');
for(let i=0; i< sections.length; i++) {
    let s = (sections[i].getAttribute("id"));
    let li = document.createElement('li');
    li.innerHTML=`<a class="${s}" href="#${s}">${s}</a>`;
    li.classList.add('menu-item-${sections[i]}')
    menu.appendChild(li);
}

//Active Link Class added when Section is in view
    $(window).scroll(function() { 
        var Scroll = $(window).scrollTop() + 1, // Distance from Top
                    SectionOneOffset = $('#Discover').offset().top, // Distance between section and top
                    SectionTwoOffset = $('#Ingredients').offset().top;
                    SectionThreeOffset = $('#Products').offset().top;
                    SectionFourOffset = $('#About').offset().top; 

        if (Scroll >= SectionOneOffset) { 
            $(".Discover").addClass("activeLink"); 
        } else { 
            $(".Discover").removeClass("activeLink"); 
        }
            if (Scroll >= SectionTwoOffset) { 
            $(".Ingredients").addClass("activeLink"); 
            $(".Discover").removeClass("activeLink"); 
        } else { 
            $(".Ingredients").removeClass("activeLink");
        }
        if (Scroll >= SectionThreeOffset) { 
            $(".Products").addClass("activeLink");
            $(".Ingredients").removeClass("activeLink"); 
        } else { 
            $(".Products").removeClass("activeLink"); 
        }
            if (Scroll >= SectionFourOffset) { 
                $(".About").addClass("activeLink"); 
                $(".Products").removeClass("activeLink"); 
        } else {
            $(".About").removeClass("activeLink"); 
        }
    });


//Hide nav when not scrolling
$(function(){
    var t;
    document.addEventListener('scroll',function(e){
        $("#nav").fadeIn(500);
        clearTimeout(t);
        checkScroll();
    });
    
    function checkScroll(){
        t = setTimeout(function(){
           $("#nav").fadeOut(800);
        },2000); 
    }
});








       
      
        
    
    
//show info text on hover ingredients



//show products on hover ingredients