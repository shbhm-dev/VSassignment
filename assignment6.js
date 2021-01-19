/*
class Name : Shape
methods : get_height , get_width
feilds : height(Private) , width(Private) */

class Shape {


    #
    height

    # width

    constructor(height, width) {
            this.#height = height
            this.#width = width
        }
        // Method to return height
    get_height() {
            return this.#height
        }
        // Method to return width
    get_width() {
        return this.#width
    }

}
/*
class Name : Rectangle
Inherited by : Shape
getter : area (to find area )
 */

class Rectangle extends Shape {

    constructor(height, width) {
        super(height, width)
    }

    get area() {
        return this.get_height() * this.get_width()
    }


}

/*
class Name : Triangle
Inherited by : Shape
getter : area (to find area )
 */
class Triangle extends Shape {

    constructor(height, width) {
        super(height, width)
    }

    get area() {
        return 0.5 * this.get_height() * this.get_width()
    }


}

const newRec = new Triangle(10, 10)
console.log(newRec.area)

/*
class Name : Teacher
methods : doer
feilds : designation , college name */


class Teacher {

    constructor(designnation, collegeName) {
        this.designation = designnation
        this.collegeName = collegeName
    }

    doer() {
        console.log("Teaching")
    }

}
/*
class Name : SubjectTeacher
Inherited by : Teacher
methods : doer*/

class SubjectTeacher extends Teacher {

    constructor(designnation, collegeName, mainSubject) {
        super(designnation, collegeName)
        this.mainSubject = mainSubject
    }
    doer() {
        console.log(`Teaching ${this.mainSubject}`)
    }

}

const englishTeacher = new SubjectTeacher("PGP", "XYZ", "English")
englishTeacher.doer()


// Implemented the Question-1 using the traditional function-based "classes" like "function Shape {}".
const Shape = function(height, width) {
    this.height = height
    this.width = width
}
Shape.prototype.get_height = function() {
    return this.height
}
Shape.prototype.get_width = function() {
    return this.width
}

const Rectangle = function(height, width) {
    Shape.call(this, height, width)

}
Rectangle.prototype = Object.create(Shape.prototype) // Connecting the prototypes for inheritance
Rectangle.prototype.area = function() {
    return this.height * this.width
}


const Traingle = function(height, width) {
    Shape.call(this, height, width)

}
Traingle.prototype = Object.create(Shape.prototype) // Connecting the prototypes for inheritance
Traingle.prototype.area = function() {
    return 0.5 * this.height * this.width
}


const rect = new Traingle(100, 100)
console.log("Area is :",
    rect.area())


// Included a static field in your Rectangle and Triangle classes and console the value of that static field along with area of the classes.


class Shape {

    #
    height# width

    constructor(height, width) {
        this.#height = height
        this.#width = width
    }

    get_height() {
        return this.#height
    }
    get_width() {
        return this.#width
    }

}

class Rectangle extends Shape {
    static shape = "Rectangle"


    constructor(height, width) {
        super(height, width)
    }

    get area() {
        return this.get_height() * this.get_width()
    }


}
class Triangle extends Shape {
    static shape = "Traingle"

    constructor(height, width) {
        super(height, width)
    }

    get area() {

        return 0.5 * this.get_height() * this.get_width()
    }


}

const newRec = new Rectangle(10, 10)
console.log(newRec.area, Rectangle.shape)