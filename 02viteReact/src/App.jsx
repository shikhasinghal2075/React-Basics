import Chai from './chai.jsx'


// function App() {
//    return (
//       <h1>React Basics | VITE</h1>
//   )
// }

function App(){
   const username = "chai aur code"
   return (
      <>
         <Chai />
         {/* Add only evaluated expression here and not JS code */}
         <h1>chai aur react {username}</h1>  
         <p>Test Paragraph</p>
      </>
   )
}

export default App
