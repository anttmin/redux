
import Card from "../components/Card"


const fruits = [
  {
    id:1,
    name:"banana",
    description:"fruit from thailand",
    price:"12.45"
  },
  {
    id:2,
    name:"piapple",
    description:"fruit from thailand",
    price:"11.45"
  },
  {
    id:3,
    name:"orange",
    description:"fruit from thailand",
    price:"20.05"
  },
  {
    id:4,
    name:"star fruit",
    description:"fruit from thailand",
    price:"18.5"
  },
  {
    id:5,
    name:"papaya",
    description:"fruit from thailand",
    price:"57.45"
  }
]



const Body = (props) => {
  return (

   <>
   <section className="Body" onClick={props.hideCartHandler}>

{
fruits.map((fruit)=>
   <Card  key={fruit.id} fruit={fruit}/>
  

)
}


   </section>
   </>
   

  )
}

export default Body