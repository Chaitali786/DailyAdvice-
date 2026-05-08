import type {AdviceResponse, Slip} from '../types/slip'
export const fetchData = async():Promise<Slip | null> => {
  try{
      const response = await fetch("https://api.adviceslip.com/advice")
      const data : AdviceResponse = await response.json()
      console.log(data)
      return data.slip
      
      }catch(error){
        console.error("Failed to fetch", error)
      }

    return null
}
