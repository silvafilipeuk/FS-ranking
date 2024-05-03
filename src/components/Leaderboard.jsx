import PlayerCard from "./PlayerCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Loading from "./Loading";

function Leaderboard({ loading, displayRank, ranking }) {
	return (
		<>
			<Typography sx={{ pb: 5, fontWeight: "bold" }}>
				FellowSheep Gaming Leaderboard -{" "}
				{displayRank === "rankFS1v1" ? "1v1" : "TG"}
			</Typography>

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
					{ranking.map((player, index) => {
						return (
							<>
								<Paper
									sx={{
										m: 1,
									}}
									elevation={6}
								>
									<article key={player.nickname}>
										<ListItem
											sx={{
												display: "grid",
												gridTemplateColumns: {
													xs: "15% 1fr 1fr",
													sm: "10% 1fr 1fr",
													md: "5% 5% repeat(6, 1fr)",
													lg: "5% 5% repeat(6, 1fr)",
													xl: "5% 5% repeat(6, 1fr)",
												},
											}}
										>
											<Typography
												variant={"h5"}
												sx={{ p: 1 }}
											>
												{index + 1}
											</Typography>
											<PlayerCard
												key={player.nickname}
												player={player}
											/>
										</ListItem>
									</article>
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
