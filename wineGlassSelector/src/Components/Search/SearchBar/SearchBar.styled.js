import styled from "styled-components";

const StyledSearchBar = styled.form`
    margin-bottom: 2rem;

    input {
        color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.white};
        height: 7rem;
        padding: 0 2.5rem;
        margin: 4rem 0 3rem 0;
        border: none;
        border-bottom: 0.1rem solid ${({ theme }) => theme.primary};
        outline: none;
        font-size: 3.7rem;
        width: 40rem;

        @media only screen and (min-width: ${({ theme }) => theme.mobile}){
            height: 3rem;
            padding: 0 1rem;
            margin: 0;
            font-size: 1.8rem;
        }
    }
`;

export default StyledSearchBar;