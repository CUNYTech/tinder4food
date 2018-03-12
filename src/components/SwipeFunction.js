import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SwipeCard from './SwipeCard';

const config = {
  headers: {'Authorization': 'Bearer 8PFnRjBdeczBvlqjph1bzECWVbJDj_p4wpjf1fHFinCrNBfw5bjhsRF60TpwjjEQoyEesUm8vjG8taEzjXxI1XIRNYiPm8akqUgjxk6gUaVGMnKvsic8zIy-XfeYWnYx'},
  params: {
    term: 'food',
    location: '2 South PineHurst Ave'
  }
};

class SwipeFunction extends Component {

  state = { businesses: [], profileIndex: 0 };

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => this.setState({ businesses: response.data.businesses }));
    }

  upcomingCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1});
  }



  render() {
    const {profileIndex, businesses} = this.state;
    console.log(businesses);

    return (
     <View style={{flex:1}}>
       {businesses.slice(profileIndex, profileIndex + 1).map(place => {
         return(
           <SwipeCard
             key={place.id}
             place={place}
             onSwipeOff={this.upcomingCard}
           />
         )
       })}
     </View>
   );
 }
}

export default SwipeFunction;
