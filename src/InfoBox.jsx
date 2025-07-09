import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=o1aP67eZY6Tf-PetH0j9jCg7-SSRPUU4IHgvESIS5Yw=";
    const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   return(
<div className="InfoBox">
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        {info.humidity>80 
            ? RAIN_URL : info.temp >15 
            ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity>80 
            ? <AcUnitIcon/> : info.temp >15 
            ?<SunnyIcon />:<ThunderstormIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"} >
        <p>WeatherInfo: {info.weather}</p>
        <p>Temperature= {info.temp}&deg;C</p>
        <p>Humidity= {info.humidity}</p>
        <p>MinTemperature= {info.temp_min}&deg;C</p>
        <p>MaxTemperature= {info.temp_max}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feelsLike= {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
    )
}