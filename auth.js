function login(username, password) {
    if (username === 'locked_user') {
        throw new Error('Account is locked');
    }
    
    if (!username || !password) {
        return false;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharRegex.test(password)) {
        throw new Error('Password contains invalid characters');
    }

    if (username === 'admin' && password === '123') {
        return true;
    }
    
    return false;
}

module.exports = { login };