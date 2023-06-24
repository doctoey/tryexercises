package main

import "fmt"

type course struct {
	name       string
	instructor string
	price      float64
}

func main() {
	c := course{
		name:       "basic go",
		instructor: "Mr. A",
		price:      9999,
	}
	n := c.name
	c.instructor = "toey"
	fmt.Println("name: ", n)
	fmt.Println("instructor: ", c.instructor)
	fmt.Println("price: ", c.price)

	c2 := course{"basic go", "Mr. A", 9999} // ต้องใส่ค่าตามลำดับ สลับกันไม่ได้ ค่าเพี้ยน
	fmt.Printf("c2: %#v\n", c2) //c2: main.course{name:"basic go", instructor:"Mr. A", price:9999}

	c3 := course{instructor:"some field"}
	fmt.Printf("c3: %#v\n", c3) //c3: main.course{name:"", instructor:"some field", price:0}
}
