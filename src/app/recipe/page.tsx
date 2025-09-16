"use client"
import { useRouter } from "next/navigation"

const Recipe = () => {
    const Router = useRouter()
    const handleClick = () => {
        Router.push("./")

    }
    return (
        <div className="flex justify-center items-center h-screen rounded-2xl">
            <div className="flex flex-col justify-center items-center bg-blue-950 p-10 w-1/2">
                <h3 className="uppercase p-3 font-bold text-2xl">Italian Recipes</h3>
                <p className="p-3">
                    Lasagna: "Lasagna is a dish that brings many of the ingredients of Emilia Romana together in a simple way. Amazing dairy products, cheese, grain (in the form of pasta), and meat. Simply layer pasta sheets with bolognese, bechamel, fresh grated Parmigiano-Reggiano, repeat, repeat, repeat, repeat. Cook, then let it rest. We very lightly gratinate the top layer to get a crispy crust and then garnish with fresh shaved Parmigiano-Reggiano." — Michele Carter, executive chef of Oste in Los Angeles
                </p>
                <p className="p-3">
                    Bolognese: "It's a great one-pot pasta sauce and stores well if you want to make a large batch. The key is to sweat out the vegetables and aromatics for almost an hour before browning the meat; too many times people want to rush it. We make 50-pound batches here at Indaco, where the pots are on the stove from 8 a.m. to almost 5 p.m. NEVER RUSH IT. It's Italian; you're supposed to take your time and enjoy some wine." — Mark Bolchoz, executive chef at Indaco in Charleston, SC
                </p>
                <button onClick={handleClick} className="bg-amber-900 text-amber-50 rounded-2xl p-2">Back</button>
            </div>
        </div>
    )
}
export default Recipe