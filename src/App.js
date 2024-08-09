import "./App.css";
import OrderTable from "./components/OrderTable";
import NavigationBar from "./components/NavigationBar";
import OrderForm from "./components/OrderForm";
import OrderModal from "./components/OrderModal";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <OrderTable />
    </div>
  );
}

export default App;
