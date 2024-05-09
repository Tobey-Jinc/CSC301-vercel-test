const sql = require('./connection.js');


let db = {
    create: async(data) => {
        // NOT WORKING, IT'S A PLACEHOLDER
        const xs = await sql`
            insert into todos (${data.name}, ${data.age}) values 
                (
                    'Murray', 68
                )
            returning *
        `
        return xs;
    },
    delete: (id) => {
        return id;
    },
}

module.exports = db;