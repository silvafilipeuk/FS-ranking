import Typography from "@mui/material/Typography";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

function PlayerCard({ player }) {
	return (
		<>
			<Typography
				sx={{
					display: {
						xs: "none",
						sm: "none",
						md: "grid",
						lg: "grid",
						xl: "grid",
					},
				}}
			>
				{getUnicodeFlagIcon(player.country)}
			</Typography>
			<Typography sx={{ p: 1 }}>{player.nickname}</Typography>
			<Typography sx={{ p: 1 }}>
				<Typography sx={{ color: "secondary.main", p: 0 }}>
					Rating:
				</Typography>{" "}
				{player.rating}
			</Typography>
			<Typography
				sx={{
					p: 1,
					display: {
						xs: "none",
						sm: "none",
						md: "grid",
						lg: "grid",
						xl: "grid",
					},
				}}
			>
				<Typography sx={{ color: "pink.main", p: 0 }}>
					Highest Rating:
				</Typography>{" "}
				{player.highestrating}
			</Typography>
			<Typography
				sx={{
					p: 1,
					display: {
						xs: "none",
						sm: "none",
						md: "grid",
						lg: "grid",
						xl: "grid",
					},
				}}
			>
				<Typography sx={{ color: "darkGreen.main", p: 0 }}>
					Wins:
				</Typography>{" "}
				{player.wins}
			</Typography>
			<Typography
				sx={{
					p: 1,
					display: {
						xs: "none",
						sm: "none",
						md: "grid",
						lg: "grid",
						xl: "grid",
					},
				}}
			>
				<Typography sx={{ color: "primary.main", p: 0 }}>
					Losses:
				</Typography>{" "}
				{player.losses}
			</Typography>
			<Typography
				sx={{
					p: 1,
					display: {
						xs: "none",
						sm: "none",
						md: "grid",
						lg: "grid",
						xl: "grid",
					},
				}}
			>
				<Typography sx={{ color: "yellow.dark", p: 0 }}>
					Streak:
				</Typography>{" "}
				{player.streak}
			</Typography>
		</>
	);
}

export default PlayerCard;
