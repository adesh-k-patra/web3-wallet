import axios, { AxiosResponse } from "axios"

const getFetch = async (
  toast: Function,
  {
    url,
    headers,
    allowStatus,
  }: {
    url: string
    headers: object
    allowStatus: number[]
  }
): Promise<AxiosResponse | null> => {
  try {
    const response = await axios.get(url, {
      headers,
      validateStatus: (status) => {
        return allowStatus.includes(status)
      },
    })
    return response
  } catch (error) {
    console.error("Error fetching data:", error)
    toast({
      title: "Error",
      description: `Encountered unexpected error: ${
        error instanceof Error ? error.message : error
      }`,
      variant: "destructive",
    })
    return null
  }
}

export default getFetch
