import { ListPlus } from "lucide-react"

export default function Main(){
    return (
        <main className="container">
            <form className="add-muscle-form">
                <input 
                type="text"
                placeholder="e.g. superior or legs"
                aria-label="Add muscle" />
                <button><ListPlus size={25} strokeWidth={1.7} />Add muscle</button>
            </form>
        </main>
    )
}