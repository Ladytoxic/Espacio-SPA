
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getDatabase, get, ref } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js';
import firebaseConfig from '../../environments/config.js';

export async function firebase(props) {
    const ruta = props;
  
    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
  
    // Obtener una referencia a la base de datos
    const database = getDatabase(app);
    const databaseRef = ref(database, ruta);
  
    // Leer los datos de la base de datos
    const snapshot = await get(databaseRef);
    const data = snapshot.val();

    return data;
  }