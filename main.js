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

