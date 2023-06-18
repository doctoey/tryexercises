package main

import "fmt"

func add(x float64, y float64) (float64, string) {
	fmt.Println("add ja : ", x, y)
	v := x + y
	return v, ",multiple return"
}

func main() {
	add(42, 13)
	a, b := add(42, 2) //ต้องมีตัวรับค่า ถึงจะแสดงผลออกมา //ประกาศตัวแปรแต่ a ไม่ได้แล้ว เพราะเรารับ string มาด้วย ต้องรับทั้ง 2 ตัว เลยต้องมี b
	fmt.Println(a, b)
}
