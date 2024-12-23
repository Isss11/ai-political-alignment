import ClassificationResult from "./ClassificationResult"
import Form from "./Form"

const PoliticalTest = () => {
    return <div>
        <p>
            Want to see what party you're best aligned to? Enter a paragraph or two about your political beliefs, and submit!
        </p>
        <Form />
        <ClassificationResult />
    </div>
}

export default PoliticalTest