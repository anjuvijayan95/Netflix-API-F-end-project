import React,{useState,useEffect} from 'react'
import './Nav.css'
export default function Nav() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>550){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

    console.log(show);
  return (
    <div className={`logo ${show && 'nav_black'}`}>
      <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    </div>
  )
}
