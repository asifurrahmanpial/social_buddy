import React from "react";
import {AppBar, Toolbar, Grid, Typography, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
	alignCenter: {
		display: "flex",
		alignItems: "center",
	},
	linkStyle: {
		textDecoration: "none",
		color: "white",
	},
});

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container alignItems="center">
					<Grid item className={classes.alignCenter}>
						<Typography variant="h6">
							<Link to="/" className={classes.linkStyle}> Home </Link>
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
