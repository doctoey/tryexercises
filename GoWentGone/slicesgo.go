package main

import "fmt"

func show(sk []string) {
	fmt.Printf("show: %#v\n", sk)
}

func main() {
	skills := []string{"PHP", "JavaScript", "HTML"} //dynamic array ไม่ต้องกำหนดขนาด
	fmt.Printf("%T => %#v\n", skills, skills)
	fmt.Println("") // เว้นบรรทัด
	skills[0] = "Golang"
	fmt.Printf("%#v\n", skills)

	fmt.Println("") // เว้นบรรทัด
	s := skills[0]
	fmt.Printf("%#v\n", s)
	fmt.Println("") // เว้นบรรทัด

	for i := 0; i < len(skills); i++ {
		fmt.Println("for => %#v\n", skills[i])
	}

	fmt.Println("")                                             // เว้นบรรทัด
	fmt.Printf("length : %d -- val:%#v\n", len(skills), skills) // length:3

	skills = append(skills, "CSS")                              // append คือการเพิ่มข้อมูลเข้าไปใน array ไม่มีผลกระทบต่อ skills เดิมจ้า
	fmt.Printf("length : %d -- val:%#v\n", len(skills), skills) // length:4

	skills = append(skills, "PAI IPA", "TEST")                  //ใส่หลายๆตัวได้
	fmt.Printf("length : %d -- val:%#v\n", len(skills), skills) // length:6
	fmt.Println("")                                             // เว้นบรรทัด

	show(skills)

	s1 := skills[0:2]           // ตัด array ตั้งแต่ 0 ถึง 2 ไม่รวม 2
	fmt.Printf("s1: %#v\n", s1) //s1: []string{"Golang", "JavaScript"}

	fmt.Println("") // เว้นบรรทัด
	l := len(skills)
	show(skills[0:l]) // ตัด array ตั้งแต่ 0 ถึง ตัวสุดท้าย //show: []string{"Golang", "JavaScript", "HTML", "CSS", "PAI IPA", "TEST"}
	show(skills[:l])  //ได้เหมือนกัน
	show(skills[:])   //ได้เหมือนกัน

	ss := make([]int, 3)    // สร้าง array ที่มีขนาด 3 และกำหนดค่าเริ่มต้นเป็น 0
	fmt.Printf("%#v\n", ss) //[]int{0, 0, 0}

	ss[1] = 41
	fmt.Printf("%#v\n", ss) //[]int{0, 41, 0}
	v := ss[1]
	fmt.Printf("%#v\n", v) //41

}
