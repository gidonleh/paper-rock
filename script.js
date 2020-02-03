// document.getElementById('score').innerHTML = 0;
debugger;
function whatsMyName() {

let person = prompt("Please enter your name");
if (person != null) {
    document.getElementById("playername").innerHTML = person;
}
}


function pcPick() { // this function randomly picks a value between 0-2 and returns 'scissors' for 0, 'paper' for 1, 'rock' for 2
    let pick = Math.floor(Math.random() * Math.floor(3));
    if (pick == 0) {
        return 'scissors';
    } else if (pick == 1) {
        return 'paper';
    } else if (pick == 2) {
        return 'rock';
    }
}



function game(playerChoice) { // this function checks if the player won, lost or neither and returns a string 'win', 'lose', 'even' 

    let pcChoice = pcPick();
    let result = '';

    if (playerChoice == 'paper') {

        document.getElementById('playerpick').innerHTML = '<img id="right-paper" class="fade-in" src="img/right-paper.png" alt="">';
        
        switch (pcChoice) {
            case 'paper': {
                document.getElementById('computerpick').innerHTML = '<img id="left-paper" class="fade-in" src="img/left-paper.png" alt="">';
                result = 'even';
                break;
            }
        
            case 'rock': {
                document.getElementById('computerpick').innerHTML = '<img id="left-rock" class="fade-in" src="img/left-rock.png" alt="">';
                result = 'win';
                break;
            }
            
            case 'scissors': {
                document.getElementById('computerpick').innerHTML = '<img id="left-scissors" class="fade-in" src="img/left-scissors.png" alt="">';
                result = 'lose';
                break;
            }
        }


    } if (playerChoice == 'scissors'){
        document.getElementById('playerpick').innerHTML = '<img id="right-scissors" class="fade-in" src="img/right-scissors.png" alt="">';
        switch (pcChoice) {
            case 'paper': {
                document.getElementById('computerpick').innerHTML = '<img id="left-paper" class="fade-in" src="img/left-paper.png" alt="">';
                result = 'win';
                break;
            }
                
        
            case 'rock': {
                document.getElementById('computerpick').innerHTML = '<img id="left-rock" class="fade-in" src="img/left-rock.png" alt="">';
                result = 'lose';
                break;
            }
            
            case 'scissors': {
                document.getElementById('computerpick').innerHTML = '<img id="left-scissors" class="fade-in" src="img/left-scissors.png" alt="">';
                result = 'even';
                break;
            }
        }

    } if (playerChoice == 'rock') {
        document.getElementById('playerpick').innerHTML = '<img id="right-rock" class="fade-in" src="img/right-rock.png" alt="">';
        switch (pcChoice) {
            case 'paper':{
                result = 'lose';
                document.getElementById('computerpick').innerHTML = '<img id="left-paper" class="fade-in" src="img/left-paper.png" alt="">';
                break;
            }
                
        
            case 'rock': {

                document.getElementById('computerpick').innerHTML = '<img id="left-rock" class="fade-in" src="img/left-rock.png" alt="">';
                result = 'even';
                break;
            }
                
            
            case 'scissors': {

                document.getElementById('computerpick').innerHTML = '<img id="left-scissors" class="fade-in" src="img/left-scissors.png" alt="">';
                result = 'win';
                break;
            }
                
        }

    }   

    if (result == 'win') {
        let b = document.getElementById('playerscore').innerHTML + '+ 1';
        document.getElementById('playerscore').innerHTML = eval(b);
        document.getElementById('winorlose').innerHTML = 'YOU WIN!';
    }

    if (result == 'lose') {
        let a = document.getElementById('computerscore').innerHTML + '+ 1';
        document.getElementById('computerscore').innerHTML = eval(a);
        document.getElementById('winorlose').innerHTML = 'COMPUTER WIN!';
    }

    
    if (result == 'even') {
        document.getElementById('winorlose').innerHTML = 'EVEN!';
    }
}


function reset() {
document.getElementById('computerpick').innerHTML = '';
document.getElementById('playerpick').innerHTML = '';
document.getElementById('winorlose').innerHTML = '';
document.getElementById('playerscore').innerHTML = '';
document.getElementById('computerscore').innerHTML = '';
}

