import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a Robinet"/>
    </div>
  );
}

export default App;
