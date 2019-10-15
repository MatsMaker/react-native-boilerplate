import { AsyncStorage } from "react-native"

export async function fetchImageService(page?: number, limit?: number) {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
  )
  return res.json()
}

export function loginUserService(username: string, password: string) {
  const userToken = `${username}${password}`
  return AsyncStorage.setItem("userToken", userToken)
}

export function getUserToken() {
  return AsyncStorage.getItem("userToken")
}

export function logoutUserService() {
  return AsyncStorage.removeItem("userToken")
}
