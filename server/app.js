const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const houseRoutes = require('./routes/houseRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Обслуживание статических файлов
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use('/api/houses', houseRoutes);

// Маршрут для корневого URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
