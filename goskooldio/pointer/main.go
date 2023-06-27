package main

import "fmt"

// จงแก้ไข func ต่อไปนี้ ให้สามารถทำงานได้อย่างถูกต้อง โดยที่

// func double จะเพิ่มค่า value ที่อยู่ใน pointer เป็น 2 เท่า
// func appendGreeting จะเติม "Hi, " เข้าไปข้างหน้า

// n := 2
// double(&n)
// n == 4
func main() {
	n := 2 
	double(&n)

	fmt.Println(n)

	name := "Bob"
	appendGreeting(&name)
	fmt.Println(name)

}

func double(n *int) {
	*n = *n * 2
}

// name := "Bob"
// appendGreeting(&name)
// name == "Hi, Bob"
func appendGreeting(s *string) {
	*s = "Hi, " + *s
	// return fmt.Printf("Hello %s", *s)
}



// func main() {
// 	d := 2
// 	double(&d)

// 	fmt.Println(d)
// }

// func double(d *int) {
// 	*d = *d * 2
// }