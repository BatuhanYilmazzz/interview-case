import styled from 'styled-components';

export const StyledProducts = styled.div`
  padding: ${(props) => props.theme.gutters.regular};
  background-color: ${(props) => props.theme.colors.white};
`;

export const ReactPaginateWrapper = styled.div`
  .paginationBttns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    margin: ${(props) => props.theme.gutters.big} auto;
    max-width: 530px;
    padding-left: 0;
    cursor: pointer;
  }

  li {
    font-size: ${(props) => props.theme.fontSizes.regular};
  }
  .paginationActive {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.gutters.small};
  }
`;
