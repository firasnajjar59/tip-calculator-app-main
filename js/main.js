let bill=document.getElementById("bill");
let inpNumOfPeople=document.getElementById("inpNumOfPeople");
let h2inp = document.querySelectorAll(".h2inp");
let percentage="0.1";


// function to reset all the values
const clearinp=()=>{
    bill.value="";
    inpNumOfPeople.value="";
    h2inp[0].innerHTML="0.00";
    h2inp[1].innerHTML="0.00";
    percentage="0.1";
    cust.value="";
    inpNumOfPeople.style.fontSize="2em";
    bill.setAttribute("placeholder","0");
    inpNumOfPeople.setAttribute("placeholder","0");
    cust.style.border="none";
}
// function to select tip percentage
const selectTip=(percent)=>{
    let id= document.getElementById(percent);
    
    percentage=parseInt(id.value)/100;
    if(!isNaN(percentage)){
        
        
        id.style.border="none";
        console.log("hi");
        calc(); }else{
            id.style.border="3px solid red";

        }
        console.log(percentage);
}

// function to calculate tip
// const calc=()=>{
// if(bill.value!=0){
//     if(inpNumOfPeople.value!=0 && !isNaN(parseInt(inpNumOfPeople.value)) ){
//     inpNumOfPeople.value=parseInt(inpNumOfPeople.value);
//     let tipAmount=(bill.value*percentage)/inpNumOfPeople.value;
//     let total=((bill.value*percentage)/inpNumOfPeople.value)+bill.value/inpNumOfPeople.value;
//     tipAmount=tipAmount.toFixed(2);
//     total=total.toFixed(2);
//     h2inp[0].innerHTML=tipAmount;
//     h2inp[1].innerHTML=total;
//     console.log(h2inp[0].innerHTML)
//     console.log(bill.value,inpNumOfPeople.value);
//     inpNumOfPeople.style.border="none";

//     console.log("in");
// }else{
//     inpNumOfPeople.style.fontSize="1.5em";
//     inpNumOfPeople.style.border="3px solid red";
//     inpNumOfPeople.setAttribute("placeholder","Enter number of people");
//     console.log("out");
// }}else{
  
//     bill.setAttribute("placeholder","Enter valid bill");
// }
// }


const calc=()=>{
    if(bill.value!=0 && !isNaN(parseInt(bill.value))){
        if(inpNumOfPeople.value!=0 && !isNaN(parseInt(inpNumOfPeople.value)) ){
        inpNumOfPeople.value=parseInt(inpNumOfPeople.value);
        let tipAmount=(bill.value*percentage)/inpNumOfPeople.value;
        let total=((bill.value*percentage)/inpNumOfPeople.value)+bill.value/inpNumOfPeople.value;
        tipAmount=tipAmount.toFixed(2);
        total=total.toFixed(2);
        h2inp[0].innerHTML=tipAmount;
        h2inp[1].innerHTML=total;
        console.log(h2inp[0].innerHTML)
        console.log(bill.value,inpNumOfPeople.value);
        inpNumOfPeople.style.border="none";
    
        console.log("in");
    }else{
        inpNumOfPeople.style.fontSize="1.5em";
        inpNumOfPeople.style.borderBottom="3px solid red";        inpNumOfPeople.setAttribute("placeholder","Enter number of people");
        console.log("out");
    }}
    else if(isNaN(parseInt(inpNumOfPeople.value))) 
    {inpNumOfPeople.style.fontSize="1.5em";
    inpNumOfPeople.style.borderBottom=="3px solid red";
    inpNumOfPeople.setAttribute("placeholder","Enter number of people");

    }else{
      
        bill.setAttribute("placeholder","Enter valid bill");
    }
    }

console.log(isNaN(parseInt("")));