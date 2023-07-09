import Header from "./Header";
import Card from "./Card";
import data from "./helper/data";

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>Hei React</h1>
     <Header/>

{
data.map((item, index) =>{
const {name, age, img } = item

  return(
    <div key={index}>
      <Card name={name} age={age} img={img} />
      </div>
  )

})
}

    </div>
  );
}


export default App;
