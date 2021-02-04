/** @format */
import ArticleList from '../components/ArticleList';
import { server } from '../config';
import Meta from '../components/Meta';
const Home = ({ articles }) => {
	return (
		<>
			<Meta title='WebDev Newz - Home page' />
			<ArticleList articles={articles} />
		</>
	);
};
export const getStaticProps = async () => {
	// const res = await fetch(
	// 	`https://jsonplaceholder.typicode.com/posts?_limit=6`
	// );
	const res = await fetch(`${server}/api/articles`);

	const articles = await res.json();
	return {
		props: {
			articles,
		},
	};
};
export default Home;
