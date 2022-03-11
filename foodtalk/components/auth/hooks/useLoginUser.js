import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../../App'
import { fetchCurrentUser, loginUser } from '../../../services/AuthServices'
import { saveStorage } from '../../../utils/Storage'

const url = process.env.REACT_APP_ENDPOINT

const useLoginUser = () => {
    const {userDispatch} = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [initialState, setInitialState] = useState({
        email: '',
        password: '',
    })

    const handlePasswordChange = (text) => {
        setInitialState({ ...initialState, password: text })
        // setError({ ...error, password: '' })
      }

      const handleEmailChange = (text) => {
        setInitialState({ ...initialState, email: text })
        // setError({ ...error, email: '' })
      }

    const handleLoginUser = async (e, eventSignIn) => {

        try{

            setLoading(true)
            const {data} = await axios.post(
              `/api/auth/login`,
              initialState,
            )

            setLoading(false)
            
            if(data) {

                setLoading(true)
                saveStorage('@token', data.data.token)

                const me = await fetchCurrentUser()

                userDispatch({type: 'SET_CURRENT_USER', payload: me.data.user})

                setLoading(false)
                
                eventSignIn()
            }
           
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    return {
        loading,
        error,
        handleLoginUser,
        handleEmailChange,
        handlePasswordChange,
      }

}

export default useLoginUser




