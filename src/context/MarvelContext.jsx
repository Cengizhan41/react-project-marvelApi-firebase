import { createContext, useEffect, useRef, useState } from "react";
import {initializeApp} from 'firebase/app'
import { get, getDatabase, onValue, ref, set } from 'firebase/database';
import { v4 as generateId } from 'uuid'
import { useNavigate } from "react-router-dom";
import md5 from "md5";


const MarvelContext=createContext()

function MarvelContextProvider({children}){

  // fetch
const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const ts = Date.now();
const timestamp=ts.toString()
const hash=md5(ts + privateKey + publicKey)

 const nav=useNavigate();
    //firebase
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        databaseURL: import.meta.env.VITE_DATABASE_URL,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID
      };
      const app=initializeApp(firebaseConfig)
      const db=getDatabase(app) 

      const[datas,setDatas]=useState(null)
    useEffect(() => {
        const query = ref(db, "users");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          if(data!=null){
            setDatas(Object.values(data))
          }       
    });
      }, []);
    //login-signup
    const [activeUser,setActiveUser]=useState(null);
    const[err,setErr]=useState(null)
    const [haveAccount,setHaveAccount]=useState(true)


    function loginSubmit(e){
        e.preventDefault();
        // console.log(datas)
             if(haveAccount==true){
                 const searchedUser=datas?.find(item=>item.userMail==e.target.elements[0].value && item.userPassword==e.target.elements[1].value)
                 if(searchedUser){
                   setActiveUser({...searchedUser,"userActive":true});
                   localStorage.setItem("activeControl", JSON.stringify({"user":searchedUser.userID,"loginDate":Date.now()}));
                   // console.log(searchedUser)
                   setErr(null)
                   datas.forEach(item=>{
                     if(item.userMail==e.target.elements[0].value && item.userPassword==e.target.elements[1].value){
                       set(ref(db, 'users/' + item.userID), {
                         ...item,
                         "userActive":true
                       });
                     }
                     else{
                       set(ref(db, 'users/' + item.userID), {
                         ...item,
                         "userActive":false
                       });
                     }
                   })
                   nav("/marvel/home")
                   e.target.elements[0].value=""
                   e.target.elements[1].value=""
                 }
                 else{
                   if(!datas){
                     setErr("Create an account..")
                   }
                   else{
                     setErr("Your email or password is not valid!")
                   }  
                 }
     
             }
             else{
               setHaveAccount(true)
               const user={
                   "userMail":e.target.elements[0].value,
                   "userPassword":e.target.elements[1].value,
                   "userID":generateId(),
                   "userActive":false,
                   "usersFavs":[],
               }
                 const searchedMail=datas?.find(item=>item.userMail==user.userMail);
                 if(!searchedMail){
                   if((user.userMail.length > 10 && user.userMail.length<30 ) && 
                   (user.userPassword.length>6 && user.userPassword.length<14)){
                     console.log("ekliyorum")
                     set(ref(db, 'users/' + user.userID), {
                       ...user
                       }); 
                       setErr(null)
                       e.target.elements[0].value=""
                       e.target.elements[1].value=""
                   }
                   else{
                     setErr("Your email or password is not valid!")
     
                   }
                  
                 }
                 else{
                   console.log("bu hesap mevcut")
                   setErr("This account is already exists!")
                 }
             }
            
         }
    
    function doNotHaveAccount(e){
    e.preventDefault();
    console.log("doNotHaveAccount calisti.")
    setHaveAccount(false)
    setErr(null)
    }

    //logout
    function logOut(){
      // e.preventDefault();
      nav("/")
      // console.log(datas)
        setActiveUser(null);
        localStorage.removeItem("activeControl")
        datas?.forEach(item=>{
              set(ref(db, 'users/' + item.userID), {
                ...item,
                "userActive":false
              });
          })       
    }

    //autologout
    const[currentTime,setCurrentTime]=useState(Date.now())

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(Date.now());
      }, 100000); // every 100 seconds
    
      return () => clearInterval(timer); 
    }, []);

    useEffect(()=>{
        autoLogOut()
    },[currentTime])

    function autoLogOut(){
      const storageInfos=JSON.parse(localStorage.getItem("activeControl"))
      const loginDate=storageInfos?.loginDate;
      const sessionTimeout = 3600000; // 1 hour 
      if(currentTime - loginDate > sessionTimeout){
        console.log("autologout")
        logOut();
      }
     
    }

    //characters,series,comics  card toggle function
    const [display,setDisplay]=useState({});

    function cardToggle(index){
      setDisplay(prevState => {
      return { 
        ...Object.fromEntries(Object.entries(prevState).map(([key,value]) => [ key, false ])),
        [index]: !prevState[index],
      }
      });
    }

    //change password
    function changePassword(pswrd,activeId){
      // console.log(pswrd);
      // console.log(activeId)
      get(ref(db, `users/` + activeId)).then((snapshot) => {
        if (snapshot.exists()) { 
        const willChange=snapshot.val();
        willChange.userPassword=pswrd
        set(ref(db, `users/` + activeId),{
          ...willChange
      })
        } 
      })  
    }
  
    //scroll functions
    const scrollContainer1Ref = useRef(null);
    const scrollContainer2Ref = useRef(null);


    function scrollLeft(ref) {
      let scrollAmount = window.innerWidth <= 768 ? -150 : -1200;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  
    function scrollRight(ref) {
      let scrollAmount = window.innerWidth <= 768 ? 150 : 1200;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    //like actions
    function likeFunc(id,name,kind,activeUserID){
      // console.log(id,name,kind,activeUserID)
    get(ref(db,`users/` + activeUserID)).then((snapshot)=>{
      if(snapshot.exists){
        const user=snapshot.val();
        // console.log(user)
       if(!user.favorites){
        user.favorites=[{
              id:id,
              name:name,
              kind:kind
            }];
       }
       else{
        const isItemExist = user.favorites.find((favorite) => favorite.id === id);
        // console.log(isItemExist)
         if(!isItemExist){
          user.favorites.push({
            id:id,
            name:name,
            kind:kind
          })
         }else{
            user.favorites=user.favorites.filter(item=>item.id != isItemExist.id)
         }
       }
        set(ref(db,`users/${activeUserID}`),{
         ...user
        })
      }
    })  

    }
    return(
        <MarvelContext.Provider value={{
          //fetch
          timestamp,
          hash,
          //firebase-login&logout
          db,
          setDatas,
          datas,
          activeUser,
          loginSubmit,
          err,
          haveAccount,
          doNotHaveAccount,
          logOut,
          //card-toggle
          cardToggle,
          display,
          setDisplay,
          //changePassword
          changePassword,
          //scroll
          scrollLeft,
          scrollRight,
          scrollContainer1Ref,
          scrollContainer2Ref,
          //like
          likeFunc
        }}>
             {children}
        </MarvelContext.Provider>
    )
}

export  {MarvelContext,MarvelContextProvider}



