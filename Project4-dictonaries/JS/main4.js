function Dictionary() {
    var dict = {
        name:"Paxton",
        breed:"Husky/Lab",
        age: 2,
        blah: "blah",
    };
    delete dict.blah;
    document.getElementById("dictionary").innerHTML= dict.name;
}
