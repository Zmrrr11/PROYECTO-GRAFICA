export interface UserProfile {
  id: number;
  nombre: string;
  apellido_paterno: string;
  email: string;
  rol_id: number;
  estudiantes?: {
    grado_id: number;
    paralelo: string;
  };
}