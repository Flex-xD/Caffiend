import "./index.css";
import './fanta.css';
import Hero from "./components/Hero.jsx";
import CoffeeForm from "./components/CoffeeForm.jsx";
import Stats from "./components/Stats.jsx";
import Layout from "./components/Layout.jsx";

const App = () => {

  const isUserAuthenticated = false;

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