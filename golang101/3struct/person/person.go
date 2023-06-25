package person

type Person struct {
	Name string
	Age  int
}

func (p *Person) appendHello() {
	p.Name = "Hello " + p.Name
}