const { PORT } = require('./system/config')
const app = require('./app')
app
.listen(PORT, () => console.log(PORT, 'Running on Port 5000'))