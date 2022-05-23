import {get} from "./actions.js";

export function log(message){
    let bouton = document.getElementById('actionbox');
    let para = document.createElement('p');
    para.innerText = message;
    bouton.prepend(para);
}

export function displayStatus(){
    let i = document.querySelectorAll('#status li');
    let m = get();
    i[0].textContent = `Vie : ${m.life} `;
    i[1].textContent = `Argent : ${m.money}`;
    i[2].textContent = `État : ${(m.awake == 'awake')? "Éveillé" : "Endormi"}`;
}

export function colorCSS(){
    let css = get();
    if(css.life < 5){
        document.getElementById('monster').style.backgroundColor = "red";
    } else {
        if(css.life < 10){
            document.getElementById('monster').style.backgroundColor = "orange";
        } else {
            if(css.life < 20){
                document.getElementById('monster').style.backgroundColor = "pink";
            } else {
                document.getElementById('monster').style.backgroundColor = "green";
            }
        }
    }
}

export function borderCSS(){
    let css = get();
    if(css.money < 5){
        document.getElementById('monster').style.border = '3px solid purple';
    } else {
        if(css.money < 15){
            document.getElementById('monster').style.border = '6px solid purple';
        } else {
            if(css.money < 25){
                document.getElementById('monster').style.border = '9px solid purple';
            } else {
                if(css.money < 35){
                document.getElementById('monster').style.border = '12px solid purple';
                }
            }
        }
    }
}