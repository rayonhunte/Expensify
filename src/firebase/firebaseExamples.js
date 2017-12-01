//const expenses = [{
  //   description: 'Gum',
  //   note: '',
  //   amount: 195,
  //   createAt: 0
  // }, {
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createAt: moment(0).subtract(4, 'days').valueOf()
  // }, {
  //   description: 'Credit Card',
  //   note: '',
  //   amount: 4500,
  //   createAt: moment(0).add(4, 'days').valueOf()
  // }];
  

// expenses.map(expense =>{
//   database.ref('expenses').push({
//     ...expense
//   });
// });


// const showData = ()=>{database.ref('expenses').once('value').then(
//   (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push(
//         {
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         }
//       );
//     });
//     console.log(expenses);
//   }
// ).catch(
//   (error)=>{
//     console.log(error);
//   }
// );
// };

// database.ref('expenses').on('value', showData);

// // dif events
// database.ref('expenses').on('child_removed', snapshot =>{
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot =>{
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot =>{
//   console.log(snapshot.key, snapshot.val());
// });



// expenses.map(expense =>{
//   database.ref('expenses').push({
//     ...expense
//   });
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'python Angular'
// });

// database.ref('notes/-L-2G-SAb3T5m5f6VmR8').update({
//   body:'yes so this works'
// });

/* 
  Firebase does not store arrays
  convert arrays to objects
*/

// const firebaseNotesArray =[
//   {
//     title: 'first note',
//     body: 'This is my First Note'
//   },
//   {
//     title: 'second note',
//     body: 'This is my Second Note'
//   }
// ];

// const firebaseNotObject = {
//   notes: {
//     noteOneId: {
//       title: 'first note',
//       body: 'This is my First Note'
//     },
//     noteTow:{
//       title: 'second note',
//       body: 'This is my Second Note'
//     }
//   }
// };


// database.ref().on('value',(data)=>{
//   const user = data.val();
//   console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// },(e)=>{
//   console.log(e);
// });

// setTimeout(()=>{
//   database.ref().update({
//     name: 'Ryan Hunte',
//     'job/title': 'Super Developer',
//     'job/company': 'RASH'
//   }).then(()=>{
//     console.log("data updated");
//   }).catch((e)=>{
//     console.log(e);
//   });
// }, 7000);




// database.ref().once('value').then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val);
// }).catch((error)=>{
//   console.log(error);
// });


// database.ref('location/city').once('value').then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val);
// }).catch((error)=>{
//   console.log(error);
// });

// //on 
// const onValueChange = database.ref().on('value',(snapshot)=>{
//   console.log(snapshot.val());
// }, (e)=>{
//   console.log(e);
// });

// setTimeout(()=>{
//   database.ref().update({
//       'location/city': 'Georgetown'
//   }).then(()=>{
//     console.log('changed location');
//   }).catch((error)=>{
//     console.log(error);
//   });
// }, 3500);


// setTimeout(()=>{
//   database.ref().update({
//       'location/city': 'Malta'
//   }).then(()=>{
//     console.log('changed location');
//   }).catch((error)=>{
//     console.log(error);
//   });
// }, 7000);

// // unsubscribe from one subscription
// setTimeout(()=>{
//   database.ref().off(onValueChange);
// },7002);

// setTimeout(()=>{
//   database.ref().update({
//       'location/city': 'Beer'
//   }).then(()=>{
//     console.log('changed location');
//   }).catch((error)=>{
//     console.log(error);
//   });
// }, 10500);

// database.ref().set({
//   name: 'Rayon Hunte',
//   age:35,
//   stressLevel: 6,
//   job: {
//     title: 'Developer',
//     company: 'RASH'
//   },
//   isSingle: false,
//   location:{
//     city: 'Georgetown',
//     country:'Guyana'
//   }
// }).then((data)=>{
//   console.log('object data created');
// }).catch((error)=>{
//   console.log(error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(()=>{
//   console.log("updated object");
// }).catch((error)=>{
//   console.log(error);
// });


// database.ref('isSingle').remove().then(()=>{
//  console.log('data removed');
// }).catch((error)=>{
//   console.log(error);
// });


// database.ref().update({
//   name: 'Mike',
//   age:37,
//   job: 'developer',
//   'location/city': 'Boston'
// }).then(()=>{
//   console.log('data updated');
// }).catch((error)=>{
//   console.log(error);
// });

// database.ref().set({
//   name: 'Rayon Hunte',
//   age:35,
//   isSingle: false,
//   location:{
//     city: 'Georgetown',
//     country:'Guyana'
//   }
// }).then((data)=>{
//   console.log('object data created');
// }).catch((error)=>{
//   console.log(error);
// });


// database.ref('attributes').set({
//   height: 27,
//   weight: 30
// }).then(()=>{
//   console.log('attributes added');
// }).catch((error)=>{
//   console.log(error);
// });