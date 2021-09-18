import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination"

const useStyles = makeStyles((theme) => ({
    // root contient le style qui va être afficher dans la pagination
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            justifyContent: "center",
            display: "flex"
          },
    }
}))

const CatPagination = ({ currentPage, pageCount, paginate }) => {
    // On passe tout le style de la pagination dans classes
    const classes = useStyles()
    const handleChange = (event, value) => {
        // La value est utiliser pour créer un lien sur chaque chiffre de la pagination
        paginate(value)
    }
    return (
        <div className="mb-5 footer">
            <div className={classes.root}>
                <Pagination count={pageCount} page={currentPage} onChange={handleChange} siblingCount={2} showFirstButton showLastButton variant="outlined" color="primary" />
            </div>
        </div>
    )
}

export default CatPagination