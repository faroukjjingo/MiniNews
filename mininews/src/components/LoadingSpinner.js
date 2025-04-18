import styled from 'styled-components';

const Spinner = styled.div`
  border: 4px solid #E5E7EB;
  border-top: 4px solid #6B7280;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin: 24px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;