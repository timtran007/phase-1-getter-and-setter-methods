// Add your Circle class here

class Circle {
    //Circle will accept 1 parameter, radius, and use this.radius to store the value
    constructor(radius) {
        this.radius = radius
    }
    //Define getter method for diameter, 
    get diameter() {
        return 2 * this.radius
    }

    //Define getter method for circumference
    get circumference() {
        return Math.PI * this.diameter
    }
    
    //Define getter method for area which will calculate each value using this.radius and pi
    get area() {
        return Math.PI * this.radius * this.radius
    }

    //Define setter method for diameter
    set diameter(diameter) {
        this.radius = diameter/2
    }

    //Define setter method for circumference
    set circumference(circumference){
        this.radius = (circumference/Math.PI)/2
    }

    //Define setter method for area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
    set area(area) {
        this.radius = Math.sqrt(area/Math.PI)
    }
}

