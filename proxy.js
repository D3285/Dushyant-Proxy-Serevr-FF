const btn = document.getElementById("connectBtn");

btn.addEventListener("click", () => {
    btn.innerHTML = "Connecting...";
    
    setTimeout(() => {
        btn.innerHTML = "Connected ✓";
    }, 2000);
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    }else{
        nav.style.boxShadow = "none";
    }
});