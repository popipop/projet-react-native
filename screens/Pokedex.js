import React, { Component } from 'react'
import { FlatList } from 'react-native'

import Pokemon from '../components/Pokemon';

class Pokedex extends Component {
  static navigationOptions = {
    title: 'Pokedex',
  }

  state = {
    pokemons: [],
    next: ''
  }

  componentDidMount = () => {
    this.getPokemons("https://pokeapi.co/api/v2/pokemon/")
  }

  getPokemons = async req => {
    // copier le state
    const pokemons = [...this.state.pokemons]
    // Requète
    const data = await fetch(req)
    const json = await data.json()
    // MàJ du state
    await pokemons.push(...json.results)
    const next = json.next
    this.setState({ pokemons, next })
  }

  handlePress = pokemon => {
    this.props.navigation.navigate('Details', pokemon)
  }

  render () {
    return (
      <FlatList
        data={this.state.pokemons}
        renderItem={({ item }) => <Pokemon test='jojo' name={item.name} onPress={this.handlePress}/>}
        keyExtractor={item => item.name}
        onEndReached={() => this.getPokemons(this.state.next)}
      />
    )
  }
}

export default Pokedex