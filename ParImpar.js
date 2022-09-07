let valor = 0

 valor = parseInt (prompt("Digite um número :"))

 console.log (ParOuImpar(valor))

 function ParOuImpar(Numeropar,Numeroimpar){
    
        if (valor % 2 == 0) {
            Numeropar++
            return true
        } 
        else   {
            Numeroimpar++
            return false
        }
    }
    


 