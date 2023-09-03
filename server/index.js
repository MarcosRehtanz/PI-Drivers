const axios = require("axios");
const server = require("./src/server");
const { conn, Team } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    
    let connSync = new Date()

    const { data } = await axios.get('http://localhost:5000/drivers')

    data.map(async ({ teams }) => {
 
      if (teams) {

        let arr = teams.split(',') //* "Mercedes, Jordan ,Jaguar"
 
        arr.map(async (t) => {
          try {
            //* [Mercedes, Jordan ,Jaguar]
            await Team.findOrCreate({
              where: { name: t.trim() }
            })
          } catch (error) {
            console.log(error.message);
          }

        })
      }
    })

    console.log(`Server listening on port ${PORT} in ${new Date() - connSync} ms`);
  })
}).catch(error => console.error(error))
