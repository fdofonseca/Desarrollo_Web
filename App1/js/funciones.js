//Cálculamos el peso ideal
function calcularPesoIdeal(){
    //Obtenemos la edad y el peso actual ingresado por el usuario
    var edad        = document.getElementById("txt_edad").value;
    var peso_actual = document.getElementById("txt_peso_actual").value;

    //Calculamos el peso ideal
    var peso_ideal  = (edad*2+8);
    //Mostramos el resultado en contenedor
    document.getElementById("cnt_resultado").innerHTML ="Peso ideal es "+ peso_ideal;

    //Invocamos la función para determinar el estado de peso
    determinarEstadoPeso(peso_actual,peso_ideal);
}
//Determinamos si está con sobrepeso, bajo peso o en peso correcto.
function determinarEstadoPeso(peso_actual,peso_ideal){
    var nombreEstado;
    var nombreImagen;
    if(peso_actual == peso_ideal){
        nombreEstado    ="Peso Ideal";
        nombreImagen    ="peso_ideal.png";
    }else{
        if(peso_actual > peso_ideal){
             nombreEstado    = "Sobre peso";
             nombreImagen    = "sobre_peso.png";
        }else{
            nombreEstado    =" Bajo peso";  
            nombreImagen    = "bajo_peso.png";
        }
    }
    //Alteramos el contenido del contenedor de estado y la imágen
    document.getElementById("cnt_resultado_estado").innerHTML = "Estado de peso es "+ nombreEstado;
    document.getElementById("cnt_resultado_imagen").innerHTML = '<img src=img/'+ nombreImagen +'>';

}