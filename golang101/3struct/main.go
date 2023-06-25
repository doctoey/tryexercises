package main

import (
	"fmt"
	// "struct/person"
	// "golang.org/x/text/width"
	"math"
)

// struct collection of var..

// type Person struct {
// 	name string
// 	age  int
// }

type Rectangle struct {
	width  float64
	length float64
}

func area(width float64, length float64) float64 {
	return width * length
}

func area2(r Rectangle) float64 {
	return r.width * r.length
}

type Circle struct {
	radius float64
}

func circleArea(c Circle) float64 {
	return math.Pi * c.radius * c.radius // 3.14 * r^2
}

func main() {
	square := Rectangle{
		width:  10,
		length: 10,
	}

	fmt.Println(square)                                     // {10 10}
	fmt.Println("Area:", area(square.width, square.length)) // Area: 100
	fmt.Println("Area2:", area2(square))                    // Area2: 100

	c := Circle{
		radius: 10,
	}

	fmt.Println(c)
	fmt.Println("Area:", c)
	fmt.Println("Area:", circleArea(c))

	// p1 := person.Person{
	// 	Name: "Doctoey",
	// 	Age:  25,
	// }

	// vp := &p1
	// vp.Name = "ODDS"
	// v := p1
	// v.Name = "ODDSsssss"

	// fmt.Println(p1, p1.Name)
	// fmt.Println(p1, v)
}
