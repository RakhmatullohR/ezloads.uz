import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { MessageBox, Wrapper } from './style';
const RegisteredPage = () => {
  return (
    <Wrapper>
      <MessageBox>
        <>
          <h2 style={{ color: '#004bbd' }}>✔ Email was verified</h2>
          <br />
          <Form.Item>
            <Link to='/main'>
              Go to <b>Main</b> page
            </Link>
          </Form.Item>
        </>
      </MessageBox>
    </Wrapper>
  );
};
export default RegisteredPage;
