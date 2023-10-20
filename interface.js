function type_writer(elemento,textoArray){
    elemento.style.display = "block"
    elemento.innerHTML = '' 
    setTimeout(() => {
        textoArray.forEach((letra,i) => {
            setTimeout(function (){
                elemento.innerHTML += letra
            }, 80*i)
        })
    }, 2000)
    
}
var actual = 0
var text1 = document.getElementById("p-content")
var text2 = document.getElementById("p-content_2")
var text3 = document.getElementById("p-content_3")
var logo = document.getElementById("logo")

var textoArray1 = text1.innerHTML.split('');
var textoArray2 = text2.innerHTML.split('');
var textoArray3 = text3.innerHTML.split("")

function show_and_type(text,textoArray){
    type_writer(text,textoArray)
    setTimeout(() => text.style.display = "none",12000)
}

setTimeout(() => {
    show_and_type(text1,textoArray1)
    setTimeout(() => {
        show_and_type(text2,textoArray2)
        setTimeout(() => {
            show_and_type(text3,textoArray3)
            setTimeout(() => logo.style.display = "block", 25000)
        }, 19000)
    }, 15000)
},3000)

// setTimeout(first_box(text,textoArray1),)



//setTimeout(type_writer(text2,textoArray2), 14000)
