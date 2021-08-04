const bcrypt = require('bcryptjs');

// a plaintext password
const plainTextPassword = 'password'


// generate salt
// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt)
// })

// run our plain text through the hash with the salt
// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt)
//   bcrypt.hash(plainTextPassword, salt, (err, hash) => {
//     console.log('hash', hash)
//   })
// })

// now we can actually track that if our salt is the same, the our hash will be the same
// bcrypt.hash(plainTextPassword, '$2a$10$ECorkf.zBNNLras/p1LNfu', (err, hash) => {
//   console.log('second hash', hash)
// })

// now what does this look like synchronously
const salt = bcrypt.genSaltSync(10);
console.log('salt', salt)
const hash = bcrypt.hashSync(plainTextPassword, salt);
console.log(hash)

// okay but how do we compare our input password to our hash
// well its a one way algorithm so our input also has to be hashed in the same way
// as our hashed password
// async
bcrypt.compare(plainTextPassword, hash, (err, success) => {
  console.log('success', success)
})

bcrypt.compare('anotherpassword', hash, (err, success) => {
  console.log('hopefully not a success', success)
})

// sync
const isSuccess =  bcrypt.compareSync(plainTextPassword, hash);
console.log('sync success:', isSuccess)


// generate the salt
// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt)
//   // generate hash
//   bcrypt.hash(plainTextPassword, salt, (err, hash) => {
//     console.log('hash', hash)
//     users.user2 = {
//       email: 'jen@jen.com',
//       password: hash
//     }
//     bcrypt.compare('password', hash, (err, success) => console.log('success?: ', success))
//   })
// })

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


