import UserLayout from '@/layout/UserLayout'
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style.module.css";
import { loginUser, registerUser } from '@/config/redux/action/authAction';



function LoginComponent() {

  const authState = useSelector((state) => state.auth)
  const router = useRouter();
  const dispatch = useDispatch();

  const [userLoginMethod, setUserLoginMethod] =useState(false);
  const [email, setEmailAdderss] = useState("");
  const [password, setPassword] =useState("");
  const [username, setUsername] =useState("");

  const [name, setName] =useState("");

        useEffect(() =>{
          if(authState?.loggedIn){
            router.push("/dashboard")
          }

        })
        const handleRegister =() =>{
          console.log("registering...");
          dispatch(registerUser({ username, password , email,name }))

        }
        

  return (
    <UserLayout>

 <div className={styles.container}>
      <div className={styles.cardContainer}>

        <div className={styles.cardContainer_left}>
          <p className={styles.cardleft_heading}>{userLoginMethod ? "Sign In" :"Sign Up"}</p>

          <div className={styles.inputContainer}>
            <div className={styles.inputRow}>

            <input onChange={(e) => setUsername(e.target.value)} className={styles.inputField} type="text" placeholder="UserName" />


            <input onChange={(e) =>setName(e.target.value)} className={styles.inputField} type="text" placeholder="Name" />

            </div>

            <input onChange={(e) =>setEmailAdderss(e.target.value)} className={styles.inputField} type="text" placeholder="Email" />

            <input onChange={(e) =>setPassword(e.target.value)} className={styles.inputField} type="text" placeholder="Password" />

            <div 
            onClick={()=>{
              if(userLoginMethod){

              }else{
                handleRegister();

              }

            }} className={styles.buttonWithOutline}>
              <p>{userLoginMethod? "Sign In" :"Sign Up"}</p>
            </div>


          </div>

         


        </div>
        <div className={styles.cardContainer_right}>


        </div>


      </div>



      
  </div>

    </UserLayout>
  )
}

export default LoginComponent
