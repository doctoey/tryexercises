package main

import "fmt"

func show(sk [3]string) {
	fmt.Printf("%#v\n", sk)
}

func main() {
	var skill string
	
	var stg [3]string
	var intju [3]int
	var boolju [3]bool
	fmt.Printf("%#v\n", skill) //""
	fmt.Printf("%#v\n", stg) //[3]string{"", "", ""}
	fmt.Printf("%#v\n", intju) //[3]int{0, 0, 0}
	fmt.Printf("%#v\n", boolju) //[3]bool{false, false, false}

	var skills [3]string = [3]string{"python", "go", "java"}
	fmt.Printf("%#v\n", skills) //[3]string{"python", "go", "java"}
	x := skills[0]
	fmt.Printf("%#v\n", x) //string("python")

	show(skills) //[3]string{"python", "go", "java"}
}