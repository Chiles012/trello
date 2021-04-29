import Api from '../utils/axiosClient';

export class ServiceToDo {

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
    static async createToDo(data) {
        try {
            
            const response = await Api.post(
                'todo',
                {   
                    Description:data.Description,
                    idStatus:data.idStatus,
                    isUser:data.idUser,
                    Fecha:data.Fecha
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
                'todo/'+data.id,
                {   
                    Description:data.Description,
                    idStatus:data.idStatus,
                    isUser:data.idUser,
                    Fecha:data.Fecha
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
                'todo/'+id,
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