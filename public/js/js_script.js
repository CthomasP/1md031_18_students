function MenuItem() {

    this.name = function() {
        return this.firstName + ' ' + this.lastName;
    };

}
function Employee(fn, ln, branch, pos) {
    this.firstName = fn; // The this keyword refers to the object itself
    this.lastName = ln;
    this.branch = branch;
    this.position = pos;
    this.name = function() {
        return this.firstName + ' ' + this.lastName;
    };
}
//var el=document.getElementById("myID");
//el.innerHTML="Hej";


// Objects are then instantiated using the new keyword
//var emp = new Employee('Maike', 'Paetzel', 'Uppsala', 'PhD Student');

//console.log( emp.name() )
//1MD031_18_STUDENTS
//node app.js

function MenuItem(Name,disc,kCal,cGluten){
    this.Name=Name;
    this.disc=disc;
    this.kCal=kCal;
    this.cGluten=cGluten;
    this.name = function() {
        return this.Name + ' ' + this.disc+ ' ' + this.kCal+ ' ' + this.cGluten;
    };

}


//var emp = new MenuItem('Super Burger','Cheesy','950 kCal','conatins gluten')
//console.log( emp.name() )


var myElement = document.getElementById("myID");
//console.log(myElement);

for (burger of food){
    if (burger.stock > 0) 
    {
       // console.log(burger.kCal)
        var divItem =document.createElement("div");
        divItem.className= "box";
        var headline = document.createElement("p");
        var listItem1 = document.createElement("li");
        var listItem2 = document.createElement("li");
        var listItem3 = document.createElement("li");

        var hamburger = document.createTextNode(burger.name);
        var calories = document.createTextNode(burger.kCal+" kCal");

        var ImgItem= document.createElement("img")
        ImgItem.className="burgerpicture";
        ImgItem.src= burger.img;

        headline.className="headlist";
        listItem1.className = "list";
        listItem2.className = "list";
        listItem3.className = "list";


        headline.appendChild(hamburger);
        listItem1.appendChild(calories)

        divItem.appendChild(headline);
        divItem.appendChild(ImgItem);
        divItem.appendChild(listItem1);

        if(burger.lactose){
            var conL=document.createTextNode("Contains");
            var lactose =document.createTextNode(" lactose");
            boldL = document.createElement("strong");
            boldL.appendChild(lactose);
            listItem2.appendChild(conL);
            listItem2.appendChild(boldL);
            divItem.appendChild(listItem2);
        }
        if(burger.gluten){
            var conG=document.createTextNode("Contains");
            var gluten =document.createTextNode(" gluten");
            boldG = document.createElement("strong");
            boldG.appendChild(gluten);
            listItem3.appendChild(conG);
            listItem3.appendChild(boldG);
            divItem.appendChild(listItem3);
        }
        
        var addO=document.createTextNode("Add to order: ");
        var selectO =document.createElement("input");
        selectO.name="checkBurg";
        selectO.value=burger.name;
        selectO.setAttribute("type", "checkbox");
        var theButton= document.createElement("p");
        theButton.appendChild(addO);
        theButton.appendChild(selectO);
        divItem.appendChild(theButton);

      
        myElement.appendChild(divItem);

    }  
    
}
/*function buttonInfo(){
    var orderInfo={fname:"",email:"",payment:"",gender:"",burger:""} //street:"",hnumber:"",
    orderInfo.name=document.getElementById("Full name").value;
    orderInfo.email=document.getElementById("email").value;
   // orderInfo.street=document.getElementById("street").value;
   // orderInfo.hnumber=document.getElementById("House number").value;
    orderInfo.payment=document.getElementById("payment").value;
    var genders = document.getElementsByName("gender")
    for(x of genders){
        if(x.checked){
            orderInfo.gender = x.value;
        }
    }
    var theBurger=document.getElementsByName("checkBurg");
    for(x of theBurger){
        if(x.checked){
            orderInfo.burger=push(x.value);
        }
    }
    //console.log(orderInfo.burger);
    var divItem= document.createElement("div");

    var infoName=document.createElement("li");
    var theName= document.createTextNode(orderInfo.name);
    infoName.appendChild(theName);
    divItem.appendChild(infoName);

    var infoMail=document.createElement("li");
    var theMail= document.createTextNode(orderInfo.email);
    infoMail.appendChild(theMail);
    divItem.appendChild(infoMail);

   // var infoStreet=document.createElement("li");
   // var theStreet= document.createTextNode(orderInfo.street);
   // infoStreet.appendChild(theStreet);
   // divItem.appendChild(infoStreet);

   // var infoHnumber=document.createElement("li");
   // var theHnumber= document.createTextNode(orderInfo.hnumber);
   // infoHnumber.appendChild(theHnumber);
   // divItem.appendChild(infoHnumber);
    
    var infoPayment=document.createElement("li");
    var thePayment= document.createTextNode(orderInfo.payment);
    infoPayment.appendChild(thePayment);
    divItem.appendChild(infoPayment);

    var infoGender=document.createElement("li");
    var theGender=document.createTextNode(orderInfo.gender);
    infoGender.appendChild(theGender);
    divItem.appendChild(infoGender);

    var infoBurger=document.createElement("li");
    var theBurger=document.createTextNode(orderInfo.burger);
    infoBurger.appendChild(theBurger);
    divItem.appendChild(infoBurger);

    var theElement =document.getElementById("info");
    theElement.appendChild(divItem);
}*/


function OrderInfo(){
    var orderInfo={name:"",email:"",payment:"",gender:""}
    orderInfo.name=document.getElementById("Full name").value;
    orderInfo.email=document.getElementById("email").value;
    orderInfo.payment=document.getElementById("payment").value;
    var genders = document.getElementsByName("gender")
    for(x of genders){
        if(x.checked){
            orderInfo.gender = x.value;
            break;
        }
    }
    return orderInfo;
}
function burgerSelection(){
    var selectedBurgers=[];
    var burgers=document.getElementsByName("checkBurg");
    for(burg of burgers){
        if(burg.checked){
            selectedBurgers.push(burg.value);
        }
    }
    return selectedBurgers;
}
function OrderOutput(orderInfo,burgers,coordinates){
    var divItem= document.createElement("div");

    var infoName=document.createElement("li");
    var theName= document.createTextNode(orderInfo.name);
    infoName.appendChild(theName);
    divItem.appendChild(infoName);

    var infoMail=document.createElement("li");
    var theMail= document.createTextNode(orderInfo.email);
    infoMail.appendChild(theMail);
    divItem.appendChild(infoMail);

    var infoPayment=document.createElement("li");
    var thePayment= document.createTextNode(orderInfo.payment);
    infoPayment.appendChild(thePayment);
    divItem.appendChild(infoPayment);

    var infoGender=document.createElement("li");
    var theGender=document.createTextNode(orderInfo.gender);
    infoGender.appendChild(theGender);
    divItem.appendChild(infoGender);
    
    var infoKoor=document.createElement("li");
    var theKoor=document.createTextNode(coordinates.x+" x / "+coordinates.y+" y");
    infoKoor.appendChild(theKoor);
    divItem.appendChild(infoKoor);


    var infoBurger=document.createElement("li");
    var theBurger=document.createTextNode(burgers.join(", "));
    infoBurger.appendChild(theBurger);
    divItem.appendChild(infoBurger);

    var theElement =document.getElementById("info");
    theElement.innerHTML=divItem.innerHTML;

}

