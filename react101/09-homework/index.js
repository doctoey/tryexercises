//การบ้าน
//convert ตัวเลข -> ภาษาไทย
// 1 -> หนึ่ง
// 10 -> สิบ
// 11 -> สิบเอ็ด
// 21 -> ยี่สิบเอ็ด
// 100 -> หนึ่งร้อย
// 1000 -> หนึ่งพัน

// function convertToThaiText(num) {
//   var numArr = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
//   var posArr = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];

//   if (num === 0) {
//       return numArr[0];
//   }

//   var res = '';
//   var hasTen = false;

//   if (num >= 10 && num <= 99) {
//       hasTen = true;
//   }

//   for (var i = 6; i >= 0; i--) {
//       var divisor = Math.pow(10, i * 4);
//       if (num >= divisor) {
//           var quotient = Math.floor(num / divisor);
//           res += numArr[quotient] + posArr[i];
//           num %= divisor;
//       }
//   }

//   if (hasTen && num > 0) {
//       var ten = Math.floor(num / 10);
//       if (ten === 1 && num % 10 === 1) {
//           res += 'สิบเอ็ด';
//       } else if (ten === 2 && num % 10 === 1) {
//           res += 'ยี่สิบเอ็ด';
//       } else if (ten === 2) {
//           res += 'ยี่สิบ';
//       } else {
//           res += numArr[ten] + 'สิบ';
//       }
//       num %= 10;
//   }

//   if (num > 0) {
//       res += numArr[num];
//   }

//   return res;
// }

function convertToThaiText(num) {
  var numArr = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  var posArr = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];

  if (num === 0) {
      return numArr[0];
  }

  var res = '';
  var hasTen = false;

  if (num >= 10 && num <= 99) {
      hasTen = true;
  }

  for (var i = 6; i >= 0; i--) {
      var divisor = Math.pow(10, i * 4);
      if (num >= divisor) {
          var quotient = Math.floor(num / divisor);
          res += numArr[quotient] + posArr[i];
          num %= divisor;
      }
  }

  if (hasTen && num > 0 && num < 10) {
      var ten = Math.floor(num / 10);
      if (ten === 1 && num % 10 === 1) {
          res += 'สิบเอ็ด';
      } else if (ten === 2 && num % 10 === 1) {
          res += 'ยี่สิบเอ็ด';
      } else if (ten === 2) {
          res += 'ยี่สิบ';
      } else {
          res += numArr[ten] + 'สิบ';
      }
      num %= 10;
  }

  if (num > 0) {
      res += numArr[num];
  }

  return res;
}

  

// console.log(convertToThaiText(1)); // หนึ่ง
// console.log(convertToThaiText(10)); // สิบ
// console.log(convertToThaiText(11)); // สิบเอ็ด
// console.log(convertToThaiText(21)); // ยี่สิบเอ็ด
// console.log(convertToThaiText(100)); // หนึ่งร้อย
// console.log(convertToThaiText(1000)); // หนึ่งพัน
  
module.exports = {
  convertToThaiText
};
  