import React, { Component } from "react"
import { ActivityIndicator, View } from "react-native"
import { getUserToken } from "../../redux/services/user"
import { Props } from "./types"

class AuthLoading extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.bootstrapAsync()
  }

  protected bootstrapAsync = async () => {
    const { navigation } = this.props
    const userToken = await getUserToken()
    navigation.navigate(userToken ? "AppStack" : "AuthStack")
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
}

export default AuthLoading
