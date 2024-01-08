import Container from "../components/container/Container";
import FormWrap from "../components/form/FormWrap";
import LoginForm from "./LoginForm";


const Login = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <LoginForm />
                </FormWrap>
            </Container>
        </div>
    );
};

export default Login;