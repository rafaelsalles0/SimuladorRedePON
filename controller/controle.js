//import Rede from '../model/model.js';
//document.write ('<script type=”text/javascript src=”../model/modelo.js"”></script>');
//<script type="module" src="></script>
//import '../model/modelo';
//import { Rede } from '../model/modelo.js';
class Rede {
    constructor(potencia, sensibilidade, spliter, atenuacaoCabo, distancia, conectores){
        this.potencia = potencia;
        this.sensibilidade = sensibilidade;
        this.spliter = spliter;
        this.atenuacaoCabo = atenuacaoCabo;
        this.distancia = distancia;
        this.conectores = conectores;
    }
}

//class método get input ---
const rede = new Rede();

var atenucaoConector = 0.25;

console.log("Entrou Controller!")


function calcularDistancia() {
    console.log("Entrou Dist!")
    rede.potencia = document.getElementById("potencia").value;
    rede.sensibilidade = document.getElementById("sensibilidade").value;
    rede.spliter = document.getElementById("spliter").value;
    rede.atenuacaoCabo = document.getElementById("coefAtenuacao").value;
    rede.conectores = document.getElementById("conectores").value;
    rede.distancia = document.getElementById("distancia").value;

    //***verificar se todos os campos estão preenchidos***
    if (rede.potencia !== "" && rede.sensibilidade !== "" && rede.spliter !== "" && rede.atenuacaoCabo !== "" && rede.conectores !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.sensibilidade > 0) {
            rede.distancia = (rede.sensibilidade - 1 - rede.potencia - (rede.conectores * 0.25) - rede.spliter) / rede.atenuacaoCabo;
            if(rede.distancia < 0){
                alert("A rede não funciona!");
            }
        } else {
            rede.distancia = Math.abs((parseInt(rede.sensibilidade) + 1 - parseInt(rede.potencia) + (parseInt(rede.conectores) * 0.25) + parseInt(rede.spliter))) / parseFloat(rede.atenuacaoCabo)
            if((parseInt(rede.sensibilidade) + 1 - parseInt(rede.potencia) + (parseInt(rede.conectores) * 0.25) + parseInt(rede.spliter)) > 0){
                alert("A rede não funciona!");
            }
        }
    } else {
        rede.distancia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.distancia;
    document.getElementById("distancia").value = rede.distancia;
}


function calcularPotencia() {
    console.log("Entrou Potencia!")
    rede.potencia = document.getElementById("potencia").value;
    rede.sensibilidade = document.getElementById("sensibilidade").value;
    rede.spliter = document.getElementById("spliter").value;
    rede.atenuacaoCabo = document.getElementById("coefAtenuacao").value;
    rede.conectores = document.getElementById("conectores").value;
    rede.distancia = document.getElementById("distancia").value;

    //***verificar se todos os campos estão preenchidos***
    if (rede.distancia !== "" && rede.sensibilidade !== "" && rede.spliter !== "" && rede.atenuacaoCabo !== "" && rede.conectores !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.sensibilidade > 0) {
            rede.potencia = (rede.sensibilidade - 1 - (rede.conectores * 0.25) - rede.spliter) - (rede.atenuacaoCabo*rede.distancia);
            if(rede.potencia < 0){
                alert("A rede não funciona!");
            }
        } else {
            rede.potencia = (parseInt(rede.sensibilidade) + 1 + (parseInt(rede.conectores) * 0.25) + parseInt(rede.spliter)) + (rede.atenuacaoCabo*rede.distancia);
            if(rede.potencia > 0){
                alert("A rede não funciona!");
            }
        }
    } else {
        rede.potencia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.potencia;
    document.getElementById("potencia").value = rede.potencia;

    
    console.log(rede.potencia);


}


function calcularSensibilidade() {
    console.log("Entrou Sensibilidade!");
    rede.potencia = parseFloat(document.getElementById("potencia").value);
    console.log(typeof rede.potencia)
    rede.sensibilidade = parseFloat(document.getElementById("sensibilidade").value);
    rede.spliter = parseFloat(document.getElementById("spliter").value);
    rede.atenuacaoCabo = parseFloat(document.getElementById("coefAtenuacao").value);
    rede.conectores = parseFloat(document.getElementById("conectores").value);
    rede.distancia = parseFloat(document.getElementById("distancia").value);
    console.log("ok");

    if (rede.distancia !== "" && rede.potencia !== "" && rede.spliter !== "" && rede.atenuacaoCabo !== "" && rede.conectores !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.potencia > 0) {
            rede.sensibilidade = rede.potencia + (rede.conectores * 0.25) + rede.spliter + (rede.atenuacaoCabo * rede.distancia);
            rede.sensibilidade = rede.sensibilidade + Math.round(rede.sensibilidade*0.04);
            console.log(rede.sensibilidade);
            if(rede.sensibilidade < 0){
                alert("A rede não funciona!");
            }
        } else {
            rede.sensibilidade = parseInt(rede.potencia) - 2 - (parseInt(rede.conectores) * 0.25) - rede.spliter - (rede.atenuacaoCabo*rede.distancia);
            //rede.sensibilidade = rede.sensibilidade - Math.round(rede.sensibilidade * 0.04); add margem
            console.log(rede.sensibilidade);
            if(rede.sensibilidade > 0){
                alert("A rede não funciona!");
            }
        }
    } else {
        rede.potencia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.sensibilidade;
    document.getElementById("sensibilidade").value = rede.sensibilidade;

    //rede.sensibilidade = rede.potencia - rede.conectores - rede.spliter - rede.atenuacaoCabo;
    console.log(rede.sensibilidade);
}


function calcularSpliter() {
    console.log("Entrou Spliter!")
    rede.potencia = document.getElementById("potencia").value;
    rede.sensibilidade = document.getElementById("sensibilidade").value;
    rede.spliter = document.getElementById("spliter").value;
    rede.atenuacaoCabo = document.getElementById("coefAtenuacao").value;
    rede.conectores = document.getElementById("conectores").value;
    rede.distancia = document.getElementById("distancia").value;

    if (rede.distancia !== "" && rede.potencia !== "" && rede.sensibilidade !== "" && rede.atenuacaoCabo !== "" && rede.conectores !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.sensibilidade > 0) {
            rede.spliter = (rede.sensibilidade - 1 - rede.potencia - (rede.conectores * 0.25)) - (rede.distancia * rede.atenuacaoCabo);
            rede.sensibilidade = rede.sensibilidade + Math.round(rede.sensibilidade*0.04);
            console.log(rede.sensibilidade);
            if(rede.spliter < 0){
                alert("A rede não funciona!");
            }
        } else {
            rede.spliter = (parseInt(rede.sensibilidade) + 1 - parseInt(rede.potencia) + (parseInt(rede.conectores) * 0.25)) + (rede.distancia * rede.atenuacaoCabo);
            //rede.sensibilidade = rede.sensibilidade - Math.round(rede.sensibilidade*0.04);
            console.log(rede.spliter)
            if(rede.spliter > 0){
                alert("A rede não funciona!");
            }
        }
    } else {
        rede.potencia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.spliter;
    document.getElementById("spliter").value = rede.spliter;

    //rede.spliter = (rede.sensibilidade - Math.round(0.04 * rede.sensibilidade) - rede.potencia - (rede.conectores * 0.25)) - (rede.distancia * rede.atenuacaoCabo);
    console.log(rede.spliter);

}


function calcularCoefAtenuacao() {
    console.log("Entrou Dist!")
    rede.potencia = document.getElementById("potencia").value;
    rede.sensibilidade = document.getElementById("sensibilidade").value;
    rede.spliter = document.getElementById("spliter").value;
    rede.atenuacaoCabo = document.getElementById("coefAtenuacao").value;
    rede.conectores = document.getElementById("conectores").value;
    rede.distancia = document.getElementById("distancia").value;

    if (rede.distancia !== "" && rede.potencia !== "" && rede.sensibilidade !== "" && rede.spliter !== "" && rede.conectores !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.sensibilidade > 0) {
            rede.atenuacaoCabo = (rede.sensibilidade - 1 - rede.potencia - (rede.conectores * 0.25)- rede.spliter) / (rede.distancia);
            console.log(rede.atenuacaoCabo);
            
        } else {
            rede.atenuacaoCabo = Math.abs(parseInt(rede.sensibilidade) + 1 + parseInt(rede.potencia) + (parseInt(rede.conectores) * 0.25) + parseInt(rede.spliter)) / (rede.distancia);
            //rede.atenuacaoCabo = rede.atenuacaoCabo.toFixed(2)
            //console.log(rede.atenuacaoCabo.toFixed(2));
        }
    } else {
        rede.potencia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.atenuacaoCabo.toFixed(2);
    document.getElementById("coefAtenuacao").value = rede.atenuacaoCabo.toFixed(2);

    //let atenuacaoCabo = CALCULAR ATENUACAO CABO
    console.log(rede.atenuacaoCabo);
}


function calcularConectores() {
    console.log("Entrou Conectores!")
    rede.potencia = document.getElementById("potencia").value;
    rede.sensibilidade = document.getElementById("sensibilidade").value;
    rede.spliter = document.getElementById("spliter").value;
    rede.atenuacaoCabo = document.getElementById("coefAtenuacao").value;
    rede.conectores = document.getElementById("conectores").value;
    rede.distancia = document.getElementById("distancia").value;

    if (rede.distancia !== "" && rede.potencia !== "" && rede.sensibilidade !== "" && rede.spliter !== "" && rede.atenuacaoCabo !== "") {
        //***verificar se a sensibilidade é positiva ou negativa***
        if (rede.sensibilidade > 0) {
            rede.conectores = (rede.sensibilidade - 1 - rede.potencia - rede.spliter) - (rede.distancia*rede.atenuacaoCabo);
            rede.conectores = rede.conectores*4;
            console.log(rede.conectores);
            
        } else {
            //rede.distancia = Math.abs((parseInt(rede.sensibilidade) + 1 - parseInt(rede.potencia) + (parseInt(rede.conectores) * 0.25) + parseInt(rede.spliter))) / parseFloat(rede.atenuacaoCabo)
            rede.conectores = Math.abs((parseInt(rede.sensibilidade) + 1 - parseInt(rede.potencia) + parseInt(rede.spliter)) + (rede.distancia*rede.atenuacaoCabo));
            rede.conectores = rede.conectores*4;
            console.log(rede.sensibilidade);
        }
    } else {
        rede.potencia = "insira todos os campos!"
    }
    const div = document.getElementById("minhaDiv");
    div.innerHTML = rede.conectores;
    document.getElementById("conectores").value = rede.conectores;

    //let conectores = CALCULAR ATENUACAO CABO
    console.log(rede.conectores);
}

//func verifica escala de funcionamento sens > resto
//margem no simulador

//*************** Simulador ***************** */
var svg = d3.select("#canvas").append("svg")
    .attr("width", 800)
    .attr("height", 250);

var rectData = [
  {"x": 180, "y": 30, "width": 100, "height": 50, "text": "OLT", "subText": "10dB"},
  {"x": 330, "y": 30, "width": 100, "height": 50, "text": "Splitter", "subText": "6dB"},
  {"x": 480, "y": 30, "width": 100, "height": 50, "text": "ANU", "subText": "-26dB"}
];

var rectGroup = svg.selectAll("g")
    .data(rectData)
    .enter()
    .append("g");

rectGroup.append("rect")
    .attr("class", "rect")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; });

rectGroup.append("text")
    .attr("class", "text")
    .attr("x", function(d) { return d.x + d.width / 2; })
    .attr("y", function(d) { return d.y + d.height / 2; })
    .attr("dy", ".35em")
    .text(function(d) { return d.text; });

rectGroup.append("text")
    .attr("class", "subText")
    .attr("x", function(d) { return d.x + d.width / 2; })
    .attr("y", function(d) { return d.y + d.height + 20; })
    .attr("dy", ".35em")
    .text(function(d) { return d.subText; });

// Cloud and text "Blackbone"
svg.append("circle")
    .attr("cx", 70)
    .attr("cy", 55)
    .attr("r", 40)
    .style("fill", "lightgray");

svg.append("text")
    .attr("class", "text")
    .attr("x", 70)
    .attr("y", 55)
    .attr("dy", ".35em")
    .text("Blackbone");

// Simple house
svg.append("rect")
    .attr("x", 630)
    .attr("y", 30)
    .attr("width", 50)
    .attr("height", 50)
    .style("fill", "brown");

svg.append("polygon")
    .attr("points", "630,30 655,10 680,30")
    .style("fill", "saddlebrown");

// Lines and connectors
var linesData = [
  {"x1": 110, "y1": 55, "x2": 180, "y2": 55},
  {"x1": 280, "y1": 55, "x2": 330, "y2": 55},
  {"x1": 430, "y1": 55, "x2": 480, "y2": 55},
  {"x1": 580, "y1": 55, "x2": 630, "y2": 55}
];

var lineGroup = svg.selectAll(".line")
    .data(linesData)
    .enter()
    .append("g");

lineGroup.append("line")
    .attr("x1", function(d) { return d.x1; })
    .attr("y1", function(d) { return d.y1; })
    .attr("x2", function(d) { return d.x2; })
    .attr("y2", function(d) { return d.y2; })
    .attr("stroke", "black");

lineGroup.append("rect")
    .attr("x", function(d) { return d.x2 - 4; })
    .attr("y", function(d) { return d.y2 - 4; })
    .attr("width", 4)
    .attr("height", 10)
    .style("fill", "black");

lineGroup.append("rect")
    .attr("x", function(d) { return d.x1 + 1; })
    .attr("y", function(d) { return d.y1 - 4; })
    .attr("width", 4)
    .attr("height", 10)
    .style("fill", "black");
