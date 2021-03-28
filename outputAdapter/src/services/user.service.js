import Api from '../utils/axiosClient';

export class userService {

    static async getUser() {
        const response = await Api.get(
            'user',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response.data;

    }

}