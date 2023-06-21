package main

import "fmt"

func main() {
	for i := 0; i < 5; i++ { // for loop go ไม่จำเป็นต้องมีวงเล็บ
		println("i:", i)
	}

	for y := 0; y < 5; y = y + 2 {
		println("y:", y)
	}

	sum := 0
	for h := 1; h <= 2; h++ { //ใน go loop มีคำสั่งเดียวคือ for และไม่มีวงเล็บ
		sum = sum + 1
		println("h:", h, "sum:", sum)
	}
	fmt.Println("sum:", sum)

	skill := []string{"PHP", "Java", "Go", "Python"}

	for i := 0; i < len(skill); i++ {
		println("skill:", skill[i])
	}
	fmt.Println("")
	// ใช้ range ในการวนลูป เหมือนกัน แต่หรูหรากว่า
	for i := range skill {
		println("skill:", skill[i])
	}

	for _, val := range skill { //ประกาศมาไม่ใช้ ใช้ _ แทน
		println("skill:", val)
	}
}
