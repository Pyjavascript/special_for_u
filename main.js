let prompt_ans = prompt("What is your name ✨💖");
let title = document.querySelector("title");
title.innerHTML = `💖For_U_${prompt_ans}`;

let display_content = () => {
    let img = document.querySelector(".img"),
    yes = document.querySelector(".yes"),
    txt = document.querySelector(".txt"),
    No = document.querySelector(".no");

let arr = [
    {
        num:1,
        img:"assets/ask.gif",
        que:"Can I ask you something " + prompt_ans
    },
    {
        num:2,
        img:"assets/promise.gif",
        que:"Promise me! you'll keep it secret"
    },
    {
        num:3,
        img:"assets/click.gif",
        que:"Just one more click..."
    },
    {
        num:4,
        img:"assets/care.gif",
        que:"I want to care you! Will you allow me"
    },
    {
        num:5,
        img:"assets/love.gif",
        que:"I Love you "+prompt_ans+" ✨💖"
    },

];
let i = 0;
window.addEventListener("load",() => {
    img.src=arr[i].img;
    txt.innerText = arr[i].que;
})
yes.addEventListener("click",() => {
    i++;
    img.src=arr[i].img;
    txt.innerText = arr[i].que;
    console.log(i)

})
No.addEventListener("click",() => {
    img.src="assets/broke.gif";
    txt.innerText= "You broke my little heart :(";

})
}
display_content();