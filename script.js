//Initializing the players//

let index=1;
    const buttons = Array.from(document.querySelectorAll("button"));
          for(let i=0;i<buttons.length;i++){
            buttons[i].textContent="";
            buttons[i].addEventListener("click",()=>{
                display(buttons[i]);
                checkWinner(buttons);
            })
         }



    function display(button){
        
        let x="X";
           if(button.textContent==""&&index%2==0){
            button.textContent="X"
            index++;
           }
          else if(button.textContent==""){
            button.textContent="O";
            index++;
           }

    } 
 

    function checkWinner(buttons) {
  if (
    (buttons[0].textContent === "X" &&
      buttons[1].textContent === "X" &&
      buttons[2].textContent === "X") ||
    (buttons[0].textContent === "X" &&
      buttons[3].textContent === "X" &&
      buttons[6].textContent === "X") ||
    (buttons[0].textContent === "X" &&
      buttons[4].textContent === "X" &&
      buttons[8].textContent === "X") ||
    (buttons[6].textContent === "X" &&
      buttons[7].textContent === "X" &&
      buttons[8].textContent === "X") ||
    (buttons[3].textContent === "X" &&
      buttons[4].textContent === "X" &&
      buttons[5].textContent === "X") ||
    (buttons[2].textContent === "X" &&
      buttons[4].textContent === "X" &&
      buttons[6].textContent === "X") ||
    (buttons[1].textContent === "X" &&
      buttons[4].textContent === "X" &&
      buttons[7].textContent === "X") ||
    (buttons[1].textContent === "X" &&
      buttons[5].textContent === "X" &&
      buttons[8].textContent === "X")
  ) {
    alert("One won!");
  } else if (
    (buttons[0].textContent === "O" &&
      buttons[1].textContent === "O" &&
      buttons[2].textContent === "O") ||
    (buttons[0].textContent === "O" &&
      buttons[3].textContent === "O" &&
      buttons[6].textContent === "O") ||
    (buttons[0].textContent === "O" &&
      buttons[4].textContent === "O" &&
      buttons[8].textContent === "O") ||
    (buttons[6].textContent === "O" &&
      buttons[7].textContent === "O" &&
      buttons[8].textContent === "O") ||
    (buttons[3].textContent === "O" &&
      buttons[4].textContent === "O" &&
      buttons[5].textContent === "O") ||
    (buttons[2].textContent === "O" &&
      buttons[4].textContent === "O" &&
      buttons[6].textContent === "O") ||
    (buttons[1].textContent === "O" &&
      buttons[4].textContent === "O" &&
      buttons[7].textContent === "O") ||
    (buttons[1].textContent === "O" &&
      buttons[5].textContent === "O" &&
      buttons[8].textContent === "O")
  ) {
    alert("Two won!");
  }
}