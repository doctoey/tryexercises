package main

import "fmt"

func main() {
	//Array - immutable list //ไม่เปลี่ยนค่าใน array
	var a [2]int
	a[0] = 9
	a[1] = 10

	fmt.Println(a, a[0], a[1])

	var b = [2]string{"apple", "orange"}
	fmt.Println(b)

	//Slice - mutable list //เปลี่ยนค่าใน slice ได้

	var c []int
	fmt.Println(c)

	var d = []string{
		"ddog",
		"ccat",
	}
	fmt.Printf("len:%d, cap:%d, %p \n", len(d),cap(d), d) //len:2, cap:2, 0xc0000a03e0
	d = append(d, "bbird")
	fmt.Printf("len:%d, cap:%d, %p ", len(d),cap(d), d) //len:3, cap:4, 0xc000060040
	d = append(d, "aant")
	fmt.Printf("\nlen:%d, cap:%d, %p \n", len(d),cap(d), d) //len:4, cap:4, 0xc000060040

	fmt.Println(d) //[ddog ccat bbird aant]
	//[ddog ccat bbird aant]
	// 0     1    2    3
	fmt.Println(d[1:2]) //[ccat]
	fmt.Println(d[:2])  //[ddog ccat] // 0 ละได้ ไม่ต้องเขียน
	fmt.Println(d[2:])  //[bbird aant] // ถ้าจะเอาถึงตัวสุดท้าย ละได้ ไม่ต้องเขียน

	fmt.Printf("len:%d, cap:%d, %p \n", len(d),cap(d), d) //len:4, cap:4, 0xc000060040

	//excersice
	s := []string{"apple", "banana", "coconut", "dog", "elephant", "fish", "grape"}
	//apple banana coconut
	fmt.Println(s[:3]) //[apple banana coconut]
	fmt.Println(s[4:]) //[elephant fish grape]
}
