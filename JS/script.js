Id('fab').onclick = () => {
    Id('nav').classList.toggle('active')
    Id('dark').classList.toggle('active')
}

Id('dark').onclick = () => {
    Id('nav').classList.toggle('active')
    Id('dark').classList.toggle('active')
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

for (let i=0; i<Class('navbtn').length; i++){

    let navbtn = Class('navbtn')[i]
    let name = navbtn.innerHTML.trim()
    let top;

    if (i > 0){
        top = Id(name).getBoundingClientRect().top
    }else{
        top = 0
    }

    console.log(top)

    navbtn.onclick = () => {
        window.scroll({
            top: top,
            behavior: "smooth"
        })
    }
}