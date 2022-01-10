import "dotenv/config";
import app from "@components/App";
import("@connection");
import("@routes");
const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
