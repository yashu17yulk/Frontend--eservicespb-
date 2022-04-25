import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
// import Eservices from "./Eservices/eservices";
import Main3 from "./Main3/Main3";
import Table from "./Table/Table";
import Eservices from "./Eservices/Eservices";
// import {Routes,BrowserRouter,Route} from "react-router-dom";
// import Main2 from "./Main2/Main2";
// import Maintop from "./Maintop/Maintop";
function App() {
  return (
    <div>
      <Header></Header>
      <div className="head1">
        <div className="hd1">
          <div class="container"></div>
        </div>
      </div>
      <Main3></Main3>
      {/* <Table></Table>  */}
      <Main></Main>
      <Eservices></Eservices>
      <Footer></Footer>
      
      {/* <Routes> 
      
      <Route path="/Eservices" component={Eservices} />
      </Routes> */}
      
    </div>
  );
}

export default App;
