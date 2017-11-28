// rules you can resolve or reject 
// you can only resolve once
// can only pass one value

const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    //resolve('this is my resolve');
   reject('something whent wrong'); 
  }, 1500);
  
});

console.log('before');

promise.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});





console.log('after');