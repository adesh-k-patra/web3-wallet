import axios, { AxiosResponse } from "axios"

const postFetch = async (
  toast: Function,
  {
    url,
    data,
    headers,
    allowStatus,
  }: {
    url: string
    data: object
    headers: object
    allowStatus: number[]
  }
): Promise<AxiosResponse | null> => {
  try {
    const response = await axios.post(url, data, {
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

export default postFetch
