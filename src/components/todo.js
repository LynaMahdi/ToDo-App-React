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
    const[i,setI]=useState(0)
    const[todo,setTodo]=useState("")
    const[list,setList]=useState([])
    const[complist,setcompList]=useState([])
    const[incomplist,setincompList]=useState([])
    const[light,setLight]=useState(false)
    const[check,setCheck]=useState(false)
    const tache={
        id:  Math.floor((Math.random() * 100) + 1),
        c: check,
        value: todo

    };

    const total=[list,complist,incomplist]
    function Lida(){

        setLight(!light)
        if(light===false){
        document.querySelector("body").style.backgroundColor=" hsl(236, 33%, 92%)"
        document.getElementById("cnt").style.backgroundColor="white"
        document.getElementById("cnt1").style.backgroundColor="white"
        document.getElementById("cr").style.backgroundColor="white"
        document.getElementById("in").style.backgroundColor="white"
        document.getElementById("in").style.color="black"

        }else{

        document.querySelector("body").style.backgroundColor="hsl(235, 21%, 11%)"
        document.getElementById("cnt").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("cnt1").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("cr").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("in").style.backgroundColor="hsl(237, 14%, 26%)"
        document.getElementById("in").style.color="hsl(234, 39%, 85%)"

        }
    }
    function Check(){
        setCheck(!check)
        if(check===false){
            
            document.getElementById("cr").style.backgroundImage="linear-gradient( hsl(192, 100%, 67%) , hsl(280, 87%, 65%))"


        }else{
            if(light===false){
            document.getElementById("cr").style.backgroundImage="linear-gradient( hsl(237, 14%, 26%) , hsl(237, 14%, 26%))"
        }else{
            document.getElementById("cr").style.backgroundImage="linear-gradient( white , white)"}
        }
    }



    function Check_todo(id){
        let n_list=list.map((tache)=>(
        {...tache,c: id===tache.id? !tache.c:tache.c}));
        return setList(n_list);
      }


    function AddTodo(){
        
        if(todo===""){
            alert("Créez d'abord une tache!")
           return;
        }
        setList(l=>[...l,tache])
        setTodo("")
    }
   
    function completed_list(){
        const comp=list.filter(l=>l.c===true)
        setcompList(comp)
        setI(1)
        
    }
    function incompleted_list(){
        const comp=list.filter(l=>l.c!==true)
        setincompList(comp)
        setI(2)
    }
   
    
    function delete_complete(){
        const comp=list.filter(l=>l.c!==true)
        setList(comp)

    }
    function delete_todo(id){
        const nv_list=list.filter(l=>l.id!==id)
        setList(nv_list)
    }


    return(
    <>
       <div className='top'>
            {light? <img src= {lighti} alt="dark"/> :  <img src= {dark} alt="light"/>}
            <div>
                <h>T O D O</h>
                {light? <img className='sun' src={moon} alt="sun" onClick={Lida}/>:<img className='sun' src={sun} alt="moon" onClick={Lida}/>}
            </div>

            <div className='container' style={{top:`165px` , left:`495px`}} id='cnt' >
                <div  id="cr" className="circleBase circle1" onClick={Check}>{check? <img id="chichi" className='chichi' src={icoc} alt="icoc"/>:""}</div>
                <input id="in" type='text' placeholder='Create a new todo...' value={todo} onChange={e=>setTodo(e.target.value)} />
                <FaArrowRight className='add' onClick={()=>AddTodo()}/>
            </div>

            
            <ul>
                
                {total[i].map(tache=>{return( 
                 <div id='cnt2' className={light? 'container1':'container'}style={{top: `-260px`  , bottom: `0px`,left: `455px`}}>
                    
                    <div  id="cr" className="circleBase circle1" onClick={()=>Check_todo(tache.id)}>
                        
                      
                        {tache.c?   <><div className="circleBase circleB"/><img  className='chichi' src={icoc} alt="icoc"/></>:""}
                    </div>
                    <img  className='chich' src={cross} alt="cross" onClick={()=>delete_todo(tache.id)}/>
                    <p key={tache.id} className={light? "p2":"p1"}>{tache.value}</p>
                 </div>)})}

                <div id='cnt1' className='container' style={{top: `-260px`  , bottom: `0px`,left: `455px`}} ><h1  className={light? "h12":""}  style={{left: `20px`}}>{total[i].length} items left</h1><h1  className={light? "h12":""}  style={{left: `220px`}} onClick={()=>setI(0)}>All</h1><h1  className={light? "h12":""} style={{left: `252px`}} onClick={incompleted_list}>Active</h1><h1  className={light? "h12":""} style={{left: `300px`}} onClick={completed_list}>Completed</h1><h1  className={light? "h12":""} style={{left: `425px`}} onClick={delete_complete}>Clear Completed</h1></div>

            </ul>


            <div class="wrapper">
            <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
           
        </div>
    </>
    )
}


export default Todo