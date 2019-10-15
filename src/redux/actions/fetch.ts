export const IMAGE_DATA_FETCHED = "IMAGE_DATA_FETCHED"
export const DATA_LOADING = "DATA_LOADING"
export const FETCH_MORE = "FETCH_MORE"

export const imageDataFetched = (data: any[]) => ({
  type: IMAGE_DATA_FETCHED,
  payload: data,
})

export const fetchMore = (data: any[]) => ({
  type: FETCH_MORE,
  payload: data,
})

export const loading = (loader: boolean) => ({
  type: DATA_LOADING,
  payload: loader,
})
