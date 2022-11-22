import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from "./component/info"
import Obj from "./component/obj"
import { Badge, Button, Stack } from 'react-bootstrap';

function App() {
  // const [data, setData] = React.useState(null);
  // console.log(process.env.REACT_APP_BASE_URL)
  // React.useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BASE_URL}api`)
  //   .then(res => {
  //     console.log(res)
  //     return res.json()
  //   })
  //   .then((json) => {
  //     console.log(json);
  //     setData(json.msg)
  //   })
  //   .catch(err => console.log(err));
  // })

  return (
    // <div className='row'>
    //   <h1 className="txt">
    //     Ajay Dayma
    //   </h1>
    //   <Stack direction='horizontal' gap={2}>
    //     <Button>A</Button>
    //     <Button as='a' variant='primary'>B</Button>
    //   </Stack>
    // </div>
    <div>
      <Info/>
      <div className='hr'></div>
      <Obj/>
      <div className='hr'></div>
    </div>
  );
}

export default App;
