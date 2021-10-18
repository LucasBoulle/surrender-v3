import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

const newApiBaseUrl = 'https://americas.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-0a7ad0e2-f558-4f1a-9042-a2812505016d'
// puuid da minha conta: boulle => 
// qfNFbhyhq_YiCVDjgQYcp9Ne9E74nZr23IbYvIkqDUYK5iwk3uvBEk97pWxdkbln5I2ewZihp-iWSA
// matchId de exemplo: BR1_2330861494

export const getRequest = async (path: string, queryParams?: string[][], riotApiVersion: number = 4) => {
  const baseUrl = riotApiVersion === 5 ? newApiBaseUrl : apiBaseUrl
  let params = ''
  if (queryParams && queryParams.length) {
    queryParams.map((paramArr: string[]) => {
      params += `&${paramArr[0]}=${paramArr[1]}`
    })
  }

  try {
    const response = await fetch(baseUrl + path + `?api_key=${apiKey}${params}`, {
      method: 'GET',
    })

    console.log(response)
    if (!response.ok) {
      throw new Error('Erro na conexão com a api')
    }

    return await response.json()
  } catch (e) {
    console.log(e)
    return null
  }
}
