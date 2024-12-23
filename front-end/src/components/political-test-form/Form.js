import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"

const Form = () => {
    return <form>
        <InputTextarea placeholder="First of all, I think we need to axe the carbon tax..." rows={30} cols={150} />
        <Button label="Compute Results" />
    </form>
}

export default Form