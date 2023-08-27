const axios = require("axios");
const server = require("./src/server");
const { conn, Driver, Team } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    
    let connSync = new Date()

    const { data } = await axios.get('http://localhost:5000/drivers')

    data.map(async ({ name, description, nationality, image, dob, teams }) => {
      try {
        const _ = await Driver.findOrCreate({
          where: {
            name: name.forename,
            surname: name.surname,
          },
          defaults: {
            description: description,
            nationality: nationality,
            image: image.url,
            birthdate: dob,
          }
        })
        
      } catch (error) {
        console.log(error.message);
      }

      if (teams) {
        let arr = teams.split(',')
        arr.map(async (t) => {
          try {
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
