/* <i class='bx bxs-chevron-up'></i> */

let accordionHeaders = document.querySelectorAll(".accordion-header");
let accordionBodies = document.querySelectorAll(".accordion-collapse");


accordionHeaders.forEach(element => {
 element.addEventListener("click",()=>{
  let icon = document.querySelectorAll("i");
  let buttons = document.querySelectorAll("button");
   element.nextElementSibling.classList.toggle("active");
    buttons.forEach(button => {
    button.lastElementChild.classList.toggle("flipIcon");
  })
  })
});
 



