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
			<Typography sx={{ p: 1 }}>{player.rating}</Typography>
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
				{player.streak}
			</Typography>
		</>
	);
}

export default PlayerCard;
