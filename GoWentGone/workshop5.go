package main

import "fmt"

func main() {
	// Workshop: slice
	// กำหนด: 1. เราได้เก็บสะสมคะแนนโหวตผู้ชมไว้เป็น 2 ชุด ที่เก็บอยู่ในตัวแปร xs และ ys เรียบร้อยแล้ว
	// 	  2. ให้ทำการรวมคะแนนโหวตที่อยู่ในตัวแปร xs และ ys ไปเก็บไว้ในตัวแปร votes ตามลำดับ (ค่าใน xs ทั้งหมดแล้วต่อด้วย ys).
	//	  3. ทำการแสดงผลคะแนนโหวตของผู้ชมที่อยู่ในตำแหน่ง(index)ที่ 5 ถึง 8 ของ votes ออกมาทางหน้าจอ
	//
	// Output:
	// votes: [4 5 7 8 3 8 0 7 2 10 9 7]
	// votes 5 - 8: [8 0 7 2]

	// TODO: write code below.
	xs := []float64{4, 5, 7, 8, 3, 8, 0}
	ys := []float64{7, 2, 10, 9, 7}

	var votes []float64
	votes = append(xs, ys...)

	fmt.Printf("votes: %v\n", votes)
	fmt.Printf("votes 5 - 8: %v\n", votes[5:9])
}
