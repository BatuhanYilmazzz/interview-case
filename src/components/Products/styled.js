import styled from 'styled-components';

export const StyledProducts = styled.div`
  padding: ${(props) => props.theme.gutters.regular};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.gutters.largest};
`;

export const ReactPaginateWrapper = styled.div`
  .paginationBttns {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: ${(props) => props.theme.gutters.big} auto;
    max-width: 530px;
    padding-left: 0;
    cursor: pointer;
  }

  li {
    font-size: ${(props) => props.theme.fontSizes.regular};
    margin-right: ${(props) => props.theme.gutters.smallBig};
  }
  .paginationActive {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.gutters.small} ${(props) => props.theme.gutters.small};
    border-radius: ${(props) => props.theme.radius.small};
  }
`;
