package main

import "fmt"
import "math"

func main() {
	num := 34

	if num == 34 && (num >= 30 || num <= 39) {
		fmt.Println("num is 34")
	}

	if num%2 == 0 {
		fmt.Println("num is even")
	} else {
		fmt.Println("num is odd")
	}

	//short if
	//normal if
	lim := 255.0
	v := math.Pow(10, 2)
	if v < lim {
		fmt.Println("x power n is:", v)
	} else {
		fmt.Println("x power n is: ", lim)
	}

	//short decalre if
	//ระวัง scope ของตัวแปร v อยู่แค่ใน scope ของ if
	if v := math.Pow(15, 2); v < lim {
		fmt.Println("x power n is:", v)
	} else {
		fmt.Println("x power n is: ", lim)
	}
}
