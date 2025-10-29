const express = require('express');
const path = require('path');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Raktar_Mester',
  password: 'jelszo',
  port: 5432,
});

async function connectDB() {
  await client.connect();
}
connectDB();

app.post('/adduser', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await client.query(
      'INSERT INTO users(username, email, password) VALUES($1, $2, $3)',
      [name, email, password]
    );
    res.json({ success: true, message: 'Felhasználó sikeresen beszúrva!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Hiba történt az adatbázisban.' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Szerver fut: http://localhost:${PORT}`);
});
