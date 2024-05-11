
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import EMedi from './EMedi';
import Car from './Car';



const ALL = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    return (

        <div className=' mb-10 mt-10 ml-10 mr-10'>



        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
             <Tab label="Emergency Medicine" />
             <Tab label="Cardiology" />
             <Tab label="camp" />
            </Tabs>
           

            </Box>
            <Tabs  value={value} index={0} >  </Tabs>
            <Tabs  value={value} index={0} > </Tabs>
        </div>


        </div>
    );
};

export default ALL;