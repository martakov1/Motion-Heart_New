import{gsap} from "gsap";
var blueSpeed = 1;
var demoTimeline = gsap.timeline();
demoTimeline.to(".red-box",{duration: blueSpeed,x:300})
demoTimeline.to(".blue-box",{duration: blueSpeed,x:300, delay: 1});
demoTimeline.to(".orange-box",{duration: blueSpeed,x:300, delay: 2});
// gsap.to(".red-box",{duration: 2,alpha:0});