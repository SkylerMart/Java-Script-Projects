function NotANumber() {
    var NAN= 0/0;
    document.getElementById("Test").innerHTML= isNaN(NAN);
} /*--testing to see if the result is a number--*/