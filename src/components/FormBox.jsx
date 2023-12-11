
import Card from "./Card";
import { useRef } from "react";

const FormBox = (props) => {
 

  const nameInputRef = useRef();
  const liveInputRef = useRef();
  const emailInputRef = useRef();

  let addUser = (e) => {
    e.preventDefault();

    if(nameInputRef.current.value.trim().length===0||emailInputRef.current.value.trim().length===0||liveInputRef.current.value.trim().length===0){
      alert('please fill your valid infomation')
      return;
    }
    const userInfo = {
      name : nameInputRef.current.value,
      live : liveInputRef.current.value,
      email : emailInputRef.current.value
    }

    props.getUserInfo(userInfo)

    nameInputRef.current.value = "";
    liveInputRef.current.value = "";
    emailInputRef.current.value = "";

  
    // console.log(nameInputRef);
    // console.log(nameInputRef.current.value);
    // console.log(liveInputRef.current.value);
    // console.log(emailInputRef.current.value);



  };

  return (
    <Card>
      <form className="form-div" onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
           
            ref={nameInputRef}
          ></input>
          
        </div>

        <div className="form-div">
          <label htmlFor="name">live</label>
          <input
            type="text"
            id="name"
          
            ref={liveInputRef}
          ></input>
           
        </div>

        <div className="form-div">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id="name"
           
            ref={emailInputRef}
          ></input>
          
        </div>

        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
