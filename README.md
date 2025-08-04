# 📝 To-Do Laravel Application

Una aplicación de tareas (To-Do) construida con Laravel, un framework PHP moderno y elegante. Este proyecto está diseñado para aprender Laravel desde cero.

## 🚀 Características

- **Autenticación completa**: Registro, login, logout y verificación de email
- **Gestión de tareas**: Crear, editar, eliminar y marcar tareas como completadas
- **Interfaz moderna**: Diseño responsive con componentes UI modernos
- **Base de datos SQLite**: Configuración simple para desarrollo
- **Frontend con React/TypeScript**: Interfaz de usuario moderna con Inertia.js

## 🛠️ Tecnologías Utilizadas

- **Backend**: Laravel 11 (PHP 8.4+)
- **Frontend**: React + TypeScript + Inertia.js
- **Base de datos**: SQLite (desarrollo)
- **Estilos**: Tailwind CSS + shadcn/ui
- **Build tool**: Vite
- **Autenticación**: Laravel Breeze

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **PHP 8.4** o superior
- **Composer** (gestor de dependencias de PHP)
- **Node.js 18** o superior
- **npm** o **yarn**
- **Git**

### Instalación de dependencias en macOS

```bash
# Instalar PHP con Homebrew
brew install php

# Instalar Composer
brew install composer

# Instalar Node.js
brew install node
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/FranckRomer/to-do-laravel.git
cd to-do-laravel
```

### 2. Instalar dependencias de PHP

```bash
composer install
```

### 3. Configurar el entorno

```bash
# Copiar el archivo de configuración
cp .env.example .env

# Generar la clave de aplicación
php artisan key:generate
```

### 4. Configurar la base de datos

```bash
# Crear el archivo de base de datos SQLite
touch database/database.sqlite

# Ejecutar las migraciones
php artisan migrate
```

### 5. Instalar dependencias de Node.js

```bash
npm install
```

### 6. Compilar los assets

```bash
npm run build
```

### 7. Iniciar el servidor

```bash
php artisan serve
```

La aplicación estará disponible en: `http://localhost:8000`

## 📁 Estructura del Proyecto

```
to-do-laravel/
├── app/                    # Lógica principal de la aplicación
│   ├── Http/              # Controladores, middleware, requests
│   ├── Models/            # Modelos de Eloquent ORM
│   └── Providers/         # Proveedores de servicios
├── config/                # Archivos de configuración
├── database/              # Migraciones, seeders, factories
├── public/                # Archivos públicos (CSS, JS, imágenes)
├── resources/             # Vistas, assets, idiomas
│   ├── js/               # Código JavaScript/TypeScript
│   └── views/            # Vistas Blade
├── routes/                # Definición de rutas
├── storage/               # Archivos generados por la aplicación
└── tests/                 # Pruebas automatizadas
```

## 🔧 Comandos Útiles de Artisan

Laravel incluye una herramienta de línea de comandos llamada Artisan. Aquí tienes los comandos más útiles:

```bash
# Ver todos los comandos disponibles
php artisan list

# Crear un nuevo controlador
php artisan make:controller TaskController

# Crear un nuevo modelo
php artisan make:model Task

# Crear una nueva migración
php artisan make:migration create_tasks_table

# Ejecutar migraciones
php artisan migrate

# Revertir la última migración
php artisan migrate:rollback

# Ejecutar seeders (datos de prueba)
php artisan db:seed

# Limpiar caché
php artisan cache:clear

# Ver las rutas registradas
php artisan route:list

# Iniciar el servidor de desarrollo
php artisan serve
```

## 🗄️ Base de Datos

### Migraciones

Las migraciones son archivos que definen la estructura de tu base de datos. Se encuentran en `database/migrations/`.

```bash
# Crear una nueva migración
php artisan make:migration create_tasks_table

# Ejecutar migraciones pendientes
php artisan migrate

# Revertir todas las migraciones
php artisan migrate:reset
```

### Seeders

Los seeders se usan para poblar la base de datos con datos de prueba:

```bash
# Crear un seeder
php artisan make:seeder TaskSeeder

# Ejecutar seeders
php artisan db:seed
```

## 🔐 Autenticación

Este proyecto usa Laravel Breeze para la autenticación, que incluye:

- Registro de usuarios
- Login/Logout
- Verificación de email
- Recuperación de contraseña
- Confirmación de contraseña

### Rutas de autenticación

- `/register` - Registro de usuarios
- `/login` - Inicio de sesión
- `/forgot-password` - Recuperar contraseña
- `/reset-password` - Restablecer contraseña
- `/verify-email` - Verificar email

## 🎨 Frontend

### Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para interfaces de usuario
- **TypeScript**: Superset de JavaScript con tipado estático
- **Inertia.js**: Conecta Laravel con React sin necesidad de API
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componentes de UI modernos

### Comandos útiles

```bash
# Instalar dependencias
npm install

# Compilar para desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en modo watch
npm run dev
```

## 🧪 Testing

Laravel incluye un framework de testing robusto:

```bash
# Ejecutar todas las pruebas
php artisan test

# Ejecutar pruebas específicas
php artisan test --filter=TaskTest

# Ejecutar pruebas con cobertura
php artisan test --coverage
```

## 📦 Despliegue

### Requisitos de producción

- PHP 8.4+
- Composer
- Node.js 18+
- Base de datos (MySQL, PostgreSQL, etc.)

### Pasos para producción

1. **Configurar variables de entorno**
   ```bash
   APP_ENV=production
   APP_DEBUG=false
   DB_CONNECTION=mysql  # o postgresql
   ```

2. **Optimizar la aplicación**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. **Compilar assets**
   ```bash
   npm run build
   ```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Recursos de Aprendizaje

### Laravel
- [Documentación oficial de Laravel](https://laravel.com/docs)
- [Laracasts](https://laracasts.com/) - Tutoriales en video
- [Laravel News](https://laravel-news.com/) - Noticias y artículos

### React + TypeScript
- [Documentación de React](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Inertia.js Documentation](https://inertiajs.com/)

### CSS y UI
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Franck Romer**
- GitHub: [@FranckRomer](https://github.com/FranckRomer)

## 🙏 Agradecimientos

- [Laravel Team](https://laravel.com/) por el increíble framework
- [Taylor Otwell](https://github.com/taylorotwell) por crear Laravel
- [Inertia.js Team](https://inertiajs.com/) por la integración frontend
- [shadcn](https://ui.shadcn.com/) por los componentes de UI

---

⭐ Si este proyecto te ayuda a aprender Laravel, ¡no olvides darle una estrella!
