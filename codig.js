var toke=2417269735227014;




function traer(){
    var hero= document.getElementById("buscar").value;
    var url="https://www.superheroapi.com/api.php/2417269735227014/"+hero+"";
    var nombre="";
    var ocupacion="";
    var genero="";
    var raza="";
    var imagn="";
    
    console.log(url);

    fetch(url)
    .then (function(response){
        return response.json();

    }).then(function(luis){
        console.log(luis);
        
        nombre="<p> Nombre: "+ luis.name+"</p>";
        console.log(nombre)

        ocupacion= "<p> ocupacion: "+ luis.work.occupation+"</p>"; 
        console.log(ocupacion);

        genero= "<p> genero: "+ luis.appearance.gender+"</p>";  
        console.log(genero);

        raza= "<p> raza: "+ luis.appearance.race+"</p>";  
        console.log(raza);
        
        imagn="<img src='"+luis.image.url+"'width='100px' heigth='100px' "+"id="+"'imagen'"+">";
       
        document.getElementById("mostrar").innerHTML+=nombre;
        document.getElementById("mostrar").innerHTML+=ocupacion;
        document.getElementById("mostrar").innerHTML+=genero;
        document.getElementById("mostrar").innerHTML+=raza;
        document.getElementById("mostrar").innerHTML+=imagn;
        document.getElementById("mostrar").innerHTML+="<p> <h1> </h1></p>";


    })
}

