export type UserProp = {
    name: string
    favoriteRecipe: string[]
    favoriteCategory: string | null
}

export type UserContextType = {
user: UserProp | null
setUser: (user:UserProp | null) => void
}