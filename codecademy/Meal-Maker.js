// step 1
// step 2
const menu = {
  _meal: '',
  _price: 0,
  
  /* step 4
 menu._meal = 13;
 menu._price = 'Mama';
 console.log(menu);
 */


  set meal(mealToCheck) { //step 5
    if (typeof mealToCheck === 'string') { // step 6
        return this._meal = mealToCheck;
    }
  },

    // step 7
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
          return this._price = priceToCheck;
      }
    }, 

  get todaysSpecial() { // step 9
    if (this._meal && this._price) { // step 10
        return `Today’s Special is ${this._meal} for $${this._price}!`
    } else {
        return `Meal or price was not set correctly!`
    }
  }

};
// step 8 test
 menu._meal = 'Mama';
 menu._price = '13';
// step 11
 console.log(menu.todaysSpecial);

 
