package main

import "fmt"

// greeting("Pallat") -> "Hello, Pallat"
func greeting(name string) string {
	return "Hello, " + name
}

// greetingWithAge("Pallat", 30) -> "Hello, Pallat. You are 30 years old."
func greetingWithAge(name string, age int) string {
	return fmt.Sprintf("Hello, %s. You are %d years old.", name, age)
}

// greetingWithAgeAndDrink("Pallat", 30, "Cola") -> "Hello, Pallat. You are 30 years old and your favorite drink is Cola."
func greetingWithAgeAndDrink(name string, age int, drink string) string {
	return fmt.Sprintf("Hello, %s. You are %d years old and your favorite drink is %s.", name, age, drink)
}

// จงแก้ไข func isOdd ให้สามารถ return boolean ได้อย่างถูกต้อง
//โดยที่ถ้าใส่ค่าเป็นเลขคี่จะ return true และเลขคู่จะ return false

func isOdd(n int) bool {
	if n%2 == 0 {
		return true
	} else {
		return false
	}
}

// จงแก้ไข func ต่อไปนี้ ให้สามารถทำงานได้อย่างถูกต้อง

// sumOfFirst(3) should return 3+2+1=6
// isPrime(1) should return false
// isPrime(2) should return true
// isPrime(3) should return true
// isPrime(4) should return false

// It should return sum of n, n-1, n-2, ..., 1
// sumOfFirst(3) should return 3+2+1=6
func sumOfFirst(n int) int {
	sum := 0
	for i:=n ; i >= 1 ; i-- {
		sum += i
	}
	return sum
}


// A prime number is a number greater than 1 with only two factors – themselves and 1
func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	println("Hello, world!")
	fmt.Println("Hello, world!")

	fmt.Println(greeting("TOEY"))
	fmt.Println(greetingWithAge("TOEY", 99))
	fmt.Println(greetingWithAgeAndDrink("TOEY", 99, "Cola"))

	fmt.Println(isOdd(1)) //false
	fmt.Println(isOdd(2)) //true

	fmt.Println(sumOfFirst(3)) //6
	fmt.Println(sumOfFirst(4)) //10
	fmt.Println(isPrime(1)) //false
	fmt.Println(isPrime(2)) //true
	fmt.Println(isPrime(3)) //true

}
