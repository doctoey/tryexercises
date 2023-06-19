package main

import "fmt"

func add(x float64, y float64) (float64, string) {
	fmt.Println("add ja : ", x, y)
	v := x + y
	return v, ",multiple return"
}

func split(sum int) (x int, y int) {
	x = sum * 4 / 9
	y = sum - x
	return // ถ้ามีตัวแปรรับค่า ต้องมี return ตามด้วย //naked return อย่าใช้กับฟังก์ชั่นที่ยาวๆ
}

func compute(fn func(float64, float64) float64) float64 { //function ที่รับ function เป็น parameter
	n := fn(3, 4)
	return n
}

func hypo(x, y float64) float64 {
	return (x * x) + (y * y)
}

func inc() int {
	return 1
}

func curr() int {
	return 2
}

func adder() (func() int, func() int) {
	// sum := 99
	// return func() int {
	// 		sum += 1
	// 		return sum
	// 	}, func() int {
	// 		sum -= 1
	// 		return sum
	// 	}
	return inc, curr
}

func main() {
	add(42, 13)
	a, b := add(42, 2)      //ต้องมีตัวรับค่า ถึงจะแสดงผลออกมา //ประกาศตัวแปรแต่ a ไม่ได้แล้ว เพราะเรารับ string มาด้วย ต้องรับทั้ง 2 ตัว เลยต้องมี b
	fmt.Println(a, b)       //44 ,multiple return
	fmt.Printf("%T\n", add) //func(float64, float64) (float64, string)

	// var tt string = "test"
	// var yy int = 10

	addT := func(tt, yy float64) float64 {
		return tt + yy
	}

	fmt.Println(addT(3.14, 2.718))

	fmt.Println(compute)

	x := compute(hypo)
	fmt.Println(x)


	i, c := adder()
	fmt.Println(i())
	fmt.Println(c())

}



// func maintoo() {
// 	i, c := adder()
// 	fmt.Println(i())
// 	fmt.Println(c())
// }
