import React from "react";
import { TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {GiArchiveResearch} from 'react-icons/gi'
import "./App.css";
const App = () => {

  const [all, setAge] = React.useState('');
  const [relevance, setRelevance] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex">
      <nav>
        <GiArchiveResearch className="books"/>
      <h1>
        <br />
        Search for <span>Books</span>
      </h1>
      </nav>
      <div className="foo"> 
      <TextField
        id="outlined-basic"
        label="Search Book"
        color="primary"
        variant="outlined"
        style={{ width: 600 }}
      />
     
      <div className="search-book">
        <FaSearch style={{ color: "blue" }} />
      </div>
      <div className="Input-search">
        <p className="Categories-text">Categories</p>

        <Box className="Box" sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={all}
          label="ALL"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <p className="Sorting-text">Sorting by</p>

      <Box className="Box" sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={relevance}
          label="Relevance"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
      </div>
    </div>
  );
};

export default App;
