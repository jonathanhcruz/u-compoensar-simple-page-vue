# u-compensar — Página simple (Vue 3 + TypeScript + Vite)

Proyecto sencillo de front-end desarrollado como trabajo para la universidad (Ucompensar). Este repositorio contiene una página estática/SPA construida con Vue 3, TypeScript y Vite, pensada como plantilla educativa y demostrativa.

Resumen rápido
- Framework: Vue 3
- Lenguaje: TypeScript
- Bundler / Dev server: Vite
- Estado: Vuex 4 (módulos)
- Enrutamiento: vue-router
- Estilos: SCSS / Sass

Arquitectura y estructura de carpetas
La estructura principal del proyecto (carpeta `src/`) está organizada para separar responsabilidades y facilitar el trabajo en equipo:

- `src/`
  - `main.ts` — punto de entrada de la aplicación.
  - `App.vue` — componente raíz.
  - `router/` — configuración de rutas (Vue Router).
  - `store/` — Vuex store con módulos (por ejemplo `store/modules/device`).
  - `components/` — componentes reutilizables agrupados por dominio (ej. `hero`, `menu`, `clients`, `customer`, `footer`, `community`).
  - `Pages/` — vistas o páginas (ej. `main`, `404`).
  - `HOC/` — componentes de orden superior o wrappers reutilizables.
  - `helpers/` y `utils/` — funciones auxiliares y utilidades (por ejemplo detección de dispositivo).
  - `assets/` — imágenes, svg y otros recursos estáticos.
  - `styles/` — estilos globales y variables SCSS (`base`, `_variables.scss`, `_mixins.scss`).
  - `types/` — tipos TypeScript y definiciones (ej. `vuex.d.ts`, `shims-vuex.d.ts`).

Patrones y convenciones notables
- Vue 3 con Composition API / `<script setup>` (plantilla del proyecto).
- Tipado fuerte con TypeScript y definiciones en `src/types`.
- State centralizado con Vuex 4 en módulos con `namespaced: true`.
- SCSS para estilos; variables y mixins globales en `src/styles/base`.
- Archivos y carpetas organizadas por dominio (feature folders) para facilitar escalado.

Arquitectura de la carpeta `components/`
La carpeta `src/components/` agrupa componentes reutilizables por funcionalidad. A continuación se describe la arquitectura interna encontrada en este proyecto:

- `components/` — carpeta raíz de componentes reutilizables.
  - `clients/`
    - `Clients.vue` — componente que muestra la sección o tarjeta de clientes.
    - `styles/Clients.scss` — estilos específicos del componente `Clients`.
  - `community/`
    - `community.vue` — componente de la sección "comunidad" (texto, enlaces o llamadas a la acción).
    - `styles/community.scss` — estilos específicos de la sección comunidad.
  - `customer/`
    - `Customer.vue` — componente relacionado con el usuario/cliente.
    - `styles/customer.scss` — estilos para el componente `Customer`.
  - `footer/`
    - `FooterRouter.vue` — componente del pie de página y navegaciones relacionadas.
    - `styles/footer.scss` — estilos del footer.
  - `hero/`
    - `HeroSection.vue` — componente del área hero (banner principal).
    - `styles/hero.scss` — estilos del hero.
  - `menu/`
    - `menu.vue` — componente del menú o navegación principal.
    - `index.ts` — archivo de exportación/ayuda para el menú (posible centralizador de props o utilidades de export).
    - `styles/menu.scss` — estilos del menú.

Convenciones observadas
- Nombres de componentes en PascalCase (`Clients.vue`, `HeroSection.vue`) o kebab/camel según el autor; mantener consistencia en futuras contribuciones.
- Cada componente tiene su carpeta de `styles/` con un archivo `.scss` asociado.
- Agrupación por dominio: cada carpeta dentro de `components/` agrupa el componente principal y sus estilos/recursos relacionados.
- Si aparece `index.ts` en una carpeta (como en `menu/`), suele usarse para reexportar el componente o exponer utilidades relacionadas.

Ejemplo de uso / flujo típico
1. Un `Page` (en `src/Pages/`) importa el componente desde `src/components/<feature>/Component.vue`.
2. El componente aplica sus estilos importando el archivo SCSS local o usando estilos scoped en el propio SFC.
3. Si es necesario, el componente se conecta al `store/` (Vuex) o usa helpers desde `helpers/` o `utils/`.

Tecnologías (extraídas del `package.json`)
- vue ^3
- typescript ~5.x
- vite ^6.x
- @vitejs/plugin-vue
- vuex ^4
- vue-router ^4
- sass (para compilación de SCSS)
- vue-tsc (type checking)

Scripts útiles
- Instalar dependencias

```bash
npm install
```

- Levantar servidor de desarrollo

```bash
npm run dev
```

- Compilar para producción

```bash
npm run build
```

- Previsualizar la build localmente

```bash
npm run preview
```

Notas para desarrollo y entrega (Ucompensar)
- Tipo de entrega recomendado: incluir el repositorio con instrucciones claras y un build (`npm run build`).
- Asegúrate de que el archivo `package.json` incluya versiones estables y que `README.md` contenga pasos para ejecutar localmente.
- Para documentación adicional o despliegue, puedes añadir un `netlify.toml` o configuración de GitHub Pages/Vercel dependiendo del host.

Sugerencias de próximas mejoras (opcionales)
- Migrar a Pinia si se busca una alternativa moderna a Vuex.
- Añadir tests unitarios (Jest / Vitest) y pruebas E2E (Cypress) para demostrar calidad.
- Añadir CI (GitHub Actions) para lint, typecheck y build automáticos.

Contacto / autor
- Proyecto realizado para la universidad Ucompensar.
- Mantener README actualizado con instrucciones de ejecución y datos del autor si se requiere entregar al profesor.


Fin del documento.
