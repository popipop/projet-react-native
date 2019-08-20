import React from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../utils/colors'
import { capitalize } from '../utils/helpers'

const ListItem = ({ pokemon, onPress }) => {
  const name = capitalize(pokemon.name)
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.underlay}
    >
      <View style={styles.row}>
        <Image
          style={styles.sprite}
          source={{uri: pokemon.sprites.front_default}}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.stats}>Weight: {pokemon.weight} | Height: {pokemon.height}</Text>
        </View>
        <View style={styles.arowContainer} >
          <Icon
            name={iconName}
            size={24}
            style={styles.arrow}
            color={colors.lightText}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sprite: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  stats: {
    fontSize: 14,
    color: colors.lightText,
  },
  arowContainer: {
    flex: 1,
  },
  arrow: {
    alignSelf: 'flex-end',
  }
})

export default ListItem