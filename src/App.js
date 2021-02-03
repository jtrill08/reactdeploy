import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Nav from './comps/Nav';
import './index.css';
import CreatePage from './comps/CreatePage';
import Submit from './comps/Submit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './comps/CreatePage.css'



function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const Home = () => (
    <div>
      <Title/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreatePage" component={CreatePage} />
          <Route path="/Submit" component={Submit} />
       </Switch>
      </div>
      </Router>
  );
}

export default App;

