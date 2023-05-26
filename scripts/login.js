import http from 'k6/http';
import { check, sleep } from 'k6';



export let options = {
  stages: [
    { duration: '1m', target: 10 },  // Simular 10 usuarios concurrentes durante 1 minuto
    { duration: '3m', target: 20 },  // Mantener 20 usuarios concurrentes durante 3 minutos
    { duration: '5m', target: 50 }   // Mantener 50 usuarios concurrentes durante 5 minutos
  ],
};

export default function () {
  // Definir la URL del sitio y las credenciales de inicio de sesión
  const url = 'https://stage01.bluevolt.com';
  const username = 'new_user@bluevolt.com';
  const password = 'Apple123';

  // Realizar la solicitud POST para iniciar sesión
  const loginResponse = http.post(`${url}/login`, { username, password });

  // Verificar si el inicio de sesión fue exitoso
  check(loginResponse, {
    'Inicio de sesión exitoso': (response) => response.status === 200
  });

}