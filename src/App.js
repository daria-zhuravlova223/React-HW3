import * as React from 'react';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import './App.css';


function App() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  return (
    <Grid container justifyContent="center">
    <Box sx={{ width: '25%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="LOG IN" value="1" />
          <Tab label="SIGN UP" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1"><LoginForm/></TabPanel>
      <TabPanel value="2"><SignupForm/></TabPanel>
    </TabContext>
  </Box>
  </Grid>
  );
}
export default App;
