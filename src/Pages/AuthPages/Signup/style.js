import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 350px;
  height: fit-content;
  .ant-input {
    background: white !important;
  }
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .login-form-button {
      width: 100%;
    }
  }
  .ant-col.ant-form-item-label {
    margin: 0;
  }

  // Remove Chrome autofill background color
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 9999s ease-in-out 0s;
  }
`;

export { FormWrapper };
