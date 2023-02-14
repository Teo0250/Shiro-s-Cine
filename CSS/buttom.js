var inturruptor = true    /// valor para ver se está escondido

function menuLateral(){

    if(inturruptor == true){
        document.getElementById("menuLado").style.right = 0; /// para o menu aparecer
        document.getElementById("icon").innerHTML = "close";   
        inturruptor = false
    }else{
        document.getElementById("menuLado").style.right = "-140px";  /// para o menu se esconder 
        document.getElementById("icon").innerHTML = "menu";  
        inturruptor = true 
    }
console.log(inturruptor)
}