function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle("Dodge","Viper","2020","Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto","1971","Mustard");
function myFunction() {
    document.getElementById("KeywordsConstructors").innerHTML= "Erik drives a " + Erik.Vehicle_Color + " " + Erik.Vehicle_Make + " manufactured in " + Erik.Vehicle_Year+ ".";
}

/*--
troubleshooting
- double checked to make sure html/js files are the ones I think they are. (no doppelgangers)
-paths are good
-ids are good
-everything is closed
---FUNCTION CASES
--*/