import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
	padding: 1.5rem;
	margin-bottom: 4rem;
	background-color: var(--clr-white);
	text-align: center;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	h4 {
		margin-bottom: 0;
		font-weight: 400;
	}
	img {
		width: 35px !important;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}
	button {
		background-color: transparent;
		border: transparent;
		font-size: 1.2rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
`;

const Navbar = () => {
	const string = "John Doe";
	return (
		<Wrapper>
			<h4>
				Welcome, <strong>{string.toUpperCase()}</strong>
			</h4>
		</Wrapper>
	);
};

export default Navbar;
