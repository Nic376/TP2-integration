import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination"
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
          },
    }
}))

const CatPagination = ({ currentPage, paginationCount, pageCount, paginate }) => {
    const classes = useStyles()
    const handleChange = (event, value) => {
        paginate(value)
    }
    return (
        <div className={classes.root}>
            <Pagination count={pageCount} page={currentPage} onChange={handleChange} siblingCount={2} showFirstButton showLastButton variant="outlined" color="primary" />
        </div>
    )
}

export default CatPagination