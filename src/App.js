import {  useState } from "react";
import {getQuotes} from "./api";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function App() {
  const[quote,setQuotes]=useState([]);
  const getNewQuote = () => {
    getQuotes().then((quotes) => {
      setQuotes(quotes.data.content);
    });
  }
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", minHeight:"90vh",backgroundColor:"#2ecc71"}}>
        <Card sx={{backgroundColor:'#98FB98'}}>
          <CardContent>
            <Typography variant="body1">{quote}</Typography>
            <Button variant="contained" onClick={getNewQuote}>Give me a phrase </Button>
          </CardContent>
       </Card>
    </Box>
  );
}
export default App;
