const sidebarDietHandle = () => {
    const dietDiv =  document.getElementById('diet');
    const divStatus = document.getElementById('diet').style.display;

    if(divStatus == 'block'){
         dietDiv.style.display = 'none'
    }else {
     dietDiv.style.display = 'block'
    }
 }

 const sidebarAllegiesHandle = () => {
    const allergiesDiv =  document.getElementById('allergies');
    const divStatus = document.getElementById('allergies').style.display;

    if(divStatus == 'block'){
        allergiesDiv.style.display = 'none'
    }else {
        allergiesDiv.style.display = 'block'
    }
 }

 const sidebarCusinesHandle = () => {
    const cuisineDiv =  document.getElementById('cuisine');
    const divStatus = document.getElementById('cuisine').style.display;

    if(divStatus == 'block'){
        cuisineDiv.style.display = 'none'
    }else {
        cuisineDiv.style.display = 'block'
    }
 }

 const sidebarGoalHandle = () => {
    const goalDiv =  document.getElementById('goal');
    const divStatus = document.getElementById('goal').style.display;

    if(divStatus == 'block'){
        goalDiv.style.display = 'none'
    }else {
        goalDiv.style.display = 'block'
    }
 }

 // Script for carousel by leo and daniel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// login javascript starts here

const forms = document.querySelector(".formsy"),
       pwShowHide = document.querySelectorAll(".eye-icon"),
       links = document.querySelectorAll(".link");

// console.log(forms, pwShowHide,links )
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", () =>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        // console.log(pwFields)
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-hide","bx-hide");
        })
    })

})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();// prevent form SubmitEvent
        forms.classList.toggle("show-signup");
    })
})

// login javscript ends here

/* dietary script */

function myFunction() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.height="400px"
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myOat() {
    var x = document.getElementById("oat");
    if (x.style.display === "none") {
        x.style.height="400px"
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myPlantain() {
    var x = document.getElementById("plantain");
    if (x.style.display === "none") {
        x.style.height="400px"
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
