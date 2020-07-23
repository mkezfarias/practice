function Dwarf() {
    this.size = "little"
}

function Rabbit(name) {
    this.name = name
    this.eats = "carrots"
}

function DwarfRabbit(name){
    Rabbit.call(this, name)
    Dwarf.call(this)
}

let cuttie = new DwarfRabbit("cuttie")


console.log(cuttie)
