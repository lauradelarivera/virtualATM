class billete {
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();

        this.imagen.src = billetPic[this.valor];
        
    }
}

var billetPic = [];
{
    billetPic["100"] = "100.jpg";
    billetPic["50"] = "50.jpg";
    billetPic["20"] = "20.jpg";
    billetPic["10"] = "10.jpg";
    billetPic["5"] = "5.jpg";
}


function entregarDinero()
{
    var t = document.getElementById("dinero")
    dinero = parseInt(t.value);
   
    
    
    
    for(var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if( div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
            
            
            
        }  
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "no tengo esa cantidad 😸"; 
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billets of $" + e.valor + "<br />" + "<img src=" + '"' + e.imagen.src + '"' + "/>" + "<br><hr>";
                
            }
        }
    }
    
}

var caja = [];
var entregado = [];
caja.push( new billete(100, 30) );
caja.push( new billete(50, 20) );
caja.push( new billete(20, 30) );
caja.push( new billete(10, 10) );
caja.push( new billete(5, 15) );

var dinero = 0;
var div =  0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


function eraser()
{
    window.location.reload();
}