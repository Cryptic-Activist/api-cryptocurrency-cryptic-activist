import app from './app';

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`[OK] ${process.env.APP_NAME} is listening on port: ${port}`);
});
