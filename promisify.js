// without promisify : - take callback as arguments and return nothing..
function myOwnsetTimeout(callback, duration) {
  setTimeout(callback, duration);
}

myOwnsetTimeout(function () {
  console.log("This is function without promisify async function");
}, 3000);

// with promisify

function promisifyMyownsetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      console.log("asdf");
    }, duration);
    resolve("hi there");
  });
  return p;
}

console.log(promisifyMyownsetTimeout(1000)); //print pending promise

promisifyMyownsetTimeout(1000).then(function (data) {
  console.log("This is function with promisify async function " + data);
});

// // async await
async function callPromisifyFunction() {
  const value = await promisifyMyownsetTimeout(2000);
  console.log(value);
}

callPromisifyFunction();
