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

//Ingredients & Products Interactive Text
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

const fig = document.getElementById('fig');
const lavender = document.getElementById('lavender');
const rosemary = document.getElementById('rosemary');
const olive = document.getElementById('olive');

const appendTxt = document.getElementById('appendedText');


fig.addEventListener('mouseover', function(){
    appendTxt.innerHTML = `<h2 class="violet">Bio-Feige</h2><p class="whitetxt">
    Die Feige, die als älteste Frucht gilt, wurde traditionell wegen ihrer entzündungshemmenden und ihrer beruhigenden Wirkung verwendet.
    In der Kosmetik ist die Feige bekannt für ihre feuchtigkeitsspendenden Eigenschaften und die Schutzwirkung gegen freie Radikale.</p>`
});

olive.addEventListener('mouseover', function(){
    appendTxt.innerHTML = `<h2 class="green">Bio-Olivenöl</h2><p class="whitetxt">
    Olivenöl wird seit jeher zur Vorbeugung oder Heilung bestimmter Krankheiten eingesetzt. 
    Im antiken Griechenland wurden mit Präparaten aus Olivenöl alle Arten von Entzündungen behandelt. 
    Reich an Vitaminen, Mineralien und Fettsäuren, ist Olivenöl das älteste italienische Schönheitsgeheimnis. 
    </p>`
});

lavender.addEventListener('mouseover', function(){
    appendTxt.innerHTML = `<h2 class="violet">Meeres-Lavendel</h2><p class="whitetxt">
    Meereslavendel wird in der medizinischen Behandlung wegen seiner abschwellenden und entschlackenden Eigenschaften verwendet.
    Er wird wegen seiner tiefen feuchtigkeitsspendenden Eigenschaften und seiner hautverjüngenden Wirkung häufig in Nachtcremes integriert. </p>`
});

rosemary.addEventListener('mouseover', function(){
    appendTxt.innerHTML = `<h2 class="green">Rosmarin</h2><p class="whitetxt">
    Rosmarin war schon in der römischen Zeit bekannt dafür, die Verdauungsfunktionen zu stimulieren. Er wurde auch als allgemeines Tonikum eingesetzt.
    Rosmarin wird für Haut und Haare verwendet, wirkt reinigend und klärend. Bei Hautpflegeprodukten wirkt Rosmarin zudem erfrischend. </p>`
});


const fig2 = document.getElementById('fig2');
const lavender2 = document.getElementById('lavender2');
const rosemary2 = document.getElementById('rosemary2');
const olive2 = document.getElementById('olive2');

const appendTxt2 = document.getElementById('appendInfoTxt');

fig2.addEventListener('mouseover', function(){
    item1.src = "assets/images (11).jpg"
    item2.src = "assets/images (6).jpg"
    item3.src = "assets/Download (2).jpg"
    appendTxt2.innerHTML = `<h3 class="oliveTxt">BIO - FEIGE</h3><p>
    In der Kosmetik ist die Feige bekannt für ihre feuchtigkeitsspendenden Eigenschaften und die Schutzwirkung gegen freie Radikale.</p>`
});

olive2.addEventListener('mouseover', function(){
    item1.src = "assets/Download (5).jpg"
    item2.src = "assets/Download (4).jpg"
    item3.src = "assets/Download (6).jpg"
    appendTxt2.innerHTML = `<h3 class="oliveTxt">BIO - OLIVENÖL</h3><p>
    Ein wahrer Schatz für die Haut, nährt sie, macht sie weich, tonisiert und revitalisiert. 
    Olivenöl ist auch perfekt, um das Haar zu stärken und ihm wieder Glanz zu verleihen. 
    </p>`
});

lavender2.addEventListener('mouseover', function(){
    item1.src = "assets/Download (8).jpg"
    item2.src = "assets/Download (9).jpg"
    item3.src = "assets/Download (7).jpg"
    appendTxt2.innerHTML = `<h3 class="oliveTxt">MEERESLAVENDEL</h3><p>
    Meereslavendel wird wegen seiner tiefen feuchtigkeitsspendenden Eigenschaften und seiner hautverjüngenden Wirkung häufig in Nachtcremes integriert. </p>`
});

rosemary2.addEventListener('mouseover', function(){
    item1.src = "assets/Download (12).jpg"
    item2.src = "assets/Download.jpg"
    item3.src = "assets/Download (1).jpg"
    appendTxt2.innerHTML = `<h3 class="oliveTxt">ROSMARIN PUR</h3><p>
    Rosmarin wird für Haut und Haare verwendet, wirkt reinigend und klärend. Bei Hautpflegeprodukten wirkt Rosmarin zudem erfrischend. </p>`
});


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
        },1500); 
    }
});



window.onscroll = function() {scrollUp()};
function scrollUp() {
    let y = window.scrollY;
    let x = screen.height;
   if ( y > x ) {
      document.getElementById("topBtn").style.display = "block";
   } else {
      document.getElementById("topBtn").style.display = "none";
   }
}

function topFunction() {
   $('html,body').animate({ scrollTop: 0 }, 500);
}
