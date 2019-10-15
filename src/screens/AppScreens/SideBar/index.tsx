import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { colors } from "../../../constants"
import { ListItem } from "../../../components/ListItem"
import { Props } from "./types"

class SideBar extends Component<Props, {}> {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <ListItem title="Home" onPress={() => navigation.navigate("Home")} />
        <ListItem
          title="Blank Page"
          onPress={() => navigation.navigate("Blank")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg,
  },
})

export default SideBar
