import { User } from "@/models/User";

export async function getUsers() {
    const users = await User.findAll();
    const usersString = JSON.stringify(users)
    const usersObject = JSON.parse(usersString)
    return usersObject
}