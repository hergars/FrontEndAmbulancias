export interface Usuario {
  id?: number;
  nombre_usuario: string;
  tipo_documento: string;
  documento: string;
  cod_pais: number;
  cod_municipio: number;
  id_rol: number;
  sexo: string;
  celular_usuario: string;
  correo_usuario: string;
  cod_eps: number;
  tipo_sangre: string;
  estado_usuario: string;
  creado_por_usuario: string;
  fecha_creacion_usuario: string;
  create_at: string;
  licencia: string;
}