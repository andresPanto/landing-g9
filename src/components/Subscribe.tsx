import { SetStateAction, useState } from "react"
import { classNames } from "~/utils/classNamesUnion"

export interface SubscribeProps {
    setSubscribed: React.Dispatch<SetStateAction<boolean>>
}

const Subscribe: React.FC<SubscribeProps> = ({ setSubscribed }) => {
    const [email, setEmail] = useState('')
    const [clicked, setClicked] = useState(false)

    async function handleSubmit(e: any) {
        e.preventDefault()
        setClicked(true)
        //   await fetch('api/update-notion', {
        //     method: 'POST',
        //     headers: {
        //       'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify({ email }),
        //   })
        console.log(email);
        setSubscribed(true)
    }

    return (
        <form
            className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center"
            onSubmit={handleSubmit}
        >
            <input
                className="border border-r-0 border-[#C5CAE9] rounded-l-lg w-2/3
                focus:outline-none focus:ring-1 focus:ring-[#3F51B5]"
                type="email"
                required
                placeholder="Your email here"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                type="submit"
                className={classNames(
                    clicked ? 'pointer-events-none	opacity-75' : '',
                    `py-3 px-4 bg-[#3F51B5] hover:bg-[#303F9F] text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3F51B5]`
                )}
            >
                Subscribe
            </button>
        </form>
    )
}

export default Subscribe