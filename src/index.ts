import app from './app'
import './database'

app.listen(app.get('port'), () => {
  console.log('Servidor prendido en el puerto:', app.get('port'))
})