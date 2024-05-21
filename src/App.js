import './App.css';

import { Menu } from 'antd';
import { useState } from 'react';
import Foundation from './components/Foundation';
import Nonprofit from './components/NonProfits';
import Notifcations from './components/Notification';
const items = [
  {
    label: 'Foundation11',
    key: 'foundation',
  },
  {
    label: 'Non-Profit',
    key: 'nonprofit',
  },
  {
    label: 'Notification',
    key: 'notification',
  },

];


const NavigationAnchor = () => {

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

  ;
}


function App() {

  const [current, setCurrent] = useState('foundation');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <header >
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        {current === 'foundation' && <Foundation />}
        {current === 'nonprofit' && <Nonprofit />}
        {current === 'notification' && <Notifcations />}



      </header>
    </div>
  );

}

export default App;
