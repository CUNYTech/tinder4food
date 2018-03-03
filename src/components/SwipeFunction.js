import React, { Component } from 'react';
import { View } from 'react-native';
import SwipeCard from './SwipeCard';

class SwipeFunction extends Component {

  state = {
    profileIndex: 0,
  }

  upcomingCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1});
  }

  render() {
    const {profileIndex} = this.state;

    return (
      <View style={{flex:1}}>
        {profiles.slice(profileIndex,profileIndex + 1).reverse().map((profile) => {
          return(
            <SwipeCard
              key={profile.id}
              profile={profile}
              onSwipeOff={this.upcomingCard}
            />
          )
        })}
      </View>
    );
  }
}

const profiles = [
  {
    id: '000000000001',
    name: 'Burger',
    bio: 'Beefy',
    imageURL: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  },
  {
    id: '000000000002',
    name: 'Salmon',
    bio: 'Rich People',
    imageURL: 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
  },
  {
    id: '000000000003',
    name: 'Spaghetti',
    bio: 'So much carbs',
    imageURL: 'https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg',
  },
  {
    id: '000000000004',
    name: 'Pizza',
    bio: 'Tomato on a plate',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
  },
  {
    id: '000000000005',
    name: 'Healthy (Change over here)',
    bio: 'Nasty',
    imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2017/02/healthy-salmon-collection-main-image.jpg?itok=X-vgckbl',
  },
  {
    id: '000000000006',
    name: 'Ramen',
    bio: 'Amazing',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/151010_Sapporo_ramen_at_Susukino_Sapporo_Hokkaido_Japan01s.jpg/270px-151010_Sapporo_ramen_at_Susukino_Sapporo_Hokkaido_Japan01s.jpg',
  },
  {
    id: '000000000007',
    name: 'Fancier Salmon',
    bio: 'More rich people stuff',
    imageURL: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
  },
]
export default SwipeFunction;
