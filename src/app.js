import express from 'express';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';
const config = require('config-lite')(__dirname);

const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin || 'http://localhost');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.sendStatus(200);
	} else {
	    next();
	}
});

router(app);

app.use(history());
app.use(express.static('./public'));
// console.log(config)
app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});