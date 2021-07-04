import { useState,useEffect } from 'react';
import './App.css';
import Square from './componenet/Square';
import {Pattern} from './componenet/Pattern'


function App() {
  const [board,Setboard]=useState(["","","","","","","","","",""])
  const[player,setplayer]=useState("O");
  const[result,setresult]=useState({winner:"none" , state:"none "});

useEffect(() => {
  checkWin();
checktie();

  if(player==="X"){
    setplayer("O");
  }else{
    setplayer("X");
  }
  
}, [board]);

useEffect(() => {
   if(result.state !== "none "){
     alert(`game finished winning player ${result.winner}`);
     restart();
   }
}, [result]);

  const handleSquare=(square)=>{
Setboard(board.map((val,index)=>{
if(index===square && val===""){
return player ;
}
return val
}
))
}
 
        const checkWin = ()=>{
       Pattern.forEach((currPatern)=>{
   const firstPlayer=board[currPatern[0]];
   if(firstPlayer==="")return;
    let foundWinningPattern=true;
    currPatern.forEach((index)=>{
     if (board[index] !== firstPlayer) {
       foundWinningPattern = false;
    }
  });

  if (foundWinningPattern){
setresult({winner:player, state: "won"})

  }
} );
}

const checktie=()=>{
let filled =true;
board.forEach((square)=>{
  if(square===""){
filled =false;
}
});
if(filled){
  setresult({winner:"no one",state:"Tie"});
}
};

const restart=()=>{
  Setboard(["","","","","","","","","",""]);
  setplayer("O");
}

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <div className="board">
      <div className="row">
      <Square val={board[0]}
      handleSquare={()=>{handleSquare(0);}}
      />
    
      <Square val={board[1]}
      handleSquare={()=>{handleSquare(1);}}
      />
      <Square val={board[2]}handleSquare={()=>{handleSquare(2);}} />
      </div>


      <div className="row">
      <Square val={board[3]}handleSquare={()=>{handleSquare(3);}} />
      <Square val={board[4]}handleSquare={()=>{handleSquare(4);}} />
      <Square val={board[5]}handleSquare={()=>{handleSquare(5);}} />

      </div>

      <div className="row">
      <Square val={board[6]}handleSquare={()=>{handleSquare(6);}} />
      <Square val={board[7]}handleSquare={()=>{handleSquare(7);}} />
      <Square val={board[8]}handleSquare={()=>{handleSquare(8);}} />
</div>

    </div>
  
    </div>
  );
}

export default App;
