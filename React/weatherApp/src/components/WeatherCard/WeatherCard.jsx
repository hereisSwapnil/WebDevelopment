import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const WeatherCard = ({ weatherInfo }) => {
  return (
    <>
      {weatherInfo.name && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {weatherInfo.name}
            </Typography>
            <Typography variant="h5" component="div">
              Feels like: {weatherInfo.feels_like}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {weatherInfo.description}
            </Typography>
            <Typography variant="body2">
              Temp Min: {weatherInfo.temp_min}
              <br />
              Temp Max: {weatherInfo.temp_max}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
