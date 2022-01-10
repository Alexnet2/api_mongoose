import { model } from "mongoose";
import StorySchema from "./Story";
import UserSchema from "./User";

export const Story = model("Story", StorySchema);
export const User = model("User", UserSchema);
