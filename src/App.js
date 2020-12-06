import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './css/styles.css';
import './css/all.css';
import Dashboard from './pages/Dashboard';
import Products from './pages/products/Products';
import Customer from './pages/customers/Customer';
import Employees from './pages/employees/Employees';
import Credits from './pages/credits/Credits';
import Debits from './pages/debits/Debits';
import Deals from './pages/deals/Deals';
import Leads from './pages/leads/Leads';
import Assets from './pages/assets/Assets';
import ProductPreview from './pages/products/ProductPreview';
import Search from './pages/search/Search';
import EmployeePreview from './pages/employees/EmployeePreview';
import CustomerPreview from './pages/customers/CustomerPreview';
import DealPreview from './pages/deals/DealPreview';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/products' exact component={Products} />
          <Route path='/customers' exact component={Customer} />
          <Route path='/employees' exact component={Employees} />
          <Route path='/credits' exact component={Credits} />
          <Route path='/debits' exact component={Debits} />
          <Route path='/deals' exact component={Deals} />
          <Route path='/leads' exact component={Leads} />
          <Route path='/inventory' exact component={Assets} />
          <Route path='/products/:id' exact component={ProductPreview} />
          <Route path='/employees/:id' exact component={EmployeePreview} />
          <Route path='/customers/:id' exact component={CustomerPreview} />
          <Route path='/deals/:id' exact component={DealPreview} />
          <Route path='/search/:str' exact component={Search} />
          <Redirect path='/' to='/dashboard' />
        </Switch>
    </Router>
  );
}

export default App;
