import app from "@components/App";
import { Story } from "@controllers";

app.post("/stories", Story.insert);
app.get("/stories/:id?", Story.find);

export default app;
