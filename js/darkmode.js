const themeBtn =
document.querySelector(".theme-btn");

const icon =
themeBtn.querySelector("i");


themeBtn.addEventListener(
"click", ()=>{

    document.body.classList.remove("theme-switching");
    void document.body.offsetWidth;

    const finishThemeSwitch = (e) => {

        if(e.animationName === "themeWash"){

            document.body.classList.remove("theme-switching");
            document.body.removeEventListener("animationend",finishThemeSwitch);

        }

    };

    document.body.addEventListener("animationend",finishThemeSwitch);

    requestAnimationFrame(()=>{

        document.body.classList.add("theme-switching");

    });

    document.body.classList.toggle("light-theme");


    icon.classList.add("rotate");


    setTimeout(()=>{

        icon.classList.remove("rotate");

    },500);

});
