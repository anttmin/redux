import { useState } from "react"
import FormBox from "./FormBox"
import List from "./List"

const Main = () => {
  const [userInfos,setUSerInfos] = useState([]);

  const getUserInfo = (userInfoObj) =>{
    console.log(userInfoObj)
    setUSerInfos([...userInfos,userInfoObj]) //production here
  }
  return (
    <section className="main">
        <FormBox  getUserInfo={getUserInfo}/>
        <List userInfos={userInfos}/>

    </section>
  )
}

export default Main