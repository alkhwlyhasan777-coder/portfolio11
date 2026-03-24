
let scrollToTop = document.querySelector(".scroll-to-top")
window.addEventListener('scroll',  () =>{
    if (window.scrollY > 1000) {
        scrollToTop.style.visibility= 'visible';
    } else {
        scrollToTop.style.visibility= 'hidden';
    }
    scrollToTop.addEventListener("click", function scrollto() {
    scrollTo(0 , 0)
    });
    hiddUl() 
});
///////////////////////////////
let body = document.querySelector("body")
let night = document.querySelector(".night-morn :first-child");
night.addEventListener("click",  () => {
    night.style.display = 'none'
    morn.style.display = 'block'
    body.classList.remove('body')
    body.style.color = 'rgb(29, 24, 24) '
    scrollToTop.style.background = 'linear-gradient(-85deg , #cbdeed , #cdced7 , #b2aaaa , #4f5fa9) ';
});
let morn = document.querySelector('.night-morn :last-child')
morn.addEventListener("click",  () => {
    night.style.display = 'block';
    morn.style.display = 'none';
    body.style.color = 'rgb(251, 251, 251) '
    body.classList.add('body')
    scrollToTop.style.background = 'linear-gradient(-85deg , #103C5D , #101A7C , #021C33 , #011049)';
});
////////////////////////////////////////////////////////////////////////
let navbar = document.querySelector(".hidden")
nav.addEventListener('click', () => {
    navbar.style.display = 'block'
    scrollTo(0 , 0)
});
///////////////

let liHidd =document.querySelectorAll("#ul-hidd .li-hidd")
console.log(liHidd)
function hiddUl() {
    navbar.style.display ='none'
}
///////////////////////////////////////////////////////////////////////























































// // const boxes = document.querySelectorAll('.box');

// // const observer = new IntersectionObserver(
// //   entries => {
// //     entries.forEach(entry => {
// //       if (entry.isIntersecting) {
// //         entry.target.classList.add('show');
// //       }
// //     });
// //   },
// //   {
// //     threshold: 0.6
// //   }
// // );

// // boxes.forEach(box => observer.observe(box));
// const boxes = document.querySelectorAll('.box');

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//       } else {
//         entry.target.classList.remove('show');
//       }
//     });
//   },
//   {
//     threshold: 0.2
//   }
// );

// boxes.forEach(box => observer.observe(box));
