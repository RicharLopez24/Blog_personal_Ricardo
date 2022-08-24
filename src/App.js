
import { Grid } from '@mui/material';
import './App.css';


import Navigation from './Componentes/Navigation';

function App() {
  return (
    <div className='header-styled'>
      <Grid container>

        <Grid item xs={24} sm={12} md={12}>
          <head className='header-styled'>
            <Navigation />
          </head>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
