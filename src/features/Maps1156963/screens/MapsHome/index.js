import React, {Component} from 'react';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {PERMISSIONS, request} from 'react-native-permissions';

import {styles} from './styles';

request(
  Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }),
);

export default class MapsScreen extends Component {
  constructor(props) {
    super(props);
  }

  region = {
    //customize where you want the maps to start
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  render() {
    return [
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={this.region}
      />,
    ];
  }
}
