// import * as Demo from './demo.js';
import{gsap} from "gsap";
// import { Timeline } from "gsap/gsap-core";
import {redBoxAnimation} from './redBox.js';
import {blueBoxAnimation} from './blueBox.js';
import {orangeBoxAnimation} from './orangeBox.js';
// console.log(Demo);
// function Demo(){
//     var tl = gsap.timeline();
//     console.log(tl);
// }
// demo();
var mainTL = gsap "Timeline", ({paused:true});

mainTL.add(redBoxAnimation());
     .add(blueBoxAnimation());
     .addLabel("orange")
     .add(orangeBoxAnimation());
     .seek(orange);
     .play();