import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 350px;
  height: fit-content;
  margin: 300px auto;
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
  .ant-form-vertical .ant-form-item-label {
    padding: 0 !important;
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