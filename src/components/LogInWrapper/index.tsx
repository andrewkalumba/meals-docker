'use client'
import LogInForm from "../LogInForm"
import { UseUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

const LogInWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user } = UseUserContext() as UserContextType

    return (
        <div>
            {!user ? <LogInForm /> : children }
        </div>
    )
}
export default LogInWrapper