import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <strong>Esta es la app del bootcamp</strong>;
};

function App() {
  return (
    <div className="App">
      <h1>Título super creativo</h1>
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="purple" message="está ez" />
      <Mensaje color="blue" message="gg" />
      <Mensaje color="orange" message="wp" />
      <Description></Description>
    </div>
  );
}

export default App;
