// import LudoBoard from './LudoBoard'
import './App.css'
// import TodoList from "./TodoList"
// import LotteryGame from"./LotteryGame"
// import Lottery from"./Lottery"
// import {sum} from"./helper"
// import Form from"./Form"
// // import Ticket from"./Ticket"
// import CommentsForm from"./CommentsForm"
// import Comment from"./Comment"
// import Counter from"./Counter"
// import Joker from "./Joker"

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  // let winCondition=(ticket)=>{
  // return ticket[0]===0;
  // };
  let handleClick=()=>{
    console.log("button was clicked");
  }
  return (
    <>
    {/* <Lottery n={3} winCondition={winCondition}/> */}
    {/* <Ticket ticket={[5,4,6]}/> */}
    {/* <LudoBoard/> */}
    {/* <TodoList />  */}
    {/* <LotteryGame/> */}
    {/* <Lottery/>  */}
    {/* <Form/> */}
    {/* <Comment/>
    <CommentsForm/> */}
    {/* <Counter/>  */}
    {/* <Joker/> */}
   <Button onClick={handleClick} variant="contained">Contained</Button>
   <br></br><br></br>
   <Button onClick={handleClick} variant="contained"disabled>Click me</Button>
   <br></br><br></br>
   <Button onClick={handleClick} variant="contained"color="success">Success</Button>
   <Button variant="outlined" startIcon={<DeleteIcon />}>
    Delete
   </Button>
    </>
  )
}

export default App;
