import { useCallback, useState } from "react"


export const useAccountsecurity = () => {
    const [accountscore, setaccountscore]= useState(0)
    const [accisLoading, setaccisLoading]= useState(false)

    const answertoaccountsecurityquestion = useCallback(async (qid, answer) => {
        setaccisLoading(true)
        console.log("Sending to API:", {qid: qid, answer: answer})
        try {
            const respone = await fetch('http://localhost:5000/api/accountsecurity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({qid: qid, answer: answer})
            })
            const data = await respone.json()
            console.log("Response from API:", data)
        } catch (error) {
            console.log("Error submitting answer to account security question: ", error)
        }finally{
            setaccisLoading(false)
        }
    }, [])

    const fetchaccountsecurityscore = useCallback (async () => {
        try {
            setaccisLoading(true)
            const response = await fetch('http://localhost:5000/api/sum/accountsecurity')
            const result = await response.json()
            setaccountscore(result)
        } catch (error) {
            console.log("Error fetching account security score: ", error)
            setaccisLoading(false)
        }
    }, [])

    const accloaddata = useCallback(async () => {
        try {
            setaccisLoading(true)
            await fetchaccountsecurityscore()
        } catch (error) {
            console.log("couldn't load data:", error)
        }finally{
            setaccisLoading(false)
        }
    }, [fetchaccountsecurityscore])

    return {accountscore, accisLoading, accloaddata, fetchaccountsecurityscore, answertoaccountsecurityquestion}
}