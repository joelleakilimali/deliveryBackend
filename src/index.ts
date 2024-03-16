// here we are creating our server and handle everything concerning it
import * as http from 'http';
import { app } from './app';
import { CONFIG } from './config';

const port = CONFIG.PORT || 3002;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`running at port ${port}`);
});

// joelle + daniel = jonie
