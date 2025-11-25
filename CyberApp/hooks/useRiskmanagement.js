import { useCallback, useState } from "react"


export const useRiskmanagement = () => {
    const [riskscore, setriskscore]= useState(0)
    const [riskisLoading, setriskisLoading]= useState(false)

    const API_URL = 'https://cyberapp-eqyb.onrender.com'

    const answertotheriskmanagementquestions = useCallback(async (qid, answer) => {
        setriskisLoading(true)
        try {
            const respone = await fetch(`${API_URL}/api/riskmanagement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({qid: qid, answer: Number(answer)})
            })

            const data = await respone.json()
            console.log("Response from API:", data)
        } catch (error) {
            console.log("Error submitting answer to account security question: ", error)
        }finally{
            setriskisLoading(false)
        }
    }, [])

    const fetchriskscore = useCallback (async () => {
        try {
            setriskisLoading(true)
            const response = await fetch(`${API_URL}/api/sum/riskmanagement`)
            const result = await response.json()
            setriskscore(result)
        } catch (error) {
            console.log("Error fetching account security score: ", error)
            setriskisLoading(false)
        }
    },[])

    const riskloaddata = useCallback(async () => {
        try {
            await Promise.all([answertotheriskmanagementquestions(), fetchriskscore()])
        } catch (error) {
            console.log("couldn't load data:", error)
        }
    }, [answertotheriskmanagementquestions, fetchriskscore])

    return {riskscore, riskisLoading, answertotheriskmanagementquestions, fetchriskscore, riskloaddata}
}