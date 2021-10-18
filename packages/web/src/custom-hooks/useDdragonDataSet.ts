import React from "react"

export const useDdragonDataSet = () => {
  const [success, setSuccess] = React.useState<any>()
  const [error, setError] = React.useState<any>()
  const [isLoading, setLoading] = React.useState(false)


  const doRequest = React.useCallback(() => {
    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    const url = new URL('http://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json')

    fetch(url.href)
      .then(async (response) => { setSuccess(await response.json()) })
      .catch(setError).finally(() => {
        setLoading(false)
      })
  }, [])


  // return `${ddragonBaseUrl}${options.imageType}/${champion}_0.jpg`
  return [success, error, isLoading, doRequest]
}