// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const marksBMI = marksWeight / marksHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// const markHigherBMI = marksBMI > johnBMI;
// let num = 12;
// if (num == "12") {
//   console.log(typeof num);
// }

// const age = 22;
// let myhabbit = age >= 22 ? "good" : "not";
// console.log(myhabbit);

// if (markHigherBMI) {
//   console.log(`mark BMI (${marksBMI}) is higher than john,s (${johnBMI}) `);
// }
// const container = document.querySelector(".container");
// const clickmebtn = document.querySelector(".btn");
// const box01 = document.querySelectorAll(".box1");
// console.log(box01);
// ////// dynamic embeding of attributes
// for (let i = 0; i < box01.length; i++) {
//   box01[i].addEventListener("click", function (event) {
//     console.log(box01[i].textContent);
//   });
// }

// clickmebtn.addEventListener("click", function (event) {
//   for (let i = 0; i < box01.length; i++) {
//     box01[i].style.display = "none";
//   }
// });

// // box01.addEventListener("click", function () {
// //   box01.textContent = "you are  a programmer";
// //   box01.style.color = "red";
// // });

// container.addEventListener("click", function () {
//   container.classList.toggle("beautyfy");
// });

// let name = ["saba", "faizan", "love"];

// for (let index = 0; index < name.length; index++) {
//   name[index] = "faizan";
// }

// console.log(name);

// let array = [123, 243, 5, 34, 546, 5676, 8];
// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] < array[i]) {
//       let temp = array[j];
//       array[j] = array[i];
//       array[i] = temp;
//     }
//   }
// }
// console.log(array);
// a=undifined,

// const obj = {
//   Fullname: { name: "company" },
//   company: { address: "magnus mage" },
// };
// let myname, mycompanyname;
// ({ Fullname: myname, company: mycompanyname } = obj);
// console.log(myname, mycompanyname);
// let obj = {};

// obj.mynum = 23;
// const check = obj.mynum ? obj.mynum : 10;
// // console.log(check);
// // // const dnum = check || 10;
// // console.log(`${dnum}`);
// // console.log(check || 10);
// console.log("" && 10);

// function name01(...obj) {
//   console.log(obj);
// }

// name01({ name: "faizan", city: "hsp" });

// console.log(Boolean("0"));

// const check = undefined || 120;
// console.log(check);
// const nameArray = [32, 432, 42, 34, 32, 4, 3];
// console.log(`======================${nameArray.entries()}`);
// for (const [index, value] of nameArray.entries()) {
//   console.log(index, value);
// }

// const obj = {
//   name: "hello",
// };

// const a = Object.entries(obj);

// for (const item of a) {
//   console.log(item);
// }

// const num02 = [21, 3, 21, 3, 21, 3, 21, 3];
// const num03 = [...nameArray, ...num02];
// for (let index = 0; index < num03.length; index++) {
//   console.log(num03[index]);
// }

// let obj = {
//   // Name: { Hello: "hello world" },
//   // city: ["hsp", "bwp", "cht"],
//   Name: "Hello",
// };

// const newArray = Object.entries(obj);
// console.log(newArray);
// Object.key
// const myarray = Object.entries(obj);
// console.log(myarray);

// for (const [key, value] of myarray) {
//   console.log(value);
// }

// const arrayObject = [
//   { std: "faizan", age: 30 },
//   { std: "Akbar", age: 10 },
//   { std: "dalawar", age: 40 },
// ];

// console.log(arrayObject[0].std[0].toLowerCase());

// const nameArray = ["hussain", "zeeshan", "faizan", "Hamza", "tahir"];

// for (let index = 0; index < arrayObject.length - 1; index++) {
//   for (let j = 0 + index; j < arrayObject.length; j++) {
//     if (
//       arrayObject[index].std[0].toLowerCase() >
//       arrayObject[j].std[0].toLowerCase()
//     ) {
//       const temp = arrayObject[index];
//       arrayObject[index] = arrayObject[j];
//       arrayObject[j] = temp;
//     }
//   }
// }

// console.log(arrayObject);

// let naem = "faizan";
// console.log(naem.)
// console.log(nameArray);

// let a = "faizan";
// const letterUppercase = a[0].toUpperCase();
// const fname = letterUppercase + a.slice(1);
// console.log(fname);

// let stringData = "hello my Name is Faizan d".toLowerCase();
// console.log(stringData.includes("faizan"));

// let mystring = "he goes to school daily";
// console.log(mystring.pad("goes"));
// let convert = mystring.split(" ");
// const newitems = [];
// for (const item of convert) {
//   newitems.push(item.replace(item[0], item[0].toUpperCase()));
// }

// console.log(newitems.join(" "));
/////////////////////////////////////////////////////remove dublicate
// let data = [8, 5, 10];
// let checkpoint = { checkDublicate: false };
// let filterData = [];
// const requireData = [];
// ////////////////////////sort
// for (let i = 0; i < data.length - 1; i++) {
//   for (let j = i + 1; j < data.length; j++) {
//     if (data[i] > data[j]) {
//       const temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//     }
//   }
// }

// /////////////////////add dublicate
// if (data.length) {
//   let a = data[data.length - 1];

//   for (let index = 0; index <= a; index++) {
//     data.push(index);
//   }
// } else console.log("failed");

// console.log(data);

// ///////////////////////filter data

// for (let k = 0; k < data.length - 1; k++) {
//   for (let l = k + 1; l < data.length; l++) {
//     if (data[k] === data[l]) {
//       // console.log(`=====matching data===${data[k]}=============`);
//       data[k] = `dublicate`;
//       data[l] = `dublicate`;
//       checkpoint.checkDublicate = true;
//       break;
//     } else {
//     }
//   }
// }

// for (const item of data) {
//   console.log("========sdhfusdhfjudsfsgdy======", item);
//   if (item === "dublicate") {
//     console.log("awesme string", item);
//   } else requireData.push(item);
// }

// console.log(requireData);

// console.log(`=========${filterData}=============`);
// console.log(data);
// let checkpoints = data
//   .join(",")
//   .replace(/dublicate/g, "")
//   .split(" ");
// console.log(checkpoints);

// console.log(checkpoints);

// if (checkpoint.checkDublicate) {
//   // console.log(`=========${data[k]}=============`);
// } else {
//   filterData.push(data[k]);
//   console.log(`=========${data[k]}=============`);
// }

// for (let value = 0; value < filterData.length; value++) {
//   console.log("==============final loop==============", filterData[value]);
//   if (filterData[value] == "dublicate") {
//   } else {
//     requireData.push(filterData[value]);
//   }
// }
// console.log("=======================", requireData);
///////////////////testing
// const data = [1, 23, 12, 31, 2];
// console.log(data.splice(1, 1));
// console.log(data)
//////////////////////////////max number without sort
// let simple = [5, 0, 20, 983, 4, 100];
// let checkPoint = [];
// for (let outer = 0; outer < simple.length - 1; outer++) {
//   for (let inner = outer + 1; inner < simple.length; inner++) {
//     if (simple[inner] > simple[outer]) {
//       if (checkPoint.length === 0) checkPoint[0] = simple[inner];
//       else if (simple[inner] > checkPoint[0]) {
//         checkPoint[0] = simple[inner];
//       }
//     }
//   }
// }

// console.log(checkPoint);

/////////////////// min number without sort
// let simple = [5, 67, 20, 983, 4, 100, 0];
// let checkPoint = [];
// for (let outer = 0; outer < simple.length - 1; outer++) {
//   for (let inner = outer + 1; inner < simple.length; inner++) {
//     if (simple[inner] < simple[outer]) {
//       if (checkPoint.length === 0) checkPoint[0] = simple[inner];
//       else if (simple[inner] < checkPoint[0]) {
//         checkPoint[0] = simple[inner];
//       }
//     }
//   }
// }

// console.log(checkPoint);
// let flight = {
//   booking: [],
//   flightmood: function (flightname, seatno) {
//     this.booking.push({ flightname, seatno });
//     return this.booking;
//   },
// };
// //
// let ghuman = {
//   booking: [],
// };

// const takeoff = flight.flightmood;
// const takedata = takeoff.call(flight, "pia", "236272");
// console.log(takedata[0].flightname, takedata[0].seatno);

// function stdDetail(degree) {
//   return (stdname) => {
//     console.log(`student name ${stdname},degree is ${degree}`);
//   };
// }
// const getFunction = stdDetail("mcs");
// getFunction("faizan");
// getFunction("ali akbar");

//////////////////////questions

// let a = [21, 3213, 21, 3, 21];
// console.log(a[a.length - 1]);
// let lastNumber = a[a.length - 1];
// for (let index = 0; index < lastNumber; index++) {
//   a.push(index);
//   // console.log(index);
// }

// console.log(a);

// function a() {
//   console.log("helllpo");
//   return "faizan";
// }
// let b = a();
// console.log(typeof b);
