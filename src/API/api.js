import axios from 'axios'

const selectToken = () => {
  const token = sessionStorage.getItem('token')
  return token
}

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: 'http://54.253.179.9:8000',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const instance = axios.create(defaultOptions)

  instance.interceptors.request.use((config) => {
    const token = selectToken()
    console.log('config.url', config.url)
    if (
      !config.url.includes('login') ||
      config.url.includes('register') ||
      config.url.includes('forgot-password') ||
      config.url.includes('reset-password')
    ) {
      config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config
  })

  instance.interceptors.response.use(undefined, (error) => {
    // const { status, config } = error.response

    // if (
    //   !config?.url.includes("update_password") &&
    //   (status === 403 || status === 401)
    // ) {
    // window.sessionStorage.removeItem("userObj");
    // localStorage.removeItem("userObj");
    //   window.location.href = "/";
    // }

    return Promise.reject(error)
  })

  return instance
}

export default axiosInstance()
