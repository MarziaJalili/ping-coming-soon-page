import Form from "./components/Form"
import Navbar from "./components/Navbar"
function App() {
  return (
    <main className="ping-container">
      <img className="ping-container__logo" src="./images/logo.svg" alt="logo" />

      <h1 className="ping-container__heading">We are launching <b>soon!</b></h1>

      <span className="ping-container__description">Subscribe and get notified</span>

      <Form />

      <img className="ping-container__dashboard" src="./images/illustration-dashboard.png" alt="" />

      <Navbar />

      <span className="ping-container__footer">&copy; Copyright Ping. All rights reserved.</span>

    </main>
  )
}

export default App;