import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(0deg, #3700ff 10%, #3700ff 10%, #00d0ff 100%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
