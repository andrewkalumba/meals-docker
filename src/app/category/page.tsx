"use client"
import { useRouter } from "next/navigation"
const Category = () => {
    const Router = useRouter()
    const handleClick = () => {
        Router.push("./")
    }
    return (
        <div className="flex justify-center items-center h-screen rounded-2xl">
            <div className="flex flex-col justify-center items-center bg-blue-950 p-10 w-1/2">
                <h3 className="uppercase p-3 font-bold text-2xl">Common Categories of Italian Recipes</h3>
                <div>
                    <span className="font-semibold p-4">Italian cuisine is typically structured around a multi-course meal, each with its own purpose and style. Here's a breakdown:</span>

                    <p> Antipasti (Appetizers/Starters)
                        Light bites to start the meal—think cured meats, cheeses, olives, bruschetta, crostini, and marinated vegetables.
                    </p>

                    <p>Primi (First Course)

                        This is the first hot course and often the heartiest appetizer. Includes pasta, risotto, gnocchi, polenta, soups.

                    </p>

                    <p>Secondi (Main Course / Second Course)

                        Usually a protein-focused dish—meat, fish, or poultry—served simply, often without sides.
                    </p>

                    <p>Contorni (Side Dishes)

                        Vegetable-based sides or salads served alongside the secondo, often separately. Think simple, fresh, seasonal.

                    </p>

                    <p> Insalata / Formaggi e Frutta (Salad / Cheese & Fruit)

                        A lighter course, offered after the main course. Could be a green salad or a platter of cheeses and fruit.</p>

                    <p> Dolci (Dessert)

                        Sweet endings—classic treats like tiramisù, panna cotta, cannoli, gelato, or seasonal pies.
                    </p>

                    <p> Caffè & Digestivo (Coffee & Digestive)

                        A strong espresso (caffè) followed by a small liqueur like limoncello, amaro, or grappa to aid digestion.
                    </p>

                    <p>(Optional) Aperitivo

                        A pre-meal drink or light snack—more social than formal, often not part of the sit-down meal.
                    </p>
                </div>
                <button onClick={handleClick} className="bg-amber-900 text-amber-50 rounded-2xl p-2">Back</button>
            </div>
        </div>
    )
}
export default Category