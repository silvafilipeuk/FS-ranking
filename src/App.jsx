import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [displayRank, setDisplayRank] = useState("rankFS1v1");
	const [ranking, setRanking] = useState([]);
	const [loading, setIsLoading] = useState(true);

	const apiCall = axios.create({
		baseURL: "https://filipedasilva.co.uk/api/",
		headers: { "X-Custom-Header": "foobar" },
	});

	useEffect(() => {
		setIsLoading(true);
		apiCall.get(displayRank).then((ranking) => {
			setRanking(ranking.data.map((item, index) => {
				return {
					ranking: index + 1,
					...item
				}
			}));
			setIsLoading(false);
		});
	}, [displayRank]);

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				alignContent: "flex-start",
				flexDirection: "column",
				textAlign: "center",
				color: "dark",
				width: "80vw",
			}}
		>
			<Header displayRank={displayRank} setDisplayRank={setDisplayRank} />
			<Leaderboard
				displayRank={displayRank}
				loading={loading}
				ranking={ranking}
			/>
		</Container>
	);
}

export default App;
