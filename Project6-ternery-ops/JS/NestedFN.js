function count_Function() {
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var StartingPoint = 9;
        function PlusOne() {StartingPoint += 1;}
        PlusOne();
        return StartingPoint;
    }
}