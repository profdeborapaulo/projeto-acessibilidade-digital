import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:11742', // Ajuste isso para o ambiente correto
  });
  