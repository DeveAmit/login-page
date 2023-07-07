import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import MultiStepFormPage from './pages/MultiStepFormPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/multi-step-form" component={MultiStepFormPage} />
      </Switch>
    </Router>
  );
};

export default App;
