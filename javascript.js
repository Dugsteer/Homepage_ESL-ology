//BOOTSTRAP-STYLE BUTTON DROPDOWN TOGGLE
const noshow_1 = document.getElementById("noshow-1");
const noshow_2 = document.getElementById("noshow-2");
const noshow_3 = document.getElementById("noshow-3");
const noshow_4 = document.getElementById("noshow-4");
const noshow_5 = document.getElementById("noshow-5");
const noshow_6 = document.getElementById("noshow-6");
const noshow_7 = document.getElementById("noshow-7");
const noshow_9 = document.getElementById("noshow-9");

const docTop = document.getElementById("header");
const navbar = document.getElementById("navbar");
const button = document.getElementById("header__btn");
const button1 = document.getElementById("header__logo");
const homeButton = document.getElementById('home');

function dropDown_1() {noshow_1.classList.toggle("noshow");}
function dropDown_2() {noshow_2.classList.toggle("noshow");}
function dropDown_3() {noshow_3.classList.toggle("noshow");}
function dropDown_4() {noshow_4.classList.toggle("noshow");}
function dropDown_5() {noshow_5.classList.toggle("noshow");}
function dropDown_6() {noshow_6.classList.toggle("noshow");}
function dropDown_7() {noshow_7.classList.toggle("noshow");}
function dropDown_8() {noshow_8.classList.toggle("noshow");}
function dropDown_9() {noshow_9.classList.toggle("noshow");}


// ACTION BUTTON SCROLL

function scrollDown() {
  navbar.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollUp() {
  docTop.scrollIntoView({ behavior: "smooth", block: "start" });
}

button.addEventListener("click", scrollDown);
button1.addEventListener("click", scrollDown);
homeButton.addEventListener('click', scrollUp);

const sideBar = document.getElementById("sidebar");
const sidebarText = document.getElementById("sidebarText");

//TOGGLE SIDEBAR
function openSidebar() {
    sideBar.classList.toggle("moveSidebar");
  }

  //TOGGLE LISTS

  const subList1 = document.getElementById('subList1');
  const subList2 = document.getElementById('subList2');
  const subList3 = document.getElementById('subList3');
  const subList4 = document.getElementById('subList4');
  const subList5 = document.getElementById('subList5');
  const subList0 = document.getElementById('subList0');
  const subList6 = document.getElementById('subList6');


  function showList0(){
subList0.style.display = subList0.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList1(){
subList1.style.display = subList1.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList2(){
subList2.style.display = subList2.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList3(){
subList3.style.display = subList3.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList4(){
subList4.style.display = subList4.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList5(){
subList5.style.display = subList5.style.display === 'none' ? 'inline-block' : 'none';
  }
  function showList6(){
subList6.style.display = subList6.style.display === 'none' ? 'inline-block' : 'none';
  }

  // TWITTER 
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));