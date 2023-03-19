import { ILogin } from "@/types/authInterfaces"

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const loginService = async (data: ILogin) => {
    const response = await fetch(`${apiUrl}/auth/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const status = response.status
    const json = await response.json()
    return {json, status}
}

export const refreshTokenService =async (correo: string) => {
    const response = await fetch(`${apiUrl}/auth/refresh`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo
        })
    })
    const status = response.status
    const json = await response.json()
    return {json, status}
}