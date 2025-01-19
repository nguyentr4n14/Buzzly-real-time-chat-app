import jwt from 'jsonwebtoken'

export const generateToken = (userId, res) => {
    // Create token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    // Send token to user's cookie
    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevent XSS attacks (cross-site scripting attacks)
        sameSite: 'strict', // CSRF attacks (cross-site request forgery attacks)
        secure: process.env.NODE_ENV !== 'development'
    })

    return token
}