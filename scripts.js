const channels = document.querySelectorAll(".channel");

channels.forEach(channel =>{
    channel.addEventListener("click", () =>{
        channels.forEach(c => {
            c.classList.remove("active");
        })
        channel.classList.add("active");
    })
})