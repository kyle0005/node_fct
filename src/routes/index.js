'use strict';

import v1 from './v1'
import v2 from './v2'
import v3 from './v3'

export default app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
	// });
	app.use('/v1', v1);
	app.use('/v2', v2);
	app.use('/v3', v3);

	
}