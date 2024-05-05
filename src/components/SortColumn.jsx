import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const responsive = (fieldLabel) => {
	let display = false;

	if (
		["País", "Maior Rating", "Vitórias", "Derrotas", "Streak"].includes(
			fieldLabel
		)
	)
		display = true;
	return display;
};

function SortColumn({ field, fieldLabel, selectedSort, updateSort }) {
	return (
		<Grid container onClick={(event) => updateSort(event, field)}>
			<Grid>
				{!responsive(fieldLabel) ? (
					<Typography>{fieldLabel}</Typography>
				) : (
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
						{fieldLabel}
					</Typography>
				)}
			</Grid>
			{selectedSort.field === field && (
				<Grid item>
					{selectedSort.direction === "asc" ? (
						<SouthIcon sx={{ width: "1rem" }} />
					) : (
						<NorthIcon sx={{ width: "1rem" }} />
					)}
				</Grid>
			)}
		</Grid>
	);
}

export default SortColumn;
