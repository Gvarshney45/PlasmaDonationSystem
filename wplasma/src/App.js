import "./App.css";
import React, { createContext, useReducer } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/blog";
import Vaccine from "./components/Vaccine/vaccine";
import DonorList from "./components/List/Donor/DonorList";
import ReceiverList from "./components/List/Receiver/ReceiverList";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ErrorPage from "./components/About/ErrorPage";
import Logout from "./components/Logout/Logout";
import Dashboard from "./components/Dashboard/Dashboard";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Form2 from "./components/Forms/Form2";
// import DonorForm from './components/DonorForm/DonorForm';
import DonorForm from "./components/Forms/donorForm";
import ReceiverForm from "./components/Forms/requesterform";
import UpdateDonor from "./components/Forms/donorUpdateForm";
import UpdateReceiver from "./components/Forms/requesterUpdateForm";
import DeleteDonor from "./components/Forms/deleteDonor";
import Abc from "./components/abc";
// import Footer from "./components/Footer/footer";
export const UserContext = createContext();

const App = () => {
  // 1: ContextAPI for
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/vaccine">
            <Vaccine />
          </Route>

          <Route exact path="/donorlist">
            <DonorList />
          </Route>

          <Route exact path="/receiverlist">
            <ReceiverList />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          {/* <ProtectedRoute path="/dashboard" exact component={Dashboard} /> */}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/form2">
            <Form2 />
          </Route>
          <Route exact path="/abc">
            <Abc />
          </Route>
          <Route exact path="/donorForm">
            <DonorForm />
          </Route>
          <Route exact path="/updatedonor/:id">
            <UpdateDonor />
          </Route>
          <Route exact path="/updatereceiver/:id">
            <UpdateReceiver />
          </Route>
          <Route exact path="/deletedonor">
            <DeleteDonor />
          </Route>
          <Route exact path="/receiverForm">
            <ReceiverForm />
          </Route>
          {/* <Route exact path="/donorform">
    <DonorForm />
    </Route> */}

          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </UserContext.Provider>
    </>
  );
};

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}
