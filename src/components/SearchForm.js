import React from 'react'
import { useGlobalContext } from '../context'
import { Container } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField'
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    
  },
  textField: {
    
    borderRadius: "5px",
    backgroundColor: "#fff",
    width: '100%',
    "&:focused $notchedOutline": {
      borderColor: "#4A90E2",
      borderWidth: 1,
    },
  },
}));


const SearchForm = () => {
  const classes = useStyles();

  const { searchTerm } = useGlobalContext();
  const { setSearchTerm } = useGlobalContext()
  const { query } = useGlobalContext();
  const { setQuery } = useGlobalContext();
  const searchValue = React.useRef('')

  const updateSearch = (e) => {
  const val = e.target.value
  setSearchTerm(val)
  console.log(val)
}

 const getSearch = (e)=>{
   e.preventDefault()
   setQuery(searchTerm)
   window.location = '#imageList'

 }

 
  

  return (
    
      <form onSubmit={getSearch} noValidate autoComplete="off" className={classes.root}>
        <TextField
          className = {classes.textField}
          placeholder="Search Images"
          variant="outlined"
          value={searchTerm}
          //onClick={handleClick}
          onChange={updateSearch}
          inputRef={searchValue}
          InputProps={{
            startAdornment: (
              <IconButton
                type="submit"
                color="secondary"
                aria-label="add an alarm"
              >
                <SearchIcon />
              </IconButton>
             
            ),
          }}
        ></TextField>
      </form>
    
  );
}

export default SearchForm
