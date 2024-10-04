import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import HRDashboard from "./components/Dashboard/HRDashboard";
import ProtectedRoute from "./components/Common/ProtectedRoute";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <Header />
      <main className="flex-grow">
        <AnimatePresence>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute
              path="/employee-dashboard"
              component={EmployeeDashboard}
            />
            <ProtectedRoute path="/hr-dashboard" component={HRDashboard} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
