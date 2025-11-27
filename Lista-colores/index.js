colors = [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#Ff0000"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]


window.onload = ()=>{
    //añadimos un contenedor a nuestro html con id contenedor
    //donde vamos a añadir los demás div
    let cont = document.getElementById("contenedor");
    // recorrer el array
    for (let color of colors) {
        // crear div para cada color
        let miDiv = document.createElement("div");
        //el color de fondo de cada div va a ser el color dentro de datos maquetar
        miDiv.style.backgroundColor = color.code.hex;
        miDiv.style.padding = "5rem";
        miDiv.style.margin = "1rem";
        miDiv.style.border = "0.15rem solid black";

        //un div para el nombre
        let nombre = document.createElement("div");
        nombre.textContent = `Nombre: ${color.color}`;
        //un div para la categoria
        let categoria = document.createElement("div");
        categoria.textContent = `Categoría (tipo): ${color.category}`;
        //un div para el rgba
        let rgba = document.createElement("div");
        rgba.textContent = `Rgba: ${color.code.rgba.join(", ")}`;
        //un div para el hex
        let hex = document.createElement("div");
        hex.textContent = `Hex: ${color.code.hex}`;

        //estilos para el nombre
        if(color.color == "black" || color.color == "red" || color.color == "blue"){
            nombre.style.color = "white";
        }
        else{
            nombre.style.color = "black";  
        }

        //estilos para la categoria
        if(color.color == "black" || color.color == "red" || color.color == "blue"){
            categoria.style.color = "white";
        }
        else{
            categoria.style.color = "black";  
        }

        //estilos para rgba
        if(color.color == "black" || color.color == "red" || color.color == "blue"){
            rgba.style.color = "white";
        }
        else{
            rgba.style.color = "black";  
        }

        //estilos para el hex
        if(color.color == "black" || color.color == "red" || color.color == "blue"){
            hex.style.color = "white";
        }
        else{
            hex.style.color = "black";  
        }

        // agregamos todos los div anteriores al div miDiv
        miDiv.appendChild(nombre);
        miDiv.appendChild(categoria);
        miDiv.appendChild(rgba);
        miDiv.appendChild(hex);

        // añadimos el miDiv al contenedor
        cont.appendChild(miDiv);
    }
}