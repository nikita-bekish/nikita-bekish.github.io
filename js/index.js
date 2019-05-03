var x = true;
var y = false;
var z = false;
var f = false;
var h = false;

console.log(`Hi everyone on my site portfolio`);
let iAm = `My name is Nikita Bekish.`;
let str = `Novice frond-end devepoler.`;
console.log(iAm, str);
console.log(`I'm doing frond-end is above half a year, and now i want to share my result`);

window.onload = function () {
    item = document.getElementById(`AboutMe`);

    item.style.display = `block`;
}



function imgChange(id, imgX, imgY, ul) {
    var obj = document.getElementById(id);
    var list = document.getElementById(ul);

    if (x) {
        obj.src = imgX;
        obj.style.width = '8px';
        obj.style.height = '12px';
        list.style.display = "none";
    } else {
        obj.src = imgY;
        obj.style.width = '8px';
        obj.style.height = '9px';
        list.style.display = "block";
    } 
    x = !x; 
}
function skillsImgChange(id, imgY, ul) {
    var obj = document.getElementById(id);
    var list = document.getElementById(ul);
    var imgX = `img/Polygon.png`;

    if (f) {
        obj.src = imgX;
        obj.style.width = '8px';
        obj.style.height = '12px';
        list.style.display = "none";
    } else {
        obj.src = imgY;
        obj.style.width = '8px';
        obj.style.height = '9px';
        list.style.display = "block";
    } 
    f = !f; 
}
function worksImgChange(id, imgY, ul) {
    var obj = document.getElementById(id);
    var list = document.getElementById(ul);
    var imgX = `img/Polygon.png`;

    if (h) {
        obj.src = imgX;
        obj.style.width = '8px';
        obj.style.height = '12px';
        list.style.display = "none";
    } else {
        obj.src = imgY;
        obj.style.width = '8px';
        obj.style.height = '9px';
        list.style.display = "block";
    } 
    h = !h; 
}

function clearMenuItem() {
    var arr = [`AboutMe`,`WhatIdo`,`Works`,`Skills`,`Contact`];

    for (var i = 0; i < arr.length; i++) {
        item = document.getElementById(arr[i]);
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    }
}

function clickMenuItem(idTab) {
    var id = document.getElementById(idTab);

    id.style.display = "block";
}

function listView() {
    list = document.getElementById(`menu`);
    list.style.display = "block";
}

function widthExplorer () {
    id = document.getElementById(`explorer`);
    tab = document.getElementById(`tab`);
    tabLine = document.getElementById(`tab-line`);
    mainContent = document.getElementById(`main-content`); 

    if (x) {
        id.style.width = '20%';

        tab.style.left = '25%';

        tabLine.style.left = '40%';
        tabLine.style.width = '60%';

        mainContent.style.left = '25%';
        mainContent.style.width = '75%';
    } else {
        id.style.width = '0%';

        tab.style.left = '5%';


        tabLine.style.left = '20%';
        tabLine.style.width = '80%';

        mainContent.style.left = '5%';
        mainContent.style.width = '95%';
    }
    x = !x;
}

function showItems() {
    block = document.getElementById(`works-items`);

    if (y) {
        block.style.display = `none`;
    } else {
        block.style.display = `block`;
    }
    y = !y;
}

function showSkills() {
    block = document.getElementById(`skills-items`);

    if (z) {
        block.style.display = `none`;
    } else {
        block.style.display = `block`;
    }
    z = !z;
}

function changeContent(realContent) {
    var arr = [`.about-me-main-content`,`.contact-main-content`, `.works-main-content`, `.what-i-do-content`];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != realContent) {
            item = document.querySelectorAll(arr[i] + ` > *`);
            for (var j = 0; j < item.length; j++) {
                item[j].style.display = `none`;
            }
        }
    }

    real = document.querySelectorAll(realContent + ` > *`);

    for (var i = 0; i < real.length; i++) {
        real[i].style.display = `block`;
    }

    
}

function borderBottom(id) {
    item = document.getElementById(id);

    item.style.borderBottom = `1px solid #7E7E7E`;

}

function clearBorderBottom() {
    var arr = [`name`,`eMail`,`message`,`send`];

    for (var i = 0; i < arr.length; i++) { 
        item = document.getElementById(arr[i]);

        if (item.style.border != `none`) {
            item.style.border = `none`;
        } 
    }
}

function changePowerShellContent(realContent) {
    var arr = [`.name-content`, `.email-content`, `.message-content`, `.send-content`];
    
  
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != realContent) {
            item = document.querySelectorAll(arr[i]);
            for (var j = 0; j < item.length; j++) {
                item[j].style.display = `none`;
            }
        }
    }

    real = document.querySelectorAll(realContent);

    for (var i = 0; i < real.length; i++) {
        real[i].style.display = `block`;
    }
}

function consoleSpan(input, id) {
    span = document.getElementById(id);

    span.innerHTML = input.value;
}
function putInfoInInput() {
    name = document.getElementById(`nameInput`);

    email = document.getElementById(`emailInput`);
    shadyEmail = document.getElementById(`shadyEmail`);

    text = document.getElementById(`messageTextarea`);
    shadyText = document.getElementById(`shadyTextInfo`);

    shadyEmail.value =  email.value;
    shadyText.value = text.value;
}


$(`#btn`).click(function() {
    $(`#shadyBtn`).trigger("click");
})

/*function runScript(input, id, e) {
    span = document.getElementById(id);
    input = document.getElementById(input);
    if (e.keyCode == 13) {
        span.innerHTML = input.value;
    }
}*/

var typed = new Typed('#typed', {
    strings: [
        '<i class="aqua">function</i> <span class="green">portfolio</span> <span class="white">() {</span>'
    ],
    typeSpeed: 20,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed1', {
    strings: [
        '<i class="aqua">console</i><span class="aqua">.log</span>(<span class="gold">"Hi everyone on my site portfolio"</span>);'
    ],
    typeSpeed: 20,
    startDelay: 1200,
    showCursor: false,
    loop: false
})
var typed2 = new Typed('#typed2', {
    strings: [
        ');'
    ],
    typeSpeed: 0,
    startDelay: 3000,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed3', {
    strings: [
        '<i class="aqua">let</i> I am = <span class="gold">"My name is Nikita Bekish."</span>;'
    ],
    typeSpeed: 20,
    startDelay: 3300,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed4', {
    strings: [
        '<i class="aqua">let</i> str = <span class="gold">"Novice frond-end devepoler."</span>;'
    ],
    typeSpeed: 20,
    startDelay: 4800,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed5', {
    strings: [
        '<i class="aqua">function</i> <span class="green">getInfoAboutMe</span> <span class="white">() {</span>'
    ],
    typeSpeed: 20,
    startDelay: 6200,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed6', {
    strings: [
        '<i class="aqua">let</i> years = <span class="purple">0</span>;'
    ],
    typeSpeed: 20,
    startDelay: 7400,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed7', {
    strings: [
        '<span class="aqua"><i>console</i>.log</span>(<span class="gold">"I am start learning frond-end in the mid of 2018, and now i want to share my results"</span>);'
    ],
    typeSpeed: 20,
    startDelay: 8000,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed8', {
    strings: [
        '<span class="red">for</span> (<span class="aqua">var</span> days = <span class="purple">0</span>; days <= <span class="purple">365</span>; days<span class="red">++</span>) {'
    ],
    typeSpeed: 20,
    startDelay: 11500,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed9', {
    strings: [
        '<span class="aqua"><i>console</i>.log</span>(<span class="gold">"work hard!"</span>); <span class="grey">// I am here :)</span>'
    ],
    typeSpeed: 20,
    startDelay: 13000,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed10', {
    strings: [
        ');'
    ],
    typeSpeed: 20,
    startDelay: 14800,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed11', {
    strings: [
        'years<span class="red">++</span>;'
    ],
    typeSpeed: 20,
    startDelay: 15000,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed12', {
    strings: [
        ');'
    ],
    typeSpeed: 20,
    startDelay: 15500,
    showCursor: false,
    loop: false
})
var typed1 = new Typed('#typed13', {
    strings: [
        '<span class="aqua"><i>console</i>.log</span>(<span class="gold">"On this site you can get to know me and my works better"</span>);'
    ],
    typeSpeed: 20,
    startDelay: 15700,
    showCursor: false,
    loop: false
})




