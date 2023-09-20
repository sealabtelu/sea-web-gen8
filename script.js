
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function updateActiveLink() {
        links.forEach(link => {
            link.classList.remove('active-link');
        });
        links[currentSection].classList.add('active-link');
    }
    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        
        sections[currentSection].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        updateActiveLink();
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                currentSection = Array.from(sections).indexOf(targetSection);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                updateActiveLink();
            }
        });
    }); 
});

let menu=document.getElementById('menu');
let logo=document.getElementById('logo');
function ShowMenu(){
    menu.style.right="0";
    logo.style.right="15vw";
}
function CloseMenu(){
    menu.style.right="-100vw";
    logo.style.right="-50vw";
}


// function Change(){
//     bodi.style.overflow="scroll";
//     change.style.display="none";
//     changeback.style.display="block";
// }
// function ChangeBack(){
//     bodi.style.overflow="hidden";
//     changeback.style.display="none";
//     change.style.display="block";
// }
let bodi=document.getElementById('body');
let change=document.getElementById('change');
let changeback=document.getElementById('changeback');
let navlist1=document.getElementById('navlist1');
let navlist2=document.getElementById('navlist2');
let navlist3=document.getElementById('navlist3');
let navlist4=document.getElementById('navlist4');
let section1=document.getElementById('section1');
let section2=document.getElementById('section2');
let section3=document.getElementById('section3');
let section4=document.getElementById('section4');
let section5=document.getElementById('section5');
let section6=document.getElementById('section6');
let section7=document.getElementById('section7');
let sectionas1=document.getElementById('section-assis2');
let sectionas2=document.getElementById('section-assis3');
let sectionas3=document.getElementById('section-assis4');
let sectionas4=document.getElementById('section-assis5');
let sectionas5=document.getElementById('section-assis6');
let dek=document.getElementById('dek');
let sea1=document.getElementById('sea1');
let sea2=document.getElementById('sea2');
let asis1=document.getElementById('asis1');
let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
let box4=document.getElementById('box4');
let box5=document.getElementById('box5');
let box6=document.getElementById('box6');
let box7=document.getElementById('box7');
let box8=document.getElementById('box8');
let box9=document.getElementById('box9');
let box10=document.getElementById('box10');
let box11=document.getElementById('box11');
let box12=document.getElementById('box12');
let box13=document.getElementById('box13');
let box14=document.getElementById('box14');
let box15=document.getElementById('box15');
let icon1=document.getElementById('icon1');
let icon2=document.getElementById('icon2');
let icon3=document.getElementById('icon3');
var x = window.matchMedia("(max-width: 768px)");
nightmode=localStorage.getItem("nightmode")

function TurnDark(){
    if(dek!=null){
        dek.style.filter="grayscale(30%) brightness(75%)";
        sea1.style.animation="wiggle2 0.5s linear 0s";
        sea2.style.animation="wiggle1 0.5s linear 0s";
        sea1.style.filter="grayscale(0%) brightness(100%)";
        sea2.style.filter="grayscale(0%) brightness(100%)";
        box1.style.backgroundColor="#353535";
        box2.style.backgroundColor="#353535";
        box3.style.backgroundColor="#353535";
        box4.style.backgroundColor="#353535";
        box6.style.backgroundColor="#353535";
        box5.onmouseover=function(){box5.style.backgroundColor="rgba(41,42,43, 0.5)";}
        box5.onmouseleave=function(){box5.style.backgroundColor="transparent";}
        box1.style.color="#aaceda";
        box2.style.color="#aaceda";
        box3.style.color="#aaceda";
        box6.style.color="#aaceda";
        box5.style.color="#aaceda";
        myFunction4(x)
        x.addListener(myFunction4)
        icon1.style.color="#aaceda";
        icon2.style.color="#aaceda";
        icon3.style.color="#aaceda";
    }
    if(asis1!=null){
        sectionas1.style.backgroundColor="#415069";
        sectionas2.style.backgroundColor="#353535";
        sectionas3.style.backgroundColor="#353535";
        sectionas4.style.backgroundColor="#415069";
        sectionas5.style.backgroundColor="#353535";
        asis1.style.backgroundColor="#353535";
        box1.style.backgroundColor="#353535";
        box2.style.backgroundColor="#353535";
        box3.style.backgroundColor="#415069";
        box4.style.backgroundColor="#415069";
        box5.style.backgroundColor="#415069";
        box6.style.backgroundColor="#353535";
        box7.style.backgroundColor="#353535";
        box8.style.backgroundColor="#353535";
        box9.style.backgroundColor="#415069";
        box10.style.backgroundColor="#415069";
        box11.style.backgroundColor="#415069";
        box12.style.backgroundColor="#353535";
        box13.style.backgroundColor="#353535";
        box14.style.backgroundColor="#353535";
        box15.style.backgroundColor="#353535";
    }
    myFunction2(x)
    x.addListener(myFunction2)
    bodi.style.color="#ffffff";
    navlist1.classList.remove('dark-link');
    navlist2.classList.remove('dark-link');
    navlist3.classList.remove('dark-link');
    navlist4.classList.remove('dark-link');
    navlist1.classList.add('light-link');
    navlist2.classList.add('light-link');
    navlist3.classList.add('light-link');
    navlist4.classList.add('light-link');
    section1.style.backgroundColor="#353535";
    section2.style.backgroundColor="#415069";
    section3.style.backgroundColor="#353535";
    section4.style.backgroundColor="#415069";
    section5.style.backgroundColor="#353535";
    if (section6!=null){
        section6.style.backgroundColor="#415069";
    }
    if (section7!=null){
        section7.style.backgroundColor="#353535";
    }
    change.style.color="#aaceda";
    changeback.style.color="#aaceda";
    change.style.opacity="0";
    changeback.style.opacity="1";
    change.style.zIndex="0";
    changeback.style.zIndex="1";
    change.style.animation="tes1 0.5s linear";
    changeback.style.animation="tes2 0.5s linear";
    nightmode=1;
    localStorage.setItem("nightmode", nightmode);
}
function TurnLight(){
    if(dek!=null){
        dek.style.filter="none";
        sea1.style.animation="wiggle1 0.5s linear 0s";
        sea2.style.animation="wiggle2 0.5s linear 0s";
        sea1.style.filter="none";
        sea2.style.filter="none";
        box1.style.backgroundColor="#ffffff";
        box2.style.backgroundColor="#ffffff";
        box3.style.backgroundColor="#ffffff";
        box4.style.backgroundColor="#ffffff";
        box6.style.backgroundColor="#ffffff";
        box5.onmouseover=function(){box5.style.backgroundColor="rgba(251, 254, 255, 0.5)";}
        box5.onmouseleave=function(){box5.style.backgroundColor="transparent";}
        box1.style.color="#353535";
        box2.style.color="#353535";
        box3.style.color="#353535";
        box6.style.color="#353535";
        box5.style.color="#353535";
        myFunction3(x)
        x.addListener(myFunction3)
        icon1.style.color="#353535";
        icon2.style.color="#353535";
        icon3.style.color="#353535";
    }
    if(asis1!=null){
        sectionas1.style.backgroundColor="#c9eefa";
        sectionas2.style.backgroundColor="#ffffff";
        sectionas3.style.backgroundColor="#ffffff";
        sectionas4.style.backgroundColor="#c9eefa";
        sectionas5.style.backgroundColor="#ffffff";
        asis1.style.backgroundColor="#ffffff";
        box1.style.backgroundColor="#ffffff";
        box2.style.backgroundColor="#ffffff";
        box3.style.backgroundColor="#c9eefa";
        box4.style.backgroundColor="#c9eefa";
        box5.style.backgroundColor="#c9eefa";
        box6.style.backgroundColor="#ffffff";
        box7.style.backgroundColor="#ffffff";
        box8.style.backgroundColor="#ffffff";
        box9.style.backgroundColor="#c9eefa";
        box10.style.backgroundColor="#c9eefa";
        box11.style.backgroundColor="#c9eefa";
        box12.style.backgroundColor="#ffffff";
        box13.style.backgroundColor="#ffffff";
        box14.style.backgroundColor="#ffffff";
        box15.style.backgroundColor="#ffffff";
    }
    myFunction1(x)
    x.addListener(myFunction1)
    bodi.style.color="#353535";
    navlist1.classList.remove('light-link');
    navlist2.classList.remove('light-link');
    navlist3.classList.remove('light-link');
    navlist4.classList.remove('light-link');
    navlist1.classList.add('dark-link');
    navlist2.classList.add('dark-link');
    navlist3.classList.add('dark-link');
    navlist4.classList.add('dark-link');
    section1.style.backgroundColor="#ffffff";
    section2.style.backgroundColor="#c9eefa";
    section3.style.backgroundColor="#ffffff";
    section4.style.backgroundColor="#c9eefa";
    section5.style.backgroundColor="#ffffff";
    if (section6!=null){
        section6.style.backgroundColor="#c9eefa";
    }
    if (section7!=null){
        section7.style.backgroundColor="#ffffff";
    }
    change.style.color="#353535";
    changeback.style.color="#353535";
    change.style.opacity="1";
    changeback.style.opacity="0";
    change.style.zIndex="1";
    changeback.style.zIndex="0";
    change.style.animation="tes2 0.5s linear";
    changeback.style.animation="tes1 0.5s linear";
    nightmode=0;
    localStorage.setItem("nightmode", nightmode);
}

function myFunction1(x) {
    if (x.matches) {
        menu.style.backgroundColor="#828282";
  }else{
    menu.style.backgroundColor="unset";
  }
}

function myFunction2(x) {
    if (x.matches) {
        menu.style.backgroundColor="#264762";
  }
  else{
    menu.style.backgroundColor="unset";
  }
}
function myFunction3(x) {
    if (x.matches) {
        box5.style.backgroundColor="#ffffff";
  }else{
    box5.style.backgroundColor="unset";
  }
}

function myFunction4(x) {
    if (x.matches) {
        box5.style.backgroundColor="#353535";
  }
  else{
    box5.style.backgroundColor="unset";
  }
}

if (nightmode==0){
    TurnLight()
}
else{
    TurnDark()
}