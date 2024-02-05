import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).json({ server: "status funcionando" });
  console.log(database);
}

export default status;
