const btn = document.querySelector("button");
const input = document.querySelector("#imp");
const btnn = document.querySelector(".btsubmit");
const h1 = document.querySelector(".result");
const h2 = document.querySelector(".yourguess");
const win = document.querySelector(".notify");
const rest = document.querySelector(".rest")

let max = 10;
let random;
function getEandomNumber() {
    random = Math.floor(Math.random() * max);
}
let inpt;
input.addEventListener("keyup", (e) => {
    inpt = e.target.value;
})

btn.addEventListener("click", () => {
    getEandomNumber();
    if (!inpt || inpt >= max)
        h2.textContent = `Make sure your number is no greater than or equal to, ${max}`
    else {
        if (parseInt(inpt) === random) {
                h1.textContent = `Your guess is right, the number guess is, ${random}`
                h2.textContent = `Your number guess is, ${inpt}`
                h1.style.color = "green"
                win.style.display="block"
                rest.textContent=`YOU WON`
        }
        else {
                h1.textContent = `Your guess is wrong, the number guess is, ${random}`
                h2.textContent = `Your number guess is, ${inpt}`
                h1.style.color = "red"
        }
    }
})
getEandomNumber()