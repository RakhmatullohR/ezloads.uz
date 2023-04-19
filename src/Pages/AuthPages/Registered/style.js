import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 500px;
  height: fit-content;
  margin: 300px auto;
  text-align: center;
  .ant-input {
    background: white !important;
  }

  .ant-form-vertical .ant-form-item-label {
    padding: 0 !important;
  }
`;

export { FormWrapper };
