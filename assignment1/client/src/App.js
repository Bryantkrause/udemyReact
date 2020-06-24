import React, {
  Component
} from 'react';
import UserInput from './Components/UserInput/'
import UserOutPut from './Components/UserOutPut/';

class App extends Component {
  state = {
    username: {
      name: 'Awaiting Username',
      name: 'User2'
    },
    otherState: 'some other value'
  }

  render() {
    return ( 
      <div>
      <UserInput/>
      <UserOutPut/>
      </div>

    )
  };
}

export default App;