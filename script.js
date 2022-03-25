import Toast from "./Toast.js"

document.querySelector("button").addEventListener("click", () => {
    
    
    new Toast({
        text:"Hello World",
        autoClose: 3000,
        position: "bottom-center",
        variant: "error",
        style: "font-weight: bold;",
        pauseOnHover: true,
        pauseOnFocusLoss: true
    })


})


