// var itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3",
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9"
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1"
//     },
//     {
8//         name: "pen", 
//         price: "100", 
//         quantity: "2" 
//     },
// ]
// console.log("item name " + "price " + "amount ");
// for (
//     var i = 0; i < itemsArray.length; i++) {
//     var item = (itemsArray[i].name);
//     var price = (itemsArray[i].price);
//     var quantity = (itemsArray[i].quantity);
//     var sumOfItem = +(itemsArray[i].price * quantity);
//     var billSummary = (i + 1 + " " + item + "    " + price + "    " + quantity + "    " + price * quantity)
//     console.log(billSummary);
// }


// constructor

function Data(branchname, managername, numberofemplyee, branchcontact)
{
this.branchname = branchname;
this.managername = managername;
this.numberofemplyee = numberofemplyee;
this.branchcontact = branchcontact;
}
var data1 = new Data("tariq book town", "ibrahim", 12 , "021-36649425")
var data2 = new Data("tariq book land", "shaukat", 6 , "021-36829081")
var data3 = new Data("dawood book town", "yaqoob", 8 , "021-36649425")
var data4 = new Data("new tariq book city", "abdul hameed", 10 , "021-4818347")
var data5 = new Data("tariq book city", "abdul aziz", 5 , "021-34987511")
}
cons