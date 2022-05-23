import {log} from "./ui.js";
import {displayStatus} from "./ui.js";
import {colorCSS} from "./ui.js";
import {borderCSS} from "./ui.js";

let name;
let money;
let awake;
let life;

export function get(){
    return {
        name : name,
        money : money,
        life : life,
        awake : awake
    };
}

export function init(n,m,l,a){
    name = n;
    money = m;
    life = l;
    awake = a;
}

export function showMe(){
    let m = get();
    alert(`Nom : ${m.name}\nVie : ${m.life}\nArgent : ${m.money}\nEtat : ${m.awake}`);
}

export function run(){
    let m = get();
    if(m.life != 0){
        if((m.life > 1) && (m.awake === 'awake')){
            init(m.name, m.money, m.life - 1, m.awake);
            log(`${m.name} a couru et a perdu 1 point de vie`);
        } else {
            init(m.name, m.money,  m.life, m.awake);
            log(`Désolée je peux pas courir j'suis soit au bord de la mort soit endormi`);
        }
    } else {
        log(`Je suis mort je fais pas ton truc là`);
    }
    displayStatus();
    colorCSS();
    borderCSS();
}

export function fight(){
    let m = get();
    if(m.life != 0){
        if((m.life > 3) && (m.awake === 'awake')){
            init(m.name, m.money, m.life - 3, m.awake);
            log(`${m.name} s'est battu et a perdu 3 point de vie`);
        } else {
            init(m.name, m.money, m.life, m.awake);
            log(`Désolée je peux pas me battre j'\suis soit au bord de la mort soit endormi`);   
        }
    } else {
        log(`Je suis mort je fais pas ton truc là`);
    }
    displayStatus();
    colorCSS();
    borderCSS();
}

export function work(){
    let m = get();
    if(m.life != 0){
        if((m.life > 1) && (m.awake === 'awake')){
            init(m.name, m.money + 2, m.life - 1, m.awake);
            log(`${m.name} a travaillé, a perdu 1 point de vie mais a gagné 2 argents`);
        } else {
            init(m.name, m.money, m.life, m.awake);
            log(`Désolée je peux pas travailler je suis soit mort soit endormi`);   
        }
    } else {
        log(`Je suis mort je fais pas ton truc là`);
    }
    displayStatus();
    colorCSS();
    borderCSS();
}

export function eat(){
    let m = get();
    if(m.life != 0){
        if((m.money >= 3) && (m.awake === 'awake')){
            init(m.name, m.money - 3, m.life + 2, m.awake);
            log(`${m.name} a manger, a perdu 3 argent mais a gagner 2 points de vie`);
        } else {
            init(m.name, m.money, m.life, m.awake);
            log(`Désolée je peux pas manger jsuis fauché ou endormi`);   
        }
    } else {
        log(`Je suis mort je fais pas ton truc là`);
    }
    displayStatus();
    colorCSS();
    borderCSS();
}

export function sleep(){
    let m = get();
    if(m.life != 0){
        if(m.awake === 'awake'){
            init(m.name, m.money , m.life , 'asleep');
            log(`${m.name} va pioncer`);
            displayStatus();
            setTimeout( () => {
                init(m.name, m.money , m.life + 1, 'awake');
                log(`${m.name} a fini de pioncer`);
                displayStatus();
            }, 1000 * 10);
        } else {
            log('Je dors déja t\'es bête ou quoi ?');
        }
    } else {
        log(`Je suis mort je fais pas ton truc là`);
    }
    colorCSS();
    borderCSS();
}

export function kill(){
    let m = get();
    if(m.life != 0){
        init(m.name, 0, 0 , 'kill');
        log(`Tu viens de tuer ${m.name}, espèce de malade`);
        displayStatus();
        colorCSS();
        borderCSS();
        let i = document.querySelectorAll('#status li');
        let j = get();
        i[2].textContent = `État : ${(j.awake == 'kill')? "Mort......" : "awake"}`;
    } else {
        init(m.name, 0, 0 , 'kill');
        log(`${m.name} est déjà mort... meurtrier va`);
        displayStatus();
        colorCSS();
        borderCSS();
        let i = document.querySelectorAll('#status li');
        let j = get();
        i[2].textContent = `État : ${(j.awake == 'kill')? "Mort......" : "awake"}`;
    }
}

export function newLife(){
    let m = get();
    if(m.life == 0){
        init(m.name, 30, 30, 'awake');
        log(`Tu viens de réanimer ${m.name}, t'es pas si méchant.`);
        displayStatus();
        colorCSS();
        borderCSS();
    } else {
        init(m.name, m.money, m.life, m.awake);
        log(`Je suis encore vivant pourquoi tu veux me donner une nouvelle vie ???`);
        displayStatus();
        colorCSS();
        borderCSS();
    }
}

let r_actions = [
    () => {run() }, 
    () => {fight() }, 
    () => {work() }, 
    () => {eat() }, 
    () => {sleep() }
]

export function randomActions(){
    let m = get();
    if(m.life!=0){
        init(m.name, m.money, m.life - 1, m.awake);
        let temp = Math.random() * (r_actions.length - 1);
        r_actions[Math.round(temp)]();
        displayStatus();
        borderCSS();
    }
}