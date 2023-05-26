import MenuItem from './menuItem';

  const Header = () => {
    const menuData = [{ title: 'Inicio', path:''},
                      { title: 'Tienda', path:''},
                      { title: 'Marcas', path:''},
                      { title: 'Contacto', path:''},
                      { title: 'Preguntas Frecuentas', path:''},
                      { title: 'Blog', path:''}
                    ];
    return (
    <header className='headerGeneral'>
        <h1 style={{color:'white'}}>Este es el encabezado</h1>

        <nav className='subHeader'>
            <ul className="menu">
                {menuData.map((menuItem) => (
                    <MenuItem
                        key={menuItem.title}
                        title={menuItem.title}
                        path={menuItem.path}
                    />
                ))}
            </ul>
        </nav>
    </header>
    );
  }

export default Header;