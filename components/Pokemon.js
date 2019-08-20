import React, { Component } from 'react'
import { Text, View } from 'react-native'

import ListItem from './ListItem'

class Pokemon extends Component {
  state = {
    pokemon: null
  }

  componentDidMount = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
    const pokemon = await data.json()
    this.setState({ pokemon })
  }

  render () {
    if (!this.state.pokemon) {
      return (
        <View>
          <Text>Chargement...</Text>
        </View>
      )
    }
    return (
      <ListItem pokemon={this.state.pokemon} onPress={() => this.props.onPress(this.state.pokemon)} />
    )
  }
}

export default Pokemon