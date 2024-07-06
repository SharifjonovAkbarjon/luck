    const title = document.querySelector(".title")
    const btn = document.querySelector(".btn")
    const game = document.querySelector(".sidebar")
    const but = document.querySelector(".but")




    const TEL_NUMBERS = [
        "+998 97 254 33 54",
        "+998 97 255 33 55",
        "+998 91 456 43 24",
        "+998 90 123 45 67",
        "+998 90 236 54 76",
        "+998 91 466 42 72",
        "+998 94 562 54 36",
        "+998 97 789 56 32",
        "+998 94 496 63 58",
        "+998 93 489 65 21",
        "+998 91 123 65 98",
        "+998 90 784 58 69",
        "+998 95 019 06 68",
        "+998 94 005 06 55",
        "+998 90 007 08 45",
        "+998 93 000 48 48",
        "+998 94 555 99 88",
        "+998 91 111 22 33",
        "+998 97 111 11 11",
        "+998 94 222 22 22",
        "+998 93 333 33 33",
        "+998 99 999 99 99",
    ]

    console.log( TEL_NUMBERS.length);

        btn.addEventListener("click", ()=>{
            btn.setAttribute("disabled", true)
            let interval = setInterval(()=>{
                let index = Math.floor( Math.random() * TEL_NUMBERS.length )
                title.textContent = TEL_NUMBERS[index]
            }, 50)
            
            setTimeout(()=>{
                clearInterval(interval)
                btn.removeAttribute("disabled")
                // title.textContent = "+998 97 000 00 01"
            }, 2500)
        btn.addEventListener("mouseenter", ()=>{
            game.classList.toggle("show")
        })

      })



      but.addEventListener("mouseenter", ()=>{
        console.log("mouse enter");
        sidebarOpen()   
       })
    

        function sidebarOpen(){
            game.classList.toggle("show")
        }
























// duv{
//     const sidebar = document.querySelector(".sidebar")
// const btn = document.querySelector(".btn")


// btn.addEventListener("click", function(){
//     console.log("click event");
// })

// btn.addEventListener("dblclick", ()=>{
//     console.log("double click");
   
// })

// btn.addEventListener("mouseenter", ()=>{
//     console.log("mouse enter");
//     sidebarOpen()   
// })

// btn.addEventListener("mouseleave", ()=>{
//     console.log("mouse leave");
//     sidebarOpen()   

// })

// btn.addEventListener("mousemove", ()=>{
//     console.log("mouse move");

// })


// function sidebarOpen(){
//     sidebar.classList.toggle("show")
//     // if(sidebar.classList.contains("show")){
//     //     sidebar.classList.remove("show")
//     // }else{
//     //     sidebar.classList.add("show")
//     // }
// }


