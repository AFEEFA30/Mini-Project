import axios from 'axios'
const userInstance=[]
const UserInstance=axios.create({baseURL:"http://localhost:3000"})
const AdminInstance=axios.create({baseURL:"http://localhost:3000/Admin"})

export { userInstance,AdminInstance}

