export const loginURL = '/oauth/token'
export const userURL = '/api/user'

export const getHeader = function() {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
    }
    return headers
}