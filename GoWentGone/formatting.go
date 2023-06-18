package main

import "fmt"

func main() {
	var r rune = 'A'

	//ไว้เก็บตัวอักษร 1 ตัว ใช้เครื่องหมาย '' Int32
	fmt.Println(r)
	fmt.Println("")
	var emo rune = '😀'

	fmt.Println(emo)
	fmt.Printf("emo: %c\n", emo) //printf f คือ format, c คือ char

	fmt.Printf("emo: %#v\n", emo) // print rune มะด้ายยย

	var msg, age, price, check = "Hello", 40, 10.5, true
	fmt.Println(msg)
	fmt.Printf("msg: %s\n", msg) // s คือ string
	fmt.Println(age)
	fmt.Printf("age: %d\n", age) // d คือ decimal
	fmt.Println(price)
	fmt.Printf("price: %f\n", price)   // f คือ float
	fmt.Printf("price: %.2f\n", price) // .2 คือต้องการ 2 ตำแหน่ง
	fmt.Println(check)
	fmt.Printf("check: %t\n", check) // t คือ true/false

	fmt.Printf("msg: %#v\n", msg) // #v คือ แสดงค่าทั้งหมด ไม่ต้องจำ s d f t แล้ว

	//อยากรู้ type ตัวแประ ใช้ %T
	fmt.Printf("check type msg: %T\n", msg)
}
