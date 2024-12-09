import "./index.css";
import './fanta.css';
import Hero from "./components/Hero.jsx";
import CoffeeForm from "./components/CoffeeForm.jsx";
import Stats from "./components/Stats.jsx";
import Layout from "./components/Layout.jsx";
import History from "./components/History.jsx";

const App = () => {

  const isUserAuthenticated = true;

  const authenticatedContent = (
    <>
        <Stats/>
        <History/>
    </>
  )
  return (
    <Layout>
      <Hero/>
      <CoffeeForm/>
      {isUserAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default  App;