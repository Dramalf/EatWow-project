import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const prompt = Modal.prompt;

const Login = () => (
    <Button onClick={() => prompt(
        'Login',
        'Please input login information',
        (login, password) => console.log(`login: ${login}, password: ${password}`),
        'login-password',
        null,
        ['Please input name', 'Please input password'],
    )}
    >login-password</Button>
);


