import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

function header({ setDisplayRank }) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: {
					display: {
						xs: "column",
						sm: "row",
						md: "row",
						lg: "row",
						xl: "row",
					},
				},
				my: 2,
			}}
		>
			<Button
				onClick={() => {
					setDisplayRank("rankFS1v1");
				}}
				variant="contained"
				endIcon={<SportsEsportsIcon />}
				sx={{
					width: { xs: "50vw", sm: "30 vw", md: "20vw" },
					m: 1,
					bgcolor: "primary.main",
					color: "white",
					fontWeight: "bold",
				}}
			>
				Fs 1v1 Leaderboard
			</Button>
			<Button
				onClick={() => {
					setDisplayRank("rankFStg");
				}}
				variant="contained"
				endIcon={<VideogameAssetIcon />}
				sx={{
					width: { xs: "50vw", sm: "30 vw", md: "20vw" },
					m: 1,
					bgcolor: "primary.main",
					color: "white",
					fontWeight: "bold",
				}}
			>
				Fs TG Leaderboard
			</Button>
		</Box>
	);
}

export default header;
