document.getElementById('theme').addEventListener('click', function () {
    document.getElementById('Title').classList.toggle('darktheme');
    document.getElementById('nav').classList.toggle('mdarktheme');
    document.getElementById('about').classList.toggle('mlighttheme');
    document.getElementById('Down').classList.toggle('lighttheme');
    document.getElementById('fdown').classList.toggle('lighttheme');

});
function toggleElements() {
    var element1 = document.getElementById('p-en')
    var element2 = document.getElementById('p-ar')
    var element3 = document.getElementById('p-ar-about')
    var element4 = document.getElementById('p-en-about')
    var element5 = document.getElementById('nav-en-1')
    var element6 = document.getElementById('nav-en-2')
    var element7 = document.getElementById('nav-en-3')
    var element8 = document.getElementById('nav-ar-1')
    var element9 = document.getElementById('nav-ar-2')
    var element10 = document.getElementById('nav-ar-3')
    var element11 = document.getElementById('nav2-en-1')
    var element12 = document.getElementById('nav2-en-2')
    var element13 = document.getElementById('nav2-en-3')
    var element14 = document.getElementById('nav2-ar-1')
    var element15 = document.getElementById('nav2-ar-2')
    var element16 = document.getElementById('nav2-ar-3')

    


    
    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
        element4.style.display = "block";
        element3.style.display = "none";
        element5.style.display = "block";
        element8.style.display = "none";
        element6.style.display = "block";
        element9.style.display = "none";
        element7.style.display = "block";
        element10.style.display = "none";
        element11.style.display = "block";
        element14.style.display = "none";
        element12.style.display = "block";
        element15.style.display = "none";
        element13.style.display = "block";
        element16.style.display = "none";

    } else {
        element1.style.display = "none";
        element2.style.display = "block";
        element4.style.display = "none";
        element3.style.display = "block";
        element5.style.display = "none";
        element8.style.display = "block";
        element6.style.display = "none";
        element9.style.display = "block";
        element7.style.display = "none";
        element10.style.display = "block";
        element11.style.display = "none";
        element14.style.display = "block";
        element12.style.display = "none";
        element15.style.display = "block";
        element13.style.display = "none";
        element16.style.display = "block";

    }
}



