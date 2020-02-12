//genaral custom way for api fetch
export default async (url, method) => {
  const response = await fetch(url, method)
  const data = await response.json()
  return data
}
