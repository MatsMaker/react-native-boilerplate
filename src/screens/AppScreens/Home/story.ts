import { Dispatch } from "redux"
import {
  loading,
  fetchMore,
  imageDataFetched,
} from "../../../redux/actions/fetch"
import { fetchImageService } from "../../../redux/services/user"

export function fetchImageData(page?: number, limit?: number) {
  return async (dispatch: Dispatch) => {
    dispatch(loading(true))
    try {
      const res = await fetchImageService(page, limit)
      dispatch(imageDataFetched(res))
      dispatch(loading(false))
    } catch (err) {
      dispatch(loading(false))
    }
  }
}

export function fetchMoreImageData(page?: number, limit?: number) {
  return async (dispatch: Dispatch) => {
    dispatch(loading(true))
    try {
      const res = await fetchImageService(page, limit)
      dispatch(fetchMore(res))
      dispatch(loading(false))
    } catch (err) {
      dispatch(loading(false))
    }
  }
}
