const mongoose = require('mongoose');
const emoji = require('./models/emojis');
const data= require("./data/emojis.json")

const uri = process.env.DB_URI;
//'mongodb://utn:utn@localhost:27017/utn';

async function connection() {
  await mongoose.connect(uri);
  console.log('conexion exitosa');
  const totalEmojis = await emoji.countDocuments();

  console.log("cantidad de Emojis en la BD: ", totalEmojis);
  if(totalEmojis == 0){
    console.log("Insetando: ", data)
    await emoji.insertMany(data)
  }
}

module.exports = connection;

/*
main()
  .catch((error) => {
    console.log('Un error ha ocurrido: ', error.message);
  }); 
  */