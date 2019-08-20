import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import colors from '../utils/colors';

class Search extends Component {
  static navigationOptions = {
    title: 'Search'
  }

  state = {
    search: ''
  }

  handleSearch = async search => {
    this.setState({ search })

    if (search.length >= 3) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then(reponse => reponse.json())
      .then(pokemon => {
        if (pokemon) {
          this.props.navigation.navigate('Details', pokemon)
          this.setState({ search: '' })
        }
      }
      )
      .catch(error => console.log('Il y a une erreur : ' + error.message))
    }
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <TextInput
          style={{
            height: 56,
            width: '100%',
            borderWidth: 1,
            borderColor: colors.border,
            borderBottomWidth: 5,
            padding: 8
          }}
          value={this.state.search}
          onChangeText={search => this.handleSearch(search)}
          autoCorrect={false}
          placeholder='Search Pokemon by name'
        />
        <Text>
          {this.state.search && `No result for ${this.state.search}`}
        </Text>
      </View>
    )
  }
}

export default Search