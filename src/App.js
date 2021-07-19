import './scss/styles.scss';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Search from './components/Search';

import Orders from './pages/Orders';

import OrderContextProvider from './context/OrderContext';

function App() {
  return (
    <OrderContextProvider>
      <div className="wrapper">
          <div className="wrapper__white">            
              <Header />
              <hr />     
              <Navbar />
              <hr />
          </div>
          <div className="wrapper__grey">
              <Search />
              <Orders />
          </div>
      </div>
    </OrderContextProvider>
  );
}

export default App;
