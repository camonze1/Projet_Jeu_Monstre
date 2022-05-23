import * as ui from "./ui.js";
import * as actions from "./actions.js";

let show = document.getElementById('b6');
let mess = document.getElementById('actionbox');
let run = document.getElementById('b2');
let fight = document.getElementById('b3');
let work = document.getElementById('b7');
let eat = document.getElementById('b5');
let sleep = document.getElementById('b4');
let newlife = document.getElementById('b1');
let kill = document.getElementById('k');

export function start() {
    actions.init("Audrey Fleurot", 30, 30, "awake");
    ui.displayStatus();
    ui.colorCSS();
    ui.borderCSS();
    show.addEventListener('click', () => actions.showMe());
    mess.addEventListener('click', () => ui.log("Salut mon pote !"));
    run.addEventListener('click', () => actions.run());
    fight.addEventListener('click', () => actions.fight());
    work.addEventListener('click', () => actions.work());
    eat.addEventListener('click', () => actions.eat());
    sleep.addEventListener('click', () => actions.sleep());
    newlife.addEventListener('click', () => actions.newLife());
    kill.addEventListener('click', () => actions.kill());

    //jeu mode auto
    setInterval(actions.randomActions, 12000);
}
