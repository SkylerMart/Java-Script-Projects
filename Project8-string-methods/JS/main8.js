
/*--concatenate--*/
function full_sentence() {
    var A = "'We have nothing ";
    var B = "to fear but ";
    var C = "fear itself'";
    var D = "  -Franklin D. Roosevelt";
    var full_quote = A.concat(B, C, D);
    document.getElementById("concatenate").innerHTML = full_quote;
}

/*--slice--*/
function slice_method(){
    var Sentence = "'If you believe you can you are half way there.' -Teddy Roosevelt";
    var Section =Sentence.slice(7, 15);
    document.getElementById("slice").innerHTML = Section;
}


/*--to string--*/
function string_method(){
    var x = 42;
    document.getElementById('number_to_string').innerHTML = x.toString();
}

//to precision//
function precision_method(){
    var y = 12938.3012957376112;
    document.getElementById("precision").innerHTML = y.toPrecision(8);
}
