
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const CounterGlobalValue = useSelector((state) => state.counter.counter);

  return (
    <div>
      <h3> Home</h3>

      <h4>we are supported by {CounterGlobalValue}$ </h4>
    </div>
  );
};

export default Home;