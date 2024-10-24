import Form from "../../Form"
import Container from "../../Container"
export const Home = () => {

    return (
        <main>
            <div className="page home">
                <Container >
                    <h1 className="home__first-title">
                    Daily Calorie Intake Calculator
                    </h1>
                    <p className="home__description">
                    Feel free to enter your information below in the Daily Calorie Intake calculator to receive your personal current daily calorie intake, and what your body needs to fuel itself during the day with your routine!
                    </p>
                    <Form />
                </Container>
            </div>
        </main>
    )
}