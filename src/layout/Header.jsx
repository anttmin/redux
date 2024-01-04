import Nav from "../components/Nav"
import Summary from "../components/Summary"

const Header = (props) => {
  return (
    <>
     <Nav showCartHandeler={props.showCartHandler}/>
     <Summary />
    </>
  )
}

export default Header