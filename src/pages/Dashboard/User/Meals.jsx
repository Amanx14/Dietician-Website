import { useEffect, useState } from "react"
import { decodeJwt } from "../../../middelwares"

const MealTable = ({meal}) => {
    console.log("meal is",meal)
    return (
        <table className="container table-auto">
            <thead className="text-emerald-600">
                <tr>
                    <th className="p-4">Ingredients</th>
                    <th className="p-4">Protein</th>
                    <th className="p-4">Fat</th>
                    <th className="p-4">Carbs</th>
                    <th className="p-4">Calories</th>
                </tr>
            </thead>
            <tbody className="mb-10 font-paragraph">

                {meal.ingredients.map((ing)=>(<tr className="border-t text-center">
                    <td className="p-2 text-left">{ing.ingredient_name}</td>
                    <td>{ing.protein}</td>
                    <td>{ing.fat}</td>
                    <td>{ing.carbs}</td>
                    <td>{ing.calories}</td>
                </tr>))}

                {/* <tr className="border-t text-center">
                    <td className="p-2">WHEY PROTEIN 1/2 SCOOP</td>
                    <td>12</td>
                    <td>0.7</td>
                    <td>1.2</td>
                    <td>60</td>
                </tr>

                <tr className="border-t text-center">
                    <td className="p-2">WHEY PROTEIN 1/2 SCOOP</td>
                    <td>12</td>
                    <td>0.7</td>
                    <td>1.2</td>
                    <td>60</td>
                </tr>

                <tr className="border-t text-center">
                    <td className="p-2">WHEY PROTEIN 1/2 SCOOP</td>
                    <td>12</td>
                    <td>0.7</td>
                    <td>1.2</td>
                    <td>60</td>
                </tr>

                <tr className="border-t text-center">
                    <td className="p-2">WHEY PROTEIN 1/2 SCOOP</td>
                    <td>12</td>
                    <td>0.7</td>
                    <td>1.2</td>
                    <td>60</td>
                </tr> */}
            </tbody>
            <tfoot>
                <tr className="border-t text-center">
                    <td className="p-2 text-left">Total</td>
                    <td>12</td>
                    <td>0.7</td>
                    <td>1.2</td>
                    <td>60</td>
                </tr>
            </tfoot>
        </table>
    )
}

const Meals = () => {

    const [meals, setMeals] = useState([])    

    useEffect(()=>{
        async function fetchData(){
            const decoded = decodeJwt(localStorage.getItem("dietToken"));
            console.log("decoded in meals", decoded);
            const response = await fetch("https://dietician-engine.onrender.com/users/getUserDiet", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email:decoded.userData.email}),
                 // Include credentials (cookies) in the request
              })

              const jsonResponse = await response.json();
              console.log("User Diet", jsonResponse);
              setMeals(jsonResponse.data);
        }

        fetchData();

    },[])

    console.log("meals", meals);

    return (
        <section className='mx-auto my-10 p-10 rounded-lg shadow-md  dark:bg-slate-950 dark:text-slate-300'>
            <div className="lg:min-w-[36rem]">
                <h1 className='text-center'>Title</h1>
                <div className="flex flex-wrap">
                    <div className="my-8 ">
                        <ul className="mx-auto min-w-[12rem] md:min-w-[28rem] lg:min-w-[24rem] xl:min-w-[36rem] max-w-xl divide-y">
                           
                            {meals.map((meal)=>(<li>
                                <details className="group">
                                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                        <svg
                                            className="h-5 w-5 text-gray-500 transition group-open:rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                        <span>Meal 1</span>
                                    </summary>

                                    <article className="px-4 pb-4">
                                        <MealTable meal = {meal}/>
                                    </article>
                                </details>
                            </li>))}


                            {/* <li>
                                <details className="group">
                                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                        <svg
                                            className="h-5 w-5 text-gray-500 transition group-open:rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                        <span>Meal 2</span>
                                    </summary>

                                    <article className="px-4 pb-4">
                                        <MealTable />
                                    </article>
                                </details>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                        <svg
                                            className="h-5 w-5 text-gray-500 transition group-open:rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                        <span>Meal 3</span>
                                    </summary>

                                    <article className="px-4 pb-4">
                                        <MealTable />
                                    </article>
                                </details>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                        <svg
                                            className="h-5 w-5 text-gray-500 transition group-open:rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                        <span>Meal 4</span>
                                    </summary>

                                    <article className="px-4 pb-4">
                                        <MealTable />
                                    </article>
                                </details>
                            </li> */}
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col">
                        <div className="lg:min-w-[12rem] w-full h-36 ml-4 my-4 p-4 rounded dark:bg-slate-900">Pie Chart</div>
                        <div className="lg:min-w-[12rem] w-full h-36 ml-4 my-4 p-4 rounded dark:bg-slate-900">Macro Breakdown</div>
                    </div>
                </div>
                <aside className="px-8">
                    <h3 className="text-lg">Instructions:</h3>
                    <ol className="list-decimal my-4 text-slate-400 text-sm">
                        <li>Define your goal, like weight loss or muscle gain, and tailor your diet accordingly.</li>
                        <li>Include lean proteins, whole grains, veggies, and healthy fats in each meal.</li>
                        <li>Use measuring tools to manage portions and avoid overeating.</li>
                        <li>Drink at least 8 cups of water daily to support digestion and metabolism.</li>
                        <li>Plan and cook meals ahead to stay consistent and avoid unhealthy choices.</li>
                    </ol>
                </aside>
            </div>
        </section>
    )
}

export default Meals
