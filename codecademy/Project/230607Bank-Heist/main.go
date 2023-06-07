package main

import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  rand.Seed(time.Now().UnixNano())
  // var isHeistOn bool
  // isHeistOn = true
  isHeistOn := true
  eludedGuards := rand.Intn(100)
  
  if eludedGuards >= 50 {
    fmt.Println("Looks like you've managed to make it past the guards. Good job, but remember, this is the first step.")
  } else{
    fmt.Println("Plan a better disguise next time?")
  }
  
  openedVault := rand.Intn(100)
  if isHeistOn && openedVault >= 70 {
    fmt.Print("Grab and Go!")
  } else if isHeistOn == false{
    fmt.Println( "Shit! Vault Can't be Opened")
  } 
  
  leftSafely := rand.Intn(5)
  
  if isHeistOn{
    switch leftSafely {
      case 0:
      isHeistOn = false
      fmt.Print("Looks like you tripped an alarm... run?")
      case 1:
      isHeistOn = false
      fmt.Print("Turns out vault doors don't open from the inside...")
      case 2:
      isHeistOn = false
      fmt.Println("When did they start raising dogs in vaults??")
      case 3:
      isHeistOn = false
      fmt.Println("Looks like this fingerprint scanner won’t accept any fingerprint…")
      default:
      fmt.Println("Start the getaway car!")
    }
  }
  if isHeistOn{
    amtStolen := 10000 + rand.Intn(1000000)
    fmt.Println("$", amtStolen, "not bad!")
  }
  fmt.Println("isHeistOn is currently:", isHeistOn)
}
