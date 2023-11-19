import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem 2rem;
	@media screen and (min-width: 700px) {
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	}
	.item {
		border-radius: var(--borderRadius);
		padding: 1rem 2rem;
		background-color: var(--clr-white);
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 3rem;
		align-items: center;
		span {
			width: 3rem;
			height: 3rem;
			display: grid;
			place-items: center;
			border-radius: 50%;
		}
		.icon {
			font-size: 1.5rem;
		}
		h3 {
			margin-bottom: 0;
			letter-spacing: 0;
		}
		p {
			margin-bottom: 0;
			text-transform: capitalize;
		}
		.pink {
			background: #ffe0f0;
			color: #da4a91;
		}
		.green {
			background-color: var(--clr-primary-10);
			color: var(--clr-primary-5);
		}
		.purple {
			background-color: #e6e6ff;
			color: #5d55fa;
		}
		.yellow {
			background-color: #fffbea;
			color: #f0b429;
		}
	}
`;

const Item = ({ icon, label, value, color }) => {
	return (
		<article className="item">
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

const UserInfo = () => {
	const { githubUser } = useContext(GithubContext);
	// console.log(githubUser);
	const { public_repos, followers, following, public_gists } = githubUser;
	const items = [
		{ id: 1, icon: <GoRepo className="icon" />, label: "repos", value: public_repos, color: "pink" },
		{ id: 2, icon: <FiUsers className="icon" />, label: "followers", value: followers, color: "green" },
		{ id: 3, icon: <FiUserPlus className="icon" />, label: "following", value: following, color: "purple" },
		{ id: 4, icon: <HiOutlineCodeBracketSquare className="icon" />, label: "gists", value: public_gists, color: "yellow" },
	];
	return (
		<section className="section">
			<Wrapper className="section-center">
				{items.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</Wrapper>
		</section>
	);
};

export default UserInfo;
