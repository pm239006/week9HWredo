import { ShopState } from "../customHooks";
import { CreateState } from "../components/Cart";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NjkwMzcwOCwianRpIjoiYzM4MTBlZTUtMjNiZS00MjZiLWJmMzktYzhiMWEwZjg4NzNkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRlYWxlcnNoaXAgMTI3IiwibmJmIjoxNjk2OTAzNzA4LCJleHAiOjE3Mjg0Mzk3MDh9.W2QwRlWbnAOaYW0OkupIUtNHtzjUhv4mYXlJ8k-ZJ2M"
let userId = localStorage.getItem('token')


type PartialShop = Partial<ShopState>

export const serverCalls = {

    getShop: async () => {

        const response  = await fetch(`https://car-dealership-dfqu.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'appplication/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()

    },
    getOrder: async () => {

        const response  = await fetch(`https://car-dealership-dfqu.onrender.com/api/order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'appplication/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()

    },
    createOrder: async (data: CreateState) => {

        const response  = await fetch(`https://car-dealership-dfqu.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'appplication/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()

    },

    updateOrder: async (id: string, data: PartialShop) => {

        const response  = await fetch(`https://car-dealership-dfqu.onrender.com/api/order/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'appplication/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()

    },
    deleteOrder: async (id: string, data: PartialShop) => {

        const response  = await fetch(`https://car-dealership-dfqu.onrender.com/api/order/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'appplication/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()

    },
}