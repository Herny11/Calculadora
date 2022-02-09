$(function(){

    $("#calcular").click(function(){
        console.log("funciono la wea")

        var numero1 = $("#numero1").val()
        var numero2 = $("#numero2").val()

        console.log("N1 --> " + numero1, "N2 -->" + numero2)

        var resultado = sumar(numero1, numero2)

        $("#resultado").text(resultado + " 😂")

        console.log("El resultado es: "  + resultado)

        
    })
})
function sumar(numero1, numero2){
    var resultado = Number(numero1) + Number(numero2)
    return resultado
}
function mutiplicadox3(numero){

    for (i= 1; i <= 3; i++)

        console.log(i)
        resultado = resultado + numero
}