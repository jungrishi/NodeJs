import knex from "knex";
let db = knex({
  client: "pg",
  connection: {
    host: "http://localhost:5001",
    user: "rishi",
    password: "",
    database: "myapp_test",
  },
});

db.connect(() => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

knex.schema
  .createTable("users", table => {
    table.increments("id");
    table.string("user_name");
    table.unique("email_id");
    table.timestamps();
  })
  .createTable("accounts", table => {
    table.increments("id");
    table.string("account_name");
    table
      .foreign("user_id")
      .unsigned()
      .references("users_id");
  })
  .then(() => {
    return knex("users")
      .insert({
        user_name: "AAAAA",
        email_id: "ranabhat.85@gmail.com",
      })
      .insert({
        user_name: "BBBB",
        email_id: "BBBB.85@gmail.com",
      })
      .insert({
        user_name: "cccc",
        email_id: "cccc.85@gmail.com",
      });
  })
  .then(rows => {
    return knex("account")
      .insert({
        account_name: "jungRishi",
        user_id: rows[0],
      })
      .insert({
        account_name: "jungRishi",
        user_id: rows[1],
      })
      .insert({
        account_name: "jungRishi",
        user_id: rows[2],
      });
  })
  .then(() => {
    return knex("users")
      .join("accounts", "users.id", "accouns.user_id")
      .select("users.user_name as user", "accounts.account_name as account");
  })
  .map(row => {
    console.log(row);
  })
  .catch(err => {
    console.log(err);
  });

// export default db;
