import app from "@components/App";
import { User } from "@controllers";

app.post("/users", User.insert);
app.get("/users/:id?", User.find);

export default app;
