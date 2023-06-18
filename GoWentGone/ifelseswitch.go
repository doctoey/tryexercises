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

	//switch case

	// today := "monday"
	//switch today { //ใส่หรือไม่ใส่วงเล็บก็ได้
	switch today := "monday"; today { 
	case "monday":
		fmt.Println("today is monday") //ไม่ต้องใส่ break
		fallthrough                    //ถ้าจะให้มันเข้า case ถัดไปต้องใส่ fallthrough
	case "tuesday":
		fmt.Println("today is tuesday")
	case "wednesday":
		fmt.Println("today is wednesday")
	case "thursday":
		fmt.Println("today is thursday")
	//หรือจะใส่ , ก็ได้ เช่น
	case "friday", "saturday":
		fmt.Println("today is friday or saturday")
	default:
		fmt.Println("วันนี้วันอารายยยยยยยย")
	}

	//no expression switch
	//ถ้าไม่ใส่ expression จะเป็น if else
	//ถ้าใส่ expression จะเป็น switch case

	numex := 10
	switch {
	case numex > 0:
		fmt.Println("numex is positive")
	case numex < 0:
		fmt.Println("numex is negative")
	default:
		fmt.Println("numex is zero")
	}
}
