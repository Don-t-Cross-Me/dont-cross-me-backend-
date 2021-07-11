import { model, Schema } from "mongoose";

interface User {
    name: string;
}

  // 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
    name: { type: String, required: true },
});

const UserModel = model<User>("User", schema);

export default UserModel;
