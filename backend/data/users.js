import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Ankit Roy',
        email: 'admin@getit.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Rosan Mahato',
        email: 'rosan@getit.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Goulian Simte',
        email: 'goulian@getit.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users;