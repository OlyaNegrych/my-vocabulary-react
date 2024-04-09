import styled from 'styled-components';
import Notiflix from 'notiflix';

import Vocabulary from '../components/Vocabulary/Vocabulary';

const App = () => {

   Notiflix.Notify.init({
     position: 'center-center',
     borderRadius: '8px',
     timeout: 1000
   });

  return (
    <StyledOutlet>
      <Vocabulary />
    </StyledOutlet>
  );
};

export default App;

export const StyledOutlet = styled.div`
  margin: 0;
  padding: 40px 20px 40px 20px;
  max-width: 100vw;
  height: 100vw;
  margin-left: auto;
  margin-right: auto;
  background-color: #9fddbe;
`;

