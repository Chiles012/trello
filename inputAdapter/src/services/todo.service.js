import Api from '../utils/axiosClient';

export class ServiceToDo {

    /**
     * @returns import('axios').AxiosResponse
     */
    static async getToDo() {
        try {
            
            const response = await Api.get(
                'todos',
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
    static async createToDo(data) {
        try {
            
            const response = await Api.post(
                'todos',
                {   
                    Description: data.Description,
                    idStatus: 1,
                    isUser: data.User,
                    Fecha: data.Fecha
                },
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
    static async updateToDo(data) {
        try {
            
            const response = await Api.put(
                'todos/'+data.id,
                {   
                    Description: data.Description,
                    idStatus: data.idStatus,
                    isUser: data.User,
                    Fecha: data.Fecha  
                },
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
    static async deleteToDo(id) {
        try {
            
            const response = await Api.delete(
                'todos/'+id,
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