import { useState } from "react"
export default function LotteryGame(){
    const [ticketnumber,setTicketnumber]=useState("000");
    const [message,setMessage]=useState("");

    //generate the random ticket 
const generatelottery=()=>{
  let num1=Math.floor(Math.random()*10);
  let num2=Math.floor(Math.random()*10);
  let num3=Math.floor(Math.random()*10);
  let randomnumber=`${num1}${num2}${num3}`;
  setTicketnumber(randomnumber);

  let digits=randomnumber.split('').map(Number);
  let sum=digits.reduce((acc,curr)=>acc+curr,0);
  if(sum===15){
    setMessage("Congratulations u won the lottery!");
  }else{
    setMessage("Try again!")
  }
    };
    //the main function that returns
    return(
<div>
<h3>{message}</h3>
<p>Lottery Ticket = {ticketnumber}</p>
<button onClick={generatelottery}>Get new ticket</button>
</div>
    )
 }