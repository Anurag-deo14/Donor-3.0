import { Navbar, Welcome, Footer, Services, Transactions, Need, Map } from "./components"
const App = () => {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Need/>
        <Transactions />
        <Map/>
        <Footer />
    </div>
  )
}

export default App
