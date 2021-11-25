import { NotFound } from 'components/Common';
import LoginPage from 'features/auth/Login';
import CityPage from 'features/city/City';
import HomePage from 'features/home/Home';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/cities" component={CityPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;