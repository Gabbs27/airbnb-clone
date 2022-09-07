import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

  });
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
