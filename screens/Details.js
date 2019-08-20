import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import { capitalize } from '../utils/helpers'

class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('name')
    return {
      title: capitalize(name)
    }
  }

  render () {
    const { navigation } = this.props
    const name = navigation.getParam('name')
    const sprites = navigation.getParam('sprites')

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {capitalize(name)}
        </Text>
        <Image
          source={{uri: sprites.front_default}}
          style={{width: 96, height: 96}}
        />
      </View>
    )
  }
}

export default Details