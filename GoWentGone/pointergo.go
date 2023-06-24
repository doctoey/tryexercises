package main

import "fmt"

func main() {
	var price int = 9999
	var addr *int = &price // ชนิดของตัวแปร addr คือ *int
	fmt.Println(price, addr)

	*addr = 9400 // write
	fmt.Println(price, addr)
	fmt.Printf("%T\n", addr) // *int
	v := *addr // read
	fmt.Println(v)

	
	fmt.Printf("เว้นบรรทัด\n")
	var price2 int = 9999
	fmt.Println(price2, &price2) // 9999 0xc0000b4008, &price2 คือค่าที่อยู่ใน address(memmory in ram) ของ price2 0xc0000b4008
}
