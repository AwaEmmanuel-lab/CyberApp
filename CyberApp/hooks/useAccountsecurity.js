import { useCallback, useState } from "react"


export const useAccountsecurity = () => {
    const [accountscore, setaccountscore]= useState(0)
    const [accisLoading, setaccisLoading]= useState(false)

    const API_URL = 'https://cyberapp-eqyb.onrender.com'

    const answertoaccountsecurityquestion = useCallback(async (qid, answer) => {
        setaccisLoading(true)
        console.log("Sending to API:", {qid: qid, answer: answer})
        try {
            const respone = await fetch(`${API_URL}/api/accountsecurity`, {
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
            setaccisLoading(false)
        }
    }, [])

    const fetchaccountsecurityscore = useCallback (async () => {
        try {
            setaccisLoading(true)
            const response = await fetch(`${API_URL}/api/sum/accountsecurity`)
            const result = await response.json()
            setaccountscore(result)
        } catch (error) {
            console.log("Error fetching account security score: ", error)
        }finally{
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


    const deleteAccountSecurity = useCallback(async () => {
        setaccisLoading(true)
        try {
            const response = await fetch(`${API_URL}/api/delete/accountsecurity`, {
                method: "DELETE"
            })

            const result = await response.json()
            console.log("Delete result:", result)

            // After delete, reset UI score to 0
            setaccountscore(0)

        } catch (error) {
            console.log("Error deleting account security records:", error)
        } finally {
            setaccisLoading(false)
        }
    }, [])

    return {accountscore, accisLoading, accloaddata, fetchaccountsecurityscore, answertoaccountsecurityquestion, deleteAccountSecurity}
}