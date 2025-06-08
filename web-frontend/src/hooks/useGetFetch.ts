import axios from "axios"
import { useToast } from "@/hooks/use-toast"

const useGetFetch = ({
  url,
  allowStatus,
}: {
  url: string
  allowStatus: number[]
}) => {
  const { toast } = useToast()
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
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

export default useGetFetch
