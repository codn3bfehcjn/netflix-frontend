// 1st event listener
let b1 = document.querySelector(".plus");
let q1 = document.querySelector(".q");
b1.addEventListener("click", () => {
    let n = document.createElement("div");
    n.innerText = "Netflix is a streaming service";
    q1.appendChild(n);
    b1.style.display = "none";
    let p = document.createElement("span")
    p.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    n.appendChild(p);
    p.addEventListener("click", () => {
        n.style.display = "none";
        b1.style.display = "inline";
        q1.appendChild(b1);
    });
});

// 2nd event listener
let b2 = document.querySelector(".plus2");
let q2 = document.querySelector(".q1");
b2.addEventListener("click", () => {
    let n = document.createElement("div");
    n.innerText = "Netflix is a streaming service";
    q2.appendChild(n);
    b2.style.display = "none";
    let p = document.createElement("span");
    p.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    n.appendChild(p);
    p.addEventListener("click", () => {
        n.style.display = "none";
        b2.style.display = "inline";
        q2.appendChild(b2);
    });
});

// 3rd event listener
let b3 = document.querySelector(".plus3");
let q3 = document.querySelector(".q2");
b3.addEventListener("click", () => {
    let n = document.createElement("div");
    n.innerText = "Netflix is a streaming service";
    q3.appendChild(n);
    b3.style.display = "none";
    let p = document.createElement("span");
    p.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    n.appendChild(p);
    p.addEventListener("click", () => {
        n.style.display = "none";
        b3.style.display = "inline";
        q3.appendChild(b3);
    });
});
// 4th event listener
let b4 = document.querySelector(".plus4");
let q4 = document.querySelector(".q3");
b4.addEventListener("click", () => {
    let n = document.createElement("div");
    n.innerText = "Netflix is a streaming service";
    q4.appendChild(n);
    b4.style.display = "none";
    let p = document.createElement("span");
    p.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    n.appendChild(p);
    p.addEventListener("click", () => {
        n.style.display = "none";
        b4.style.display = "inline";
        q4.appendChild(b4);
    });
});

// 5th event listener
let b5 = document.querySelector(".plus5");
let q5 = document.querySelector(".q4");
b5.addEventListener("click", () => {
    let n = document.createElement("div");
    n.innerText = "Netflix is a streaming service";
    q5.appendChild(n);
    b5.style.display = "none";
    let p = document.createElement("span");
    p.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    n.appendChild(p);
    p.addEventListener("click", () => {
        n.style.display = "none";
        b5.style.display = "inline";
        q5.appendChild(b5);
    });
});
