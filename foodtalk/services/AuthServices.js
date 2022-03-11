import axios from 'axios'
import { getStorage } from '../utils/Storage'
const url = process.env.REACT_APP_ENDPOINT

export const fetchCurrentUser = async () => {
    let token = await getStorage('@token')

    try {
        const {data} = await axios.get(`/api/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (data) {
            return {data,}
        }
    } catch (err) {
        if (err && err.response) {
            return {
                error: err.response.data.error,
            }
        }
    }
}


export const loginUser = async (userData, loading, setLoading) => {
      setLoading(true)
      await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/api/auth/login`,
        userData,
      ).then((res) => {
        setLoading(false)
        return data
      }).catch((err) => {
        setLoading(false)
        return {err: err.error}
      })
  }