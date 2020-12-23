import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App Container-fluid">
      <div className="row d-flex justify-content-center">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
