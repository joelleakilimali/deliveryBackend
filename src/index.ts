// here we are creating our server and handle everything concerning it
import { app } from './app';
import { CONFIG } from './config';
import dotenv from 'dotenv';

dotenv.config();

const port = CONFIG.PORT;

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

// joelle + daniel = jonie
