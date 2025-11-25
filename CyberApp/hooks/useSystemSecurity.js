import { useCallback } from "react"
import { useState } from "react"

export const useSystemSecurity = () => {

const {systemsecurityscore, setsystemsecurityscore }=useState(0)
const [sysisLoading, setsysisLoading]= useState(false)


    const API_URL = 'https://cyberapp-eqyb.onrender.com'

    
    const fetchsystemsecurityscore = useCallback(async () => {
        try{
            setsysisLoading(true)
            const response = await fetch(`${API_URL}/api/sum/systemsecurity`)
            const result = await response.json()
            setsystemsecurityscore(result)
        } catch (error) {
            console.log("Error fetching system security score: ", error)
        }finally{
            setsysisLoading(false)
        }
    }, [])

    const answertosystemsecurityquestion = useCallback(async (qid, answer) => {
        try {
            setsysisLoading(true)
            const response = await fetch(`${API_URL}/api/systemsecurity`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({qid: qid, answer: answer})
            })
        } catch (error) {
            console.log("Error submitting answer to system security question: ", error)
        }finally{
            setsysisLoading(false)
        }
    }, []
)
    const sysloaddata = useCallback(async () => {
        try {
            setsysisLoading
            await Promise.all([answertosystemsecurityquestion(), fetchsystemsecurityscore()])
        } catch (error) {
            console.log("couldn't load data:", error)
        }finally{
            setsysisLoading(false)
        }
    }, [answertosystemsecurityquestion,fetchsystemsecurityscore])

    return {systemsecurityscore, sysisLoading, sysloaddata, fetchsystemsecurityscore, answertosystemsecurityquestion}
}