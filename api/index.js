const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const controllers = require('./controllers');

const PRODUCTION = process.env.NODE_ENV === 'production';

const app = express();

if (PRODUCTION) {
  app.use(helmet());
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
}

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();
app.use('/api', router);

Object.values(controllers).forEach(Controller => new Controller(router));

router.use((req, res) => {
  res.status(404).json({ error: 404, message: 'not found'});
});

if (PRODUCTION) {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!!`);
});
