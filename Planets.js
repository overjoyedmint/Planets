const mercury = document.getElementById("mercury");
const sections = document.getElementsByTagName("section");
const buttons = document.getElementsByTagName("button");
const buttonArray = Array.prototype.slice.call(buttons);
const sectionArray = Array.prototype.slice.call(sections);
const main = document.getElementById('main')
const hamb = document.getElementById('hamb')
const planets = document.getElementById('planets')


function myFunction(){
 
     main.style.display = "block";
  

}


window.onload = function(){
   sectionArray.forEach((section) => {
  section.style.display = "none";
   main.style.display = "block";

   })

}

buttonArray.forEach((button) => {
  button.addEventListener("click", () => {

    sectionArray.forEach((section) => {
      section.style.display = "none";

      if (button.innerText === section.classList.value) {
        section.style.display = "block";
      }
     
    });

       if ((planets.classList = "show")) {
         planets.classList.remove("show");
       }

  }
  
   
);
});


myFunction()



hamb.addEventListener('click', ()=>{
  planets.classList.toggle('show')

  
})



