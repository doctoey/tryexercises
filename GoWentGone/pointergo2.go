package main

import "fmt"

func changePrice(p int) {
	//price = price - 599
	fmt.Println("value in p is", p) //value in p is 0xc000016098
	p = p - 599
	fmt.Println("addr", p, &p)  //addr 0xc000016098 0xc00000a028
	fmt.Println("change", p, p) //change 9400 0xc00000a028
}

func main() {
	var price int = 9999
	var addr *int = &price

	changePrice(price)
	fmt.Println("after ", price, addr) //after  9400 0xc000016098
}

// func changePrice(p *int) {
// 	fmt.Println("value in p is", p)
// 	*p = *p - 599
// 	fmt.Println("change", *p, &p)
// }

// func main() {
// 	var price int = 9999
// 	var addr *int = &price

// 	changePrice(&price)
// 	fmt.Println("after ", price, addr)
// }
