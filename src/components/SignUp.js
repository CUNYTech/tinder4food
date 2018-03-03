import React,  {Component}  from 'react';
import { Input } from './common'

class SignUp extends Component {
  state = {email: '', name: '', phone: ''};

  render(){
    return (
      <Input
        label='Input box'
        placeholder='name'
        value='value'
      />
    );
  }
};

export default SignUp;
