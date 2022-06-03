function non(){
    location.href = "/Admin/" 
}

function supp(id) {  
    location.href ='/Admin/delete/' + id    
}

let modal = document.querySelector('.modal .boutton')
console.log(modal);

let modale = document.querySelector('#modal');
let closer = document.querySelector('#closer');



function oppen (id){
    modale.style.display = "block";

    let btnok = document.createElement("button")
    let btnon = document.createElement("button")

    btnok.classList.add("btnredirect")
    btnon.classList.add("btnredirect")
    btnok.setAttribute("onclick","supp("+ id +")")
    btnon.setAttribute("onclick","non()")


    let text1 = document.createTextNode("Oui"); 
    let text2 = document.createTextNode('Non') 
    
    btnok.appendChild(text1)
    btnon.appendChild(text2)

    modal.appendChild(btnok)
    modal.appendChild(btnon)


  modal.innerHTML= " "
}



closer.onclick = function(e) {
    e.preventDefault()
    modale.style.display = "none";
} 

console.log('bonjour');