import NavBar from "./NavBar";
import Title from "./Title";
import Search from "./Search";
import CakeForm from "./CakeForm";
import CakeContainer from "./containers/CakeContainer";
//import CakeList from "./components/CakeList";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search />
        <CakeForm />
        <CakeContainer />
      </main>
    </>
  );
}

export default App;
