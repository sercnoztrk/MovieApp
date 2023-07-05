module.exports = async (cli) => {
    const dbName = "countlyDB";
    const con = await cli.connect();
    const db = con.db(dbName);
    return db;
}