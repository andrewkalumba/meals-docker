"use client"

import { UserArray } from "@/data/user"
import { useState } from "react"
import { UseUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

const LogInForm = () => {
    const [userInput, setUserInput] = useState<string>("")
    const [userNotFound, setUserNotFound] = useState<boolean>(false)
    const { user, setUser } = UseUserContext() as UserContextType

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault()
        const foundUser = UserArray.find(user => user.name === userInput)

        if (foundUser) {
            setUser(foundUser)
            setUserNotFound(false)
        } else {
            setUserNotFound(true)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }

    return (
        <div className="h-screen flex justify-center items-center ">
        <form className="flex flex-col gap-4 justify-center items-center border-2 p-4 bg-black">
            <div className="p-4">
                <label htmlFor="username">Enter name: </label>
                <input onChange={handleChange} id="username" placeholder="Username" value={userInput} />
            </div>
            <div>
                <label htmlFor="password">Enter Password: </label>
                <input id="password" placeholder="Password" />
            </div>

            <button onClick={handleClick} className="bg-amber-700 text-amber-50 hover-text-blue p-3 rounded-2xl">LOG IN</button>

            {userNotFound && <p className="text-red-500">Sorry, wrong username</p>}
        </form>
        </div>
    )
}

export default LogInForm
