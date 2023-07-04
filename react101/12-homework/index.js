function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Here is your data");
      } else {
        reject("Sorry, there was an error");
      }
    }, 500);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    let processedData = data.toUpperCase(); // upper_case
    resolve(processedData);
  });
}

function processData2(data) {
  console.log(`Data received by processData2: ${data}`);
}

// Homework
// 1.handling Promise with then
getData()
  .then((data) => {
    processData(data)
      .then((processedData) => {
        processData2(processedData);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });

// getData()
//   .then((value)=> {

//   })

// 2. handling Promise with async / await
async function run() {
  try {
    const data = await getData();
    const processedData = await processData(data);
    processData2(processedData);
  } catch (error) {
    console.error(error);
  }
}

run();

/// 3. handling Promise with Promise.all
Promise.all([
  getData(), //1s
  processData(''), //2s
]).then([valueGetData, valueProcessData])

/// 
Promise.race([
  getData(), //1s
  processData(''), //2s
]).then([valueGetData, valueProcessData])