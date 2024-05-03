import { useEffect, useState } from 'react';

// Interfaz para describir la estructura de datos de un proveedor
interface Proveedor {
    id: number;
    nombre_proveedor: string;
    direccion: string | null;
    telefono: string | null;
}

const ProveedoresPage = () => {
    const [proveedores, setProveedores] = useState<Proveedor[]>([]);

    useEffect(() => {
        async function fetchProveedores() {
            try {
                const response = await fetch('http://localhost:4000/proveedores'); // URL del servidor de proveedores
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los datos de proveedores');
                }
                const data: Proveedor[] = await response.json();
                setProveedores(data);
            } catch (error) {
                console.error('Error al cargar los datos de proveedores:', error);
            }
        }
        fetchProveedores();
    }, []);

    return (
        <div>
            <h1>Proveedores</h1>
            <ul>
                {proveedores.map((proveedor) => (
                    <li key={proveedor.id}>
                        <h2>{proveedor.nombre_proveedor}</h2>
                        <p>Dirección: {proveedor.direccion || 'No disponible'}</p>
                        <p>Teléfono: {proveedor.telefono || 'No disponible'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProveedoresPage;
