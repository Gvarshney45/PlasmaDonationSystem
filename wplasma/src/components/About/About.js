import React,{useEffect,useState} from 'react'
import GVpic from './/GV.jpg';
import './About.css';
import {useHistory} from 'react-router-dom';
const About = () => {
    const history = useHistory();
    const [userData,setUserData]=useState();
    const callAboutPage = async () => {
      try {
        const res= await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
          },
          credentials:"include"
        });
          const data=await res.json();
          console.log(data);
          setUserData(data);
          if(!res.status===200){
            const error =new Error(res.error);
            throw error;
          }

      } catch (error) {
        console.log(error);
        history.push('/login');
      }
    }

  useEffect(() =>{
      callAboutPage();
  } ,[]);

  return (
    <>
    <div className="container emp-profile">
    <form method="GET">
      <div className="row">
        <div className="col-md-4">
          <img src={GVpic} alt="img" className="img-pic" />
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Gaurav</h5>
            <h6>Web Developer</h6>
            <p className="profile-rating mt-3 mb-5">RANKING: <span>1/10</span></p>

            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a classname="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                </li>
                <li className="nav-item">
                <a classname="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                </li>
            </ul>

          </div>
        </div>
          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" name='btnAddMore' value="Edit Profile"/>
          </div>

      </div>

    </form>

    </div>


    </>
  )
}

export default About;