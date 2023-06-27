package cal

import "testing"

func TestSumOfFirst(t *testing.T) {
	given := 3
	want := 6

	get := sumOfFirst(given)
	if want != get {
		t.Errorf("given %d want %d but %d\n", given, want, get)
	}
}