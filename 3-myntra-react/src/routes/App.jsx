import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadData from "../components/LoadData";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetching = useSelector((store) => store.fetchData);
  return (
    <>
      <LoadData />
      <Header />
      <div className="min-height">
      {fetching.fetching ? <LoadingSpinner  /> : <Outlet />} 
      </div>
      <Footer />
    </>
  );
}

export default App;
