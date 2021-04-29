import Api from '../utils/axiosClient';

export class ServiceToDO {

    /**
     * @returns import('axios').AxiosResponse
     */
    static async getToDo() {
        try {
            
            const response = await Api.get(
                'todo',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }

}