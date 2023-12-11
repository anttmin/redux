import React from "react";
import Card from "./Card";
//send there
const List = (props) => {
  return (
    <>
    {props.userInfos.length > 0 ? (<>
    
      {props.userInfos.map((info) => {
        return (
          <Card css={"card-mt"} key={info.email}>
            <div>
              <h1>Name:{info.name}</h1>
              <p>Live:{info.live}</p>
              <p>Email:{info.email}</p>
            </div>
          </Card>
        );
      })}
    
    </>):(<>

     
          <Card css={"card-mt"}>
          <p>Add a new user right now!</p>
          </Card>
     
    </>)}
     
    </>
  );
};

export default List;
