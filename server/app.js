const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(require('./routes'));
app.use(require('./middlewares/errorHandler.js'));

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
