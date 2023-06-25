package main

import (
	"fmt"
	"calculator/grade" //ต้องขึ้นต้นด้วย module ที่เราสร้างขึ้นมาเอง ในไฟล์ go.mod จะมี module ที่เราสร้างขึ้นมาเองอยู่แล้ว
)

func main() {
	grade := grade.CalGrade(80)
	fmt.Println(grade)
}