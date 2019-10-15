import { fetchMoreImageData, fetchImageData } from "./story"
import { NavigationProps } from "../../../@types/component"

export interface Props extends NavigationProps {
  fetchImageData: typeof fetchImageData
  fetchMoreImageData: typeof fetchMoreImageData
  imageData: any
  loading: boolean
}

export interface itemProp {
  item: any
}

export interface State {
  page: number
  limit: number
}
