import React, { Component } from "react"
import { View, FlatList, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import { Header, AvatarItem } from "../../../components"
import styles from "./styles"
import { logoutUserService } from "../../../redux/services/user"
import { fetchImageData, fetchMoreImageData } from "./story"
import { Props, State, itemProp } from "./types"

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      page: 1,
      limit: 20,
    }
  }

  componentDidMount() {
    const { fetchImageData } = this.props
    const { page, limit } = this.state
    fetchImageData(page, limit)
  }

  handleLogout = async () => {
    const { navigation } = this.props
    try {
      await logoutUserService()
      navigation.navigate("AuthStack")
    } catch (err) {}
  }

  render() {
    const { navigation, imageData, fetchMoreImageData, loading } = this.props
    const { page, limit } = this.state
    return (
      <View style={styles.container}>
        <Header
          title="Home"
          leftButtonPress={() => navigation.openDrawer()}
          rightButtonPress={() => this.handleLogout()}
        />

        <FlatList
          data={imageData}
          keyExtractor={(item: { id: string }) => item.id}
          renderItem={({ item }: itemProp) => {
            return <AvatarItem avatar={item.download_url} title={item.author} />
          }}
          onEndReached={() => {
            this.setState({ page: page + 1 })
            fetchMoreImageData(page + 1, limit)
          }}
          ListFooterComponent={
            loading ? (
              <View style={styles.loadingFooter}>
                <ActivityIndicator />
              </View>
            ) : null
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  imageData: state.data,
  loading: state.loading,
})

function bindToAction(dispatch: any) {
  return {
    fetchImageData: (page?: number, limit?: number) =>
      dispatch(fetchImageData(page, limit)),
    fetchMoreImageData: (page?: number, limit?: number) =>
      dispatch(fetchMoreImageData(page, limit)),
  }
}

export default connect(
  mapStateToProps,
  bindToAction,
)(Home)
