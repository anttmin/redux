import Main from "./layout/Main"
import ItemContextProvider from "./Store/ItemContent"

const App = () => {
  return (
 
   <>
    <ItemContextProvider>
    <Main />
    </ItemContextProvider>
   </>

   
  )
}

export default App