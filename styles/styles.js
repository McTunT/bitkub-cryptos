import styled from "styled-components";

export const Layout = styled.div`
  @media (max-width: 1024px) {
    .container-index-moblie {
      padding: 0;
    }
  }

  @media (max-width: 767px) {
    .container-index-moblie {
      padding: 0;
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      max-width: 100%;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0 0 4px 4px;
    }
  }
`;
