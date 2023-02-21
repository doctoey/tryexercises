function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');


//Default Parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();



//Return
 function monitorCount(rows, columns){
   let cal = rows * columns;
   return cal;
 };
 const numOfMonitors = monitorCount(5, 4)
 console.log(numOfMonitors)
