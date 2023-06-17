if (true && true) {
  console.log("Hello");
}

if (false || true) {
  console.log("Hello");
}

let ds = 10,
  dx = 20;

if (ds < dx) {
  console.log("TS IS SOOOOOOOOO");
} else if (ds > dx) {
  console.log("TS IS SOO hard");
}

ds < dx ? console.log("correct") : console.log("NOOOOO");

let selectMenu: number = 1;

switch (selectMenu) {
  case 0:
    console.log("Menu 0");
    break;
  case 1:
    console.log("Menu 1");
    break;
  case 2:
    console.log("Menu 2");
    break;
}
