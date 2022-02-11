alert("BIENVENIDO A LA CALCULADORA 🧮")
var num = "";
function write_display(number)
{
    num = num + $(number).val();
    $("#number").val(num);   
}
var num1 = "";
var operation = "";
function calculate(symbol)
{
    operation = $(symbol).val();
    num1 = num;
    num = "";
    $("#number").val("");

}
function oper()
{
    var op = operation;
    var result = 0;
    if (num == "" || num == 0)
    {
        
       clean();
        
    }
    else
    {
        switch (op) 
        { 
            case '÷':
                result = Number(num1) / Number(num);
                num = result;
                $("#number").val(result);
                
                break;
            case 'x': 
            
                result = Number(num1) * Number(num);
                num = result;
                $("#number").val(result);
                
                
                break;
            case '+': 
                result = Number(num1) + Number(num);
                num = result;
                $("#number").val(result);
                
                break;
            case '-': 
                result = Number(num1) - Number(num);
                num = result;
                $("#number").val(result);
                
                break;	

        }
    }
}
function clean()
{
    num = ""
    num1 = ""
    $("#number").val("");

}