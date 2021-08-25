Assignment Problem 1

function seerToMon(seer) {
	//checking the parameter is it a number or not
	if (typeof seer != "number") {
		//Give Error Message
		return "Error!! please give a number value";
	}
	//checking the number is it positive or not
	else if (seer < 0) {
		//Give Error Message
		return "Found Error! Please enter positive number";
	}
   //calculate seer to mon
  let seerToMonConvertion = seer / 40;

  //return output
	return seerToMonConvertion;
}

var seerInput = 100;
console.log(seerToMon(seerInput),' Mon');

// Answer to question no 02
   // totalSales
function totalSales(shirtsquantity, pantsquantity, shoesquantity) {
    //checking the parameter is it a number or not
    if (typeof (shirtsquantity) != "number" || typeof (pantsquantity) != "number" || typeof (shoesquantity) != "number")
    {
        //give Error Message
        return "Error!! please give a number value"; }
        //checking the parameter is it positive or not
        else if (shirtsquantity < 0 || pantsquantity < 0 || shoesquantity < 0) {
                //give Error Message
                return 'Found Error! Please enter positive number';
            }
                //Calculation
                const shirtsPrice = 100;
                const  pantsPrice = 200;
                const shoesPrice = 500;

                const shirtsalesprice=shirtsquantity*shirtsPrice;
                const pantsalesprice=pantsquantity*pantsPrice;
                const shoesalesprice=shoesquantity*shoesPrice;
                const total =  shirtsalesprice + pantsalesprice +shoesalesprice;
    //give total cost
    return total;
}
//console
    let totalpurches=totalSales(5 , 2 , 4 );
        console.log(totalpurches);

// Assignment problem 3

function deliveryCost(shirtQuantity) {

//checking  the parameter is it  a number or not
if (typeof (shirtQuantity) != "number")
{
    //give Error Message
    return "Error!! please give a number value";
    }
    //checking the parameter is it positive or not
    else if (shirtQuantity < 0)
    {
        //give Error Message
        return 'Found Error! Please enter positive number';
        }
        // initializing

  let first100Count = 100;
  let totalDeliveryCost = 0;

  if (shirtQuantity <= 100) {

    totalDeliveryCost = shirtQuantity* 100;

  }
  else if (shirtQuantity <= 200) {

    let first100Cost = first100Count * 100;
    let remainningProduct = shirtQuantity - 100;
    let second100Cost = remainningProduct * 80;

    totalDeliveryCost =  first100Cost + second100Cost;
  }
  else {
    first100Cost = first100Count * 100;
    second100Cost = first100Count * 80;
    third100Count = shirtQuantity - 200;
    let third100Cost = third100Count * 50;
    totalDeliveryCost = first100Cost + second100Cost + third100Cost;
  }

  return totalDeliveryCost;

}

var shirtQuantity = 700;
console.log(deliveryCost(shirtQuantity));

Answer to question no 04

perfectFriend
    function perfectFriend(goodFriendlist) {
        //checking the parameter is it a object or not
        if (typeof (goodFriendlist) != "object") {
            //Return Error Message
            return "Error!! please give a object";
        }
        //checking the parameter object elements are string or not
        else {
            for (const friend of goodFriendlist) {
                if (typeof (friend) != "string"){
        // give Error Message
        return "Error!! Parameter object elements must be string";
    }
    }
}
//searching for perfect friend
for (const friend of goodFriendlist)
    {
    //condition for checking perfect friend
    if (friend.length == 5)
        {
            //give friends name
            return friend;
        }
    }
        //give Error Message if not found any perfect friend
      return "Sorry!! You don't have any perfect friend.";

}
    var friends = [5, 'piash', 'shovon','ananna', 'sakib', 'limon'];
    var BestFriend = perfectFriend(friends);
    console.log(BestFriend);