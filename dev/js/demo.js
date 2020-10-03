import{gsap} from "gsap";
var blueSpeed = 1;
gsap.to(".red-box",{duration: blueSpeed,x:300});
gsap.to(".blue-box",{duration: blueSpeed,x:300, delay: 1});
gsap.to(".orange-box",{duration: blueSpeed,x:300, delay: 2});
// gsap.to(".red-box",{duration: 2,alpha:0});