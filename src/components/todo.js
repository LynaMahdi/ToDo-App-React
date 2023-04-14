import React from 'react'
import { useState } from 'react'
import dark from "./../bg-desktop-dark.jpg"
import lighti from "./../bg-desktop-light.jpg"
import moon from  "./../icon-moon.svg"
import sun from  "./../icon-sun.svg"
import icoc from  "./../icon-check.svg"
import cross  from  "./../icon-cross.svg"
import { FaArrowRight} from "react-icons/fa";
import './todo.css'


const Todo=()=>{
    const[todo,setTodo]=useState("")
    const[list,setList]=useState([])
    const[light,setLight]=useState(false)
    const[check,setCheck]=useState(true)
    console.log(light)
    
    function Lida(){

        setLight(!light)
        if(light===true){
        document.querySelector("body").style.backgroundColor="white"
        document.getElementById("cnt").style.backgroundColor="white"
        document.getElementById("cnt1").style.backgroundColor="white"
        document.getElementById("cr").style.backgroundColor="white"
        document.getElementById("in").style.backgroundColor="white"

        }else{

        document.querySelector("body").style.backgroundColor="hsl(235, 21%, 11%)"
        document.getElementById("cnt").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("cnt1").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("cr").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("in").style.backgroundColor="hsl(237, 14%, 26%)"

        }
    }
    function Check(){
        setCheck(!check)
        if(check===true){
            document.getElementById("cr").style.backgroundImage="linear-gradient( hsl(192, 100%, 67%) , hsl(280, 87%, 65%))"
            

        }else{
            document.getElementById("cr").style.backgroundImage="linear-gradient( hsl(237, 14%, 26%) , hsl(237, 14%, 26%))"
            
        }
    }
    function AddTodo(){
        const tache={
            id:  Math.floor((Math.random() * 100) + 1),
            c: check,
            value: todo

        };
        if(todo===""){
            alert("Créez d'abord une tache!")
           return;
        }
        setList(l=>[...l,tache])
        setTodo("")
        console.log(list)
    }
    return(
    <>
       <div className='top'>
            {light? <img src= {lighti} alt="dark"/> :  <img src= {dark} alt="light"/>}
            <div>
                <h>T O D O</h>
                {light? <img className='sun' src={sun} alt="sun" onClick={Lida}/>:<img className='sun' src={moon} alt="moon" onClick={Lida}/>}
            </div>

            <div className='container' style={{top:`165px` , left:`495px`}} id='cnt' >
                <div  id="cr" className="circleBase circle1" onClick={Check}>{check? "" :<img id="chichi" className='chichi' src={icoc} alt="icoc"/>}</div>
                <input id="in" type='text' placeholder='Create a new todo...' value={todo} onChange={e=>setTodo(e.target.value)} />
                <FaArrowRight className='add' onClick={()=>AddTodo()}/>
            </div>

            
            <ul>
                
                {list.map(tache=>{return( <div id='cnt1' className='container' style={{top: `-260px`  , bottom: `0px`,left: `455px`}}><div  id="cr" className="circleBase circle1" onClick={Check}><img id="chichi" className='chich' src={cross} alt="cross"/>{tache.c? "" :<img id="chichi" className='chichi' src={icoc} alt="icoc"/>}</div><p key={tache.id}>{tache.value}</p></div>)})}
                <div id='cnt1' className='container' style={{top: `-260px`  , bottom: `0px`,left: `455px`}} ><h1  style={{left: `20px`}}>{list.length} items left</h1><h1 style={{left: `220px`}}>All</h1><h1 style={{left: `252px`}}>Active</h1><h1 style={{left: `300px`}}>Completed</h1><h1 style={{left: `425px`}}>Clear Completed</h1></div>
            </ul>
           
        </div>
    </>
    )
}


export default Todo