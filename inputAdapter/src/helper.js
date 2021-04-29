export function authVerify() {
    const user = JSON.parse(localStorage.getItem('user'));

    if ( user ) {
        return {
            user,
            login: true
        }
    }

    return {
        user: null,
        login: false
    }
}