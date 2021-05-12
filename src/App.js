import ReportView from './frontend/Report/ReportView';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GetDataContextProvider from './frontend/Context/GetDataContext';
import Home from './frontend/Home/Home';
import Dashboard from './frontend/Dashboard/Dashboard';
import StockBalanceRpt from './frontend/Report/Stock Balance Report/StockBalanceRpt';
import PurchasingRpt from './frontend/Report/Purchasing Report/PurchasingRpt';


function App() {


  return (
    <div className="App">
      
      <Router>
        <Switch>

          
        <GetDataContextProvider>
         
          <Route path="/" exact={true} component={ Home }/>
              
          <Route path="/dashboard" component={ Dashboard } />

          <Route path="/salesSummery">
              <ReportView />
          </Route>

          <Route path="/stockBalance">
              <StockBalanceRpt />
          </Route>

          <Route path="/purches">
              <PurchasingRpt />
          </Route>

          
        </GetDataContextProvider>
         
        


        </Switch>
      </Router>

    </div>
  );
}

export default App;
