import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Header } from "../../../components"
import styles from "./styles"
import { Props } from "./types"

class Blank extends Component<Props, {}> {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Header title="Blank" leftButtonPress={() => navigation.openDrawer()} />
        <ScrollView contentContainerStyle={styles.contentStyle}>
          <Text style={styles.textStyle}>Blank Page</Text>
        </ScrollView>
      </View>
    )
  }
}

export default Blank
