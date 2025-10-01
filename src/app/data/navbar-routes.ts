export interface NavRoute {
  label: string;
  path: string;
}

export const navbarRoutes: NavRoute[] = [
  { label: 'Inicio', path: '#inicio' },
  { label: 'Servicios', path: '#servicios' },
  { label: 'Proyectos', path: '#proyectos' },
  { label: 'Contacto', path: '#contacto' }
];