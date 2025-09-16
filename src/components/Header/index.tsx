"use client"
import { UseUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"
import Image from "next/image"


const Header = () => {
    const { user } = UseUserContext() as UserContextType
    if (!user) return null

    return (
        <>
       <img src="/logo1.jpg" alt="logo" width={70} height={50} className="flex items-start" />
        </>
    )
}

export default Header