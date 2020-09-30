function RideFunction() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height <52) ? "Sorry, you are too short":"You are tall enough";
    document.getElementById("ride").innerHTML= can_ride + " to ride."
   
}