const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const controllers = require('./controllers');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(express.static(path.join(__dirname, 'build')));
}

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();
app.use('/api', router);

Object.values(controllers).forEach(Controller => new Controller(router));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!!`);
});
