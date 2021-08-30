import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Tooltip} from 'antd';
import {ExclamationCircleFilled} from '@ant-design/icons'

// import {ExclamationCircleFilled} from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tooltip title={<span style={{color:'black'}}>9月1日零点过期</span>} placement='topLeft'  color='white' arrowPointAtCenter getPopupContainer>
          
         <ExclamationCircleFilled style={{color:'#ff8903',backgroundColor:'white',borderRadius:'60%'}} />
          
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
