import Container from "../components/container/Container";
import FormWrap from "../components/form/FormWrap";
import RegisterForm from "./RegisterForm";


const Register = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <RegisterForm />
                </FormWrap>
            </Container>
        </div>
    );
};

export default Register;