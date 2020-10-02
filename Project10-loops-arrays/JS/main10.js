
//call loop//
function Call_Loop(){
    var sec = "";
    var x = 1;
    while (x < 20){
        sec += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = sec;
}

//for loop//
var instruments=["guitar", "piano","flute","drums"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y<instruments.length; Y++) {
        Content += instruments [Y] +"<br>";
    }
    document.getElementById("list_of_instruments").innerHTML= Content;
}
//arrays//
function array_function() {
    var options = [];
    options[0] = "zero";
    options[1] = "one";
    options[2] = "two";
    options[3] = "three";

    document.getElementById("Array").innerHTML = "Here is option " + options[0];
    }

//constants//
var fruit= {
    type: "apple",
    color: "pink",
    size: "baseball",
};
function constant_function() {
    document.getElementById("constant").innerHTML= "A juicy " + fruit.color + " "+ fruit.type + " a day keeps the doctor away."
}

var b = 5
function lets() {
    document.getElementById("let1").innerHTML = (b);
    {
        let b = 7
        document.getElementById("let2").innerHTML = (b);
    }
    document.getElementById("let3").innerHTML = (b+b);
}

function DreamCar() {
    let DreamCar = {
        make:"Tesla",
        model:"Roadster",
        color:"black",
        description: function DreamCar() {
        return this.color + " " + this.model}
        };
    document.getElementById("DreamCar").innerHTML = "My dream car is a " + DreamCar.color + " " + DreamCar.make + " " + DreamCar.model +".";
    }


