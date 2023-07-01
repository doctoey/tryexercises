package main

func main() {
	//zero value
	//number = 0
	// string = ""
	// bool = false
	// nil = nil
	//pointer = nil

	//array
	// immutable ประกาศมาแล้ว จะขนาดเท่านั้นเสมอ เปลี่ยนไม่ได้ ลดไม่ได้ เพิ่มไม่ได้
	var fourNum [4]int

	fourNum[0] = 1
	fourNum[1] = 2

	//slice zero value = nil
	// mutable 
	var nums []int

	nums = make([]int, 4)

	nums[0] = 1
	nums[1] = 2
}
