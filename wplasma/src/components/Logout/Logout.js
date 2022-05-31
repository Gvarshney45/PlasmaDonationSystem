import React,{useEffect,useContext} from 'react';
import{ useHistory} from 'react-router-dom';
import {UserContext} from "../../App";


const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
            // const logoutUser=async (e)=>{
            //     e.preventDefault();
            //     const res=await fetch('/logout',{
            //         method: 'GET', 
            //         headers: {
            //             Accept:"application/json",
            //             "Content-Type": "application/json"
            //         },
            //         credentials:"include"
            //     })
            //     if(res.status===400 || !res){
            //         const error= new Error(res.error);
            //                 throw error;
            //     }else{
            //         dispatch({type: "USER",payload:false})
            //         window.alert("Logout Successfully");
            //         history.push('./login');
            //     }
            // }

            // useEffect(() => {
            //     logoutUser();
            // })
        useEffect(() =>{
                fetch('/logout',{ 
                    method: 'GET', 
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json'
                        },
                        credentials:"include"
                }).then((res)=>{
                    dispatch({type:"USER",payload:false})
                        history.push('/login');
                        window.location.reload();
                        if(!res.status===200){
                            const error= new Error(res.error);
                            throw error;
                        }
                }).catch((err)=>{
                    console.log(err);
                });
        });

  return (
    <>
            <h1>Logout Page</h1>
    </>
  )
}

export default Logout