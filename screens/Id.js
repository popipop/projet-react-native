import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Id extends Component {
  static navigationOptions = {
    title: 'Id'
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Id
        </Text>
      </View>
    )
  }
}

export default Id