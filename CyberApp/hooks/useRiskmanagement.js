import { useCallback, useState } from "react"


export const useRiskmanagement = () => {
    const [riskscore, setriskscore]= useState(0)
    const [riskisLoading, setriskisLoading]= useState(false)

    const answertotheriskmanagementquestions = useCallback(async (qid, answer) => {
        setriskisLoading(true)
        try {
            const respone = await fetch('http://localhost:5000/api/riskmanagement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({qid: qid, answer: answer})
            })
        } catch (error) {
            console.log("Error submitting answer to account security question: ", error)
        }finally{
            setriskisLoading(false)
        }
    }, [])

    const fetchriskscore = useCallback (async () => {
        try {
            setriskisLoading(true)
            const response = await fetch('http://localhost:5000/api/sum/riskmanagement')
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