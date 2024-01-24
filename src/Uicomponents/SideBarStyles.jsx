import styled from "styled-components";
export const UserDetail = styled.div`
  width: 85%;
  height: 8%;
  background-color: rgba(152, 162, 179, 0.3); /* Semi-transparent gray */
  margin-top: 20px;
  border-radius: 8px;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const UserIcon = styled.div`
  position: absolute;

  left: 0;
  padding-left: 10px;
  /* Additional styles if needed */
`;
export const SelectorIcon = styled.div`
  position: absolute;
  right: 0;
  padding-right: 10px;
  padding-top: 2px;

  /* Additional styles if needed */
`;
export const Details = styled.div``;

export const Name = styled.p`
  font-family: Inter;
  font-weight: 600;
  color: var(--Text-7, #d1d5db);
  font-size: 1rem;
`;
export const Address = styled.p`
  font-family: Inter;
  font-weight: 400;
  color: var(--Gray-400, #98a2b3);
  font-size: 1rem;
`;
