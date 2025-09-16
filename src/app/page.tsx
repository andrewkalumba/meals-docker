"use client"

import Header from "@/components/Header";
import LogInForm from "@/components/LogInForm";
import { UseUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, setUser } = UseUserContext() as UserContextType
  const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/"

  const handleClick = () => {
    setUser(null)
  };

  const getCategoryRecipes = async () => {

    try {
      const response = await fetch(`${API_ENDPOINT}filter.php?c=${user?.favoriteCategory}`)
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(`no data found ${error}`)
    }
  }

  const getRandomRecipe = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}random.php`)
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(`no data found ${error}`)
    }
  }

  useEffect(() => {
    user?.favoriteCategory ? getCategoryRecipes() : getRandomRecipe()

  })

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">

      {user ? (

        <div className="flex flex-col gap-4 items-center p-4 bg-cyan-700 ">
          {user && <Header />}
          <div>Welcome {user.name}</div>
          {user.favoriteCategory}

          <div className="flex gap-6 items-center p-6 border-t-2 border-y-stone-700">
            <Navigation />
          </div>

          <button onClick={handleClick} className="px-4 py-2 bg-red-500 text-white rounded mt-4 hover:bg-amber-50 hover:text-gray-950">
            Log Out
          </button>
        </div>
      ) : (
        <LogInForm />
      )}
    </div>
  );
}
