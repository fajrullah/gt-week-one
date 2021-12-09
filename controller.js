module.exports = {
  getUserData: (req, res) => {
    const obj = {
      name: 'John Doe',
      joinDate : '12-12-2021'
    }
    return res.json(obj)
  },
  updateUserData: (req, res) => {
    const obj = {
      name: 'John Foo',
      joinDate : '12-12-2021'
    }
    return res.json(obj)
  },
  createUserData: (req, res) => {
    const obj = {
      msg: 'Success Create Data'
    }
    return res.json(obj)
  },
  deleteUserData: (req, res) => {
    const obj = {
      msg: 'Success Delete Data'
    }
    return res.json(obj)
  },
}
