import axios from "axios"
import { useToast } from "@/hooks/use-toast"

const usePostFetch = ({
  url,
  data,
  allowStatus,
}: {
  url: string
  data: object
  allowStatus: number[]
}) => {
  const { toast } = useToast()
  const fetchData = async () => {
    try {
      const response = await axios.post(url, data, {
        validateStatus: (status) => {
          return allowStatus.includes(status)
        },
      })
      return response
    } catch (error) {
      console.error("Error fetching data:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        variant: "destructive", // You can use a destructive variant to indicate a critical error
      })
      return null
    }
  }

  return fetchData // Return the function that fetches data
}

export default usePostFetch
