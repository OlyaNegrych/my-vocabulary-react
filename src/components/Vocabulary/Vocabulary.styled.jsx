import styled from 'styled-components';

export const Btn = styled.button`
  font-size: ${p => p.theme.theme.fontSize.btnText};
  font-family: ${p => p.theme.theme.fontFamily.mainFont};
  font-weight: 600;
  background-color: ${p => p.theme.theme.colors.btnBG};
  color: ${p => p.theme.theme.colors.btnText};
  border: none;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  box-shadow: ${p => p.theme.theme.shadow.main};

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.theme.colors.hoverBtnText};
    box-shadow: ${p => p.theme.theme.shadow.active};
  }
`;

export const Field = styled.label`
  position: relative;
  display: block;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
  font-family: ${p => p.theme.theme.fontFamily.mainFont};

  &:focus-within Input {
    border-color: ${p => p.theme.theme.colors.hoverBtnOutline};
    outline: none;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: ${p => p.theme.theme.fontSize.formTextMob};
  font-family: ${p => p.theme.theme.fontFamily.mainFont};
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${p => p.theme.theme.colors.mainText};
`;

export const Input = styled.input`
  display: block;
  padding-left: 4px;
  font-size: ${p => p.theme.theme.fontSize.formText};
  font-family: ${p => p.theme.theme.fontFamily.mainFont};
  width: 100%;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 2px solid rgba(4, 168, 9, 0.605);
  }
`;

export const FieldCheckbox = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${p => p.theme.theme.fontSize.formText};
  font-family: ${p => p.theme.theme.fontFamily.mainFont};
  margin-bottom: 10px;
`;

export const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  margin-left: 30px;
  color: #9effa6;
`;