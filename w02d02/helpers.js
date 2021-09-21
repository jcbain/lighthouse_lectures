const generateRandomTime = () => {
  return Math.floor(Math.random() * 1000);
}
const getUsers = (callback) => {
  const time = generateRandomTime();
  const users = [
    { name: 'scully', quality: 'skeptical' },
    { name: 'mulder', quality: 'gullible' }
  ]
  setTimeout(() => {
    callback(users)
  }, time)
}

module.exports = {getUsers}