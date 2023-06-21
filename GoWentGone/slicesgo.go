package main

import "fmt"

func main() {
	skills := []string{"PHP", "JavaScript", "HTML"}
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
	
	fmt.Println("") // เว้นบรรทัด
	fmt.Printf("length : %d -- val:%#v\n",len(skills), skills) // length:3

	skills = append(skills, "CSS") // append คือการเพิ่มข้อมูลเข้าไปใน array ไม่มีผลกระทบต่อ skills เดิมจ้า
	fmt.Printf("length : %d -- val:%#v\n",len(skills), skills) // length:4
	
	skills = append(skills, "PAI IPA", "TEST") //ใส่หลายๆตัวได้
	fmt.Printf("length : %d -- val:%#v\n",len(skills), skills) // length:6

}
