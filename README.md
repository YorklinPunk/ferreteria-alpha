# Push y/o pull cambios

Comandos para subir cambios y/o actualizar cambios

## 1ra recomendación
Antes de hacer push obligatorio hacer un pull.

### `1er Paso`
En el terminal del VSc( Ctrl +ñ), te ubicas en la ruta del proyecto con 'cd'

### `2do Paso`
Verifica el estado de tu repositorio ejecutando el comando \
git status\
Esto te mostrará los cambios realizados en tu proyecto.

### `3er Paso`
Agrega los cambios al área de preparación (staging) ejecutando el comando\
git add .\
Esto agregará todos los archivos modificados y nuevos al área de preparación.

### `4to Paso`
Realiza una confirmación (commit) de los cambios ejecutando el comando \
git commit -m "primmer commit"

### `5to Paso`
Conecta tu repositorio remoto ejecutando el comando \
git remote add origin https://github.com/YorklinPunk/ferreteria-alpha.git \
Esto establece la conexión entre tu repositorio local y el repositorio remoto en GitHub.

### `6o Paso`
Sube tus cambios al repositorio remoto ejecutando el comando \
git push origin master


##Para levantar el proyecto
### `npm start` p `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##Paquetes instalados

├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── bootstrap@5.2.3
├── react-bootstrap@2.7.4
├── react-dom@18.2.0
├── react-responsive-carousel@3.2.23
├── react-router-dom@6.11.2
├── react-scripts@5.0.1
├── react-slick@0.29.0
├── react@18.2.0
└── web-vitals@2.1.4


The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
