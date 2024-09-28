let terget = document.getElementById('targetP');

let typewriter = new Typewriter(terget, {
    loop: true,

});

typewriter

    .typeString('Developer')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString(' Designer ')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString('Angular ')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString(' JavaScript ')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString("Problem Solving ")
    .pauseFor(1500)
    .deleteChars(10)
    .start();


let linkS = document.querySelectorAll('#link')


let asideBar = document.querySelector('.asideNav');
let shoeBtn = document.querySelector('.show');


linkS.forEach(link => {
    link.addEventListener('click', function () {



    })
})

function showMenue() {

    asideBar.style.display = "flex";
}

function closeMenue() {

    asideBar.style.display = "none";
    

}