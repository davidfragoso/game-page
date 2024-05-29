import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';

export type WeatherData = {
    location: string;
    weather: string;
    temperature: number;
    humidity: number;
    feelsLike: number;
};

interface RowData {
    id: number;
    icon: string;
    tipo: string;
    temp: number;
    fecha: string;
    city: string;
}

const initialRows: RowData[] = [
    // se llena con los datos de la api
];

const cities = [
    { name: 'Cancún', lat: 21.1619, lon: -86.8515 },
    { name: 'Mérida', lat: 20.9674, lon: -89.5926 },
    { name: 'Campeche', lat: 19.8302, lon: -90.5349 },
    { name: 'Ciudad de México', lat: 19.4326, lon: -99.1332 },
    { name: 'Guadalajara', lat: 20.6597, lon: -103.3496 },
    { name: 'Monterrey', lat: 25.6866, lon: -100.3161 },
    { name: 'Puebla', lat: 19.0414, lon: -98.2063 },
    { name: 'Tijuana', lat: 32.5149, lon: -117.0382 },
    { name: 'León', lat: 21.1619, lon: -101.6868 },
    { name: 'Querétaro', lat: 20.5888, lon: -100.3899 },
    { name: 'San Luis Potosí', lat: 22.1565, lon: -100.9855 },
    { name: 'Toluca', lat: 19.2826, lon: -99.6557 },
    { name: 'Hermosillo', lat: 29.0729, lon: -110.9559 },
    { name: 'Chihuahua', lat: 28.6320, lon: -106.0691 },
];

async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
    const apiKey = '5ad2fd43ad2e02222fe79bde5ca8efa2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
    
    try {
        const response = await axios.get(apiUrl);
        const weatherData: WeatherData = {
            location: response.data.name,
            weather: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like,
        };
        return weatherData;
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
        return null;
    }
}

export default function DataGridDemo() {
    const [rows2, setRows2] = useState<RowData[]>(initialRows);
    
    useEffect(() => {
        // Función para obtener datos desde la API    
        fetchData();
    }, []);

    const fetchData = async () => {
        const newRows: RowData[] = [];

        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            const weatherData = await getWeather(city.lat, city.lon);

            if (weatherData) {
                const newRow: RowData = {
                    id: i + 1,
                    icon: weatherData.weather,
                    tipo: 'Clima',
                    temp: weatherData.temperature,
                    fecha: new Date().toLocaleString(),
                    city: city.name,
                };
                newRows.push(newRow);
            }
        }

        setRows2(newRows);
    };
    
    const columns: GridColDef[] = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 90 
        },
        {
            field: 'icon',
            headerName: 'Clima',
            width: 150,
            editable: true,
        },
        {
            field: 'tipo',
            headerName: 'Tipo',
            width: 150,
            editable: true,
        },
        {
            field: 'temp',
            headerName: 'Temperatura',
            width: 150,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'Ciudad',
            width: 150,
            editable: true,
        },
        {
            field: 'fecha',
            headerName: 'Fecha',
            width: 150,
            editable: true,
        }
    ];
    
    return (
        <Box>
            <Paper>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography><strong>Movimientos</strong></Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <DataGrid
                        rows={rows2}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Grid>            
            </Paper>
        </Box>
    );
}
