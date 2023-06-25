package main

import "fmt"

func double(n *int) {
	*n *= 2
}

func appendHello(s *string) {
	*s = "Hello, " + *s
}

func main() {
	// var s string
	// var p *string

	// p = &s

	// *p = "hello"

	// fmt.Println(s, p)

	// m := 4

	// double(&m)
	// fmt.Println(m)

	name := "doctoey"

	appendHello(&name)

	fmt.Println(name)
	// Hello, doctoey
}