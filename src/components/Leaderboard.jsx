import { useState } from "react";
import PlayerCard from "./PlayerCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { Paper, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Loading from "./Loading";
import SortColumn from "./SortColumn";

function Leaderboard({ loading, displayRank, ranking }) {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState({
		field: "ranking",
		direction: "asc",
	});

	const filteredRanking = () => {
		let filteredList = [...ranking];
		if (search.length) {
			filteredList = ranking.filter((item) =>
				item.nickname.toLowerCase().includes(search.toLowerCase())
			);
		}
		filteredList.sort((a, b) => {
			let aValue = a[sort.field];
			let bValue = b[sort.field];
			if (sort.direction === "asc") {
				if (sort.field === "nickname") {
					return aValue.localeCompare(bValue);
				}
				return aValue - bValue;
			} else {
				if (sort.field === "nickname") {
					return bValue.localeCompare(aValue);
				}
				return bValue - aValue;
			}
		});
		return filteredList;
	};

	const updateSort = (event, field) => {
		if (field !== sort.field) {
			setSort({
				field: field,
				direction: "asc",
			});
		} else {
			setSort({
				field: field,
				direction: sort.direction === "asc" ? "desc" : "asc",
			});
		}
	};

	const rankingName = () => {
		let rankingName = "";

		if (displayRank === "rankFS1v1") rankingName = " RM 1v1";
		else if (displayRank === "rankFStg") rankingName = " RM TG";
		else rankingName = " EW RedBull";

		return rankingName;
	};

	return (
		<>
			<Box
				sx={{
					gridTemplateColumns: "1frr",
					gridTemplateRows: "1fr 1fr",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					sx={{
						height: 120,
						width: 120,
						maxHeight: {
							xs: 70,
							sm: 70,
							md: 70,
							lg: 150,
							xl: 150,
						},
						maxWidth: {
							xs: 70,
							sm: 70,
							md: 70,
							lg: 150,
							xl: 150,
						},
					}}
					alt="The FellowSheep gaming logo!"
					src="src/assets/Logo_FellowSheep.png"
				/>
				<Typography sx={{ pb: 5, fontWeight: "bold" }}>
					FellowSheep Gaming Leaderboard -{rankingName()}
				</Typography>
			</Box>

			<TextField
				label="Busca por nome do jogador:"
				placeholder="Busca por nome do jogador"
				autoComplete="off"
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				sx={{
					m: 1,
				}}
			/>

			{loading ? (
				<Paper sx={{ p: 4 }}>
					<Loading
						sx={{
							display: "inline-grid",
							gridTemplateColumns: "1fr",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
						}}
					/>
				</Paper>
			) : (
				<List
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Paper
						sx={{
							m: 1,
						}}
						elevation={6}
					>
						<ListItem
							sx={{
								m: 1,
								display: "grid",
								gridTemplateColumns: {
									xs: "15% 0% 1fr 1fr",
									sm: "10% 0% 1fr 1fr",
									md: "7% 7% repeat(6, 1fr)",
									lg: "7% 7% repeat(6, 1fr)",
									xl: "7% 7% repeat(6, 1fr)",
								},
							}}
						>
							<SortColumn
								field="ranking"
								fieldLabel="Pos."
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="country"
								fieldLabel="País"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="nickname"
								fieldLabel="Nick"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="rating"
								fieldLabel="Rating"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="highestrating"
								fieldLabel="Maior Rating"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="wins"
								fieldLabel="Vitórias"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="losses"
								fieldLabel="Derrotas"
								updateSort={updateSort}
								selectedSort={sort}
							/>
							<SortColumn
								field="streak"
								fieldLabel="Streak"
								updateSort={updateSort}
								selectedSort={sort}
							/>
						</ListItem>
					</Paper>
					{filteredRanking().map((player) => {
						return (
							<>
								<Paper
									key={player.nickname}
									sx={{
										m: 1,
									}}
									elevation={6}
								>
									<ListItem
										sx={{
											display: "grid",
											gridTemplateColumns: {
												xs: "15% 1fr 1fr",
												sm: "10% 1fr 1fr",
												md: "7% 7% repeat(6, 1fr)",
												lg: "7% 7% repeat(6, 1fr)",
												xl: "7% 7% repeat(6, 1fr)",
											},
										}}
									>
										<Typography variant="h5" sx={{ p: 1 }}>
											{player.ranking}
										</Typography>
										<PlayerCard
											key={player.nickname}
											player={player}
										/>
									</ListItem>
								</Paper>
							</>
						);
					})}
				</List>
			)}
		</>
	);
}

export default Leaderboard;
