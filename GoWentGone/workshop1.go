package main

import "fmt"

// Workshop: Println

// Output :
// เรื่อง: AvengerJa
// ปี:2019
// เรตติ่ง:8.4
// ประเภท:Sci-Fi
// ซุปเปอร์:true

// TODO : write code below.
func main() {
	// fmt.Println("เรื่อง: AvengerJa")
	// fmt.Println("ปี:2019")
	// fmt.Println("เรตติ่ง:8.4")
	// fmt.Println("ประเภท:Sci-Fi")
	// fmt.Println("ซุปเปอร์:true")

	title := "AvengerJa"
	year := 2019
	rate := 8.4
	genre := "Sci-Fi"
	superhero := true

	fmt.Println(title)
	fmt.Println(year)
	fmt.Println(rate)
	fmt.Println(genre)
	fmt.Println(superhero)

	rawstring := `againnnnn
	บรรทัด 2
	บรรดทัด 3
	ขึ้นบรรทัดใหม่ก็มาด้วย`
	fmt.Println(rawstring)
}
