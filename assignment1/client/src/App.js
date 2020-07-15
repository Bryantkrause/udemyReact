import React, {
  Component
} from 'react';
import UserInput from './Components/UserInput/'
import UserOutPut from './Components/UserOutPut/';

class App extends Component {
  state = {
    username: [
      {name: 'Awaiting Username'}
  ],
    otherState: 'some other value'
  }

  nameUpdater =(event) => {
    this.setState({
      username: [
        {name: event.target.value}
    ]
    })
  }

  render() {
    return ( 
      <div>
            
      <UserInput changed={this.nameUpdater}
      currentName={this.state.name}/>
      <button onClick={() => this.nameUpdater()}> Switch Name </button>
      <UserOutPut name={this.state.username[0].name}
      />
      <UserOutPut name="dude"
      />
      </div>

    )
  };
}

export default App;