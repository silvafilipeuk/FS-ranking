import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

function header({ setDisplayRank }) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: {
					display: {
						xs: "column",
						sm: "column",
						md: "column",
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
					width: { xs: "55vw", sm: "30 vw", md: "20vw", lg: "15vw" },
					height: "5vh",
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
					width: { xs: "55vw", sm: "30 vw", md: "20vw", lg: "15vw" },
					height: "5vh",
					m: 1,
					bgcolor: "primary.main",
					color: "white",
					fontWeight: "bold",
				}}
			>
				Fs TG Leaderboard
			</Button>
			<Button
				onClick={() => {
					setDisplayRank("rankFSEw");
				}}
				variant="contained"
				endIcon={<SportsEsportsIcon />}
				sx={{
					width: { xs: "55vw", sm: "30 vw", md: "20vw", lg: "15vw" },
					height: "5vh",
					m: 1,
					bgcolor: "primary.main",
					color: "white",
					fontWeight: "bold",
				}}
			>
				EW RedBull Leaderboard
			</Button>
		</Box>
	);
}

export default header;
