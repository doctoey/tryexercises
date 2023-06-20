package main

import "fmt"

// - 1. ให้ประกาศตัวแปรอาร์เรย์ประเภทหนัง(genres)ที่เก็บค่าเป็น "Action", "Adventure" และ "Fantasy" ตามลำดับ
// - 2. ให้อ่านค่าของอาร์เรย์แต่ละช่องเพื่อแสดงผล ให้แสดงผลทั้งหมดตามตัวอย่าง Output ด้านล่าง
// - 3. หลังจากนั้นเปลี่ยนแปลงค่าในอาร์เรย์ index ที่ 1 ให้เป็น Sci-Fi พร้อมทั้งแสดงผล เพื่อยืนยันว่าค่าเปลี่ยนจริง

// Output:
// "genres[0]: Action"
// "genres[1]: Adventure"
// "genres[2]: Fantasy"
// "genres[1]: Sci-Fi"


func main () {
	genres := [3]string{"Action", "Adventure", "Fantasy"}
	fmt.Printf("genres[0]: %s\n", genres[0])
	fmt.Printf("genres[1]: %s\n", genres[1])
	fmt.Printf("genres[2]: %s\n", genres[2])
	genres[1] = "Sci-Fi"
	fmt.Printf("genres[1]: %s\n", genres[1])
}