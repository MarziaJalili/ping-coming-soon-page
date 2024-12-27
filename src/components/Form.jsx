import { useState } from "react"
function Form() {
    const [error, setError] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget.parentElement)
        const email = formData.get("email").split("")

        const validEmail = email.includes("@") && email.includes(".") && email.indexOf("@") < email.indexOf(".") && !email.includes("/");

        if (!validEmail) {
            setError(true)
        } else (
            setError(false)
        )
    }
    return (
        <form className="ping-container__form">
            <div className="form__input-box">
                <input type="email" style={error ? { borderColor: "hsl(354, 100%, 66%)" } : {}} placeholder="Your email address..." name="email" className="form__email-input" />
                {error ? <span>Please provide a valid email address.</span> : null}
            </div>
            <button onClick={handleSubmit} className="form__notify-me-button">
                Notify Me
            </button>
        </form>
    )
}

export default Form;