import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173']
    }
})

export const getReceiverSocketId = (userId) => {
    return userSocketMap[userId]
}

// Used to store online users
const userSocketMap = {} // {userId: socketId}

io.on("connection", (socket) => {
    console.log("A user connected", socket.id)

    const userId = socket.handshake.query.userId

    if (userId) {
        if (!userSocketMap[userId]) {
            userSocketMap[userId] = new Set()
        }
        userSocketMap[userId].add(socket.id)
    }

    // Emit updated online users to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id)

        if (userId && userSocketMap[userId]) {
            userSocketMap[userId].delete(socket.id)

            // If no sockets are left for the user, remove them from the map
            if (userSocketMap[userId].size === 0) {
                delete userSocketMap[userId]
            }
        }

        // Emit updated online users to all clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export { io, app, server }
