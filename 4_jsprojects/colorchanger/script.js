const buttons = document.querySelectorAll(".button");

let background = document.querySelector("body");



buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
        background .style.backgroundColor = e.target.id;   
    }
    if (e.target.id === 'red') {
        background .style.backgroundColor = e.target.id;   
    }
    if (e.target.id === 'yellow') {
        background .style.backgroundColor = e.target.id;   
    }
    if (e.target.id === 'pink') {
        background .style.backgroundColor = e.target.id;   
    }

    // switch () {
    //     case (e.target.id === 'red'):
    //         background.style.backgroundColor = e.target.id
    //         break;

    //         case (e.target.id === 'grey'):
    //         background.style.backgroundColor = e.target.id
    //         break;

    //         case (e.target.id === 'yellow'):
    //         background.style.backgroundColor = e.target.id
    //         break;

    //         case (e.target.id === 'pink'):
    //         background.style.backgroundColor = e.target.id
    //         break;
    
       
    // }
  })
})