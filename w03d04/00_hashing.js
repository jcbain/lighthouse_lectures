const bcrypt = require('bcryptjs');

// a plaintext password
const plainTextPassword = 'password'

const users = {
  user1: {
    email: 'james@james.com',
    password: bcrypt.hashSync(plainTextPassword, 10)
  }
}

// generate the salt
bcrypt.genSalt(10, (err, salt) => {
  console.log('salt', salt)
  // generate hash
  bcrypt.hash(plainTextPassword, salt, (err, hash) => {
    console.log('hash', hash)
    users.user2 = {
      email: 'jen@jen.com',
      password: hash
    }
    bcrypt.compare('password', hash, (err, success) => console.log('success?: ', success))
  })
})

// generate hash with salt automatically
// bcrypt.hash(plainTextPassword, 10, (err, hash) => {
//   console.log('hash', hash)
//   users.user3 = {
//     email: 'bob@bob.com',
//     password: hash
//   }
//   bcrypt.compare('password', hash, (err, success) => console.log('success?: ', success))
// })



// // sync comparison between user typed password and hashed password
// console.log('sync compare', bcrypt.compareSync(plainTextPassword, users.user1.password))

// // async comparison between user type password and hashed password
// bcrypt.compare(plainTextPassword, users.user1.password, (err, success) => {
//   console.log('async compare', success)
// })

// console.log(bcrypt.hashSync(plainTextPassword, 10))


