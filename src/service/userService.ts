import User from '../schemas/User'
import { UserType, UserInterface } from '../types/UserTypes';

class UserService {


    async create(data) {
        await User.create(data)

        return;
    }

    async findAll() {
        const findedUsers = await User.find()

        return findedUsers
    }

    async findUser(id) {
        const user = await User.findById(id)
        return user 
    }

    async deleteUser(id) {
        const user = await User.findOneAndDelete({
            _id: id
        })
        return user 
    }

    async updateUser(id: any, data: UserType) {
        const userToUpdate = await User.findOneAndUpdate({_id: id}, {
            firstName: data.firstName,
            lastName: data.lastName
        })

        const updatedUser = User.findById(userToUpdate?._id)

        return updatedUser
    }
}

export default new UserService()
