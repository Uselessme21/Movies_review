const {connection,app }= require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
  await connection
  console.log(`Server is running on port ${PORT}`);
});
