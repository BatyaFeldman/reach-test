import logo from './logo.svg';
import './App.css';
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

function App() {
  return (
    <div className='App'>
      <Menu>
        <MenuButton id='1234'>Button</MenuButton>
        <MenuList className='slide-down'>
          <MenuItem onSelect={() => console.log('download')}>Download</MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onSelect={() => console.log('draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => console.log('delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Menu>
        <MenuButton id='1238'>Button</MenuButton>
        <MenuList className='slide-down'>
          <MenuItem onSelect={() => console.log('download')}>Download</MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onSelect={() => console.log('draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => console.log('delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton id='1237'>Button</MenuButton>
        <MenuList className='slide-down'>
          <MenuItem onSelect={() => console.log('download')}>Download</MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onSelect={() => console.log('draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => console.log('delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton id='1236'>Button</MenuButton>
        <MenuList className='slide-down'>
          <MenuItem onSelect={() => console.log('download')}>Download</MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onSelect={() => console.log('draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => console.log('delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton id='1235'>Button</MenuButton>
        <MenuList className='slide-down'>
          <MenuItem onSelect={() => console.log('download')}>Download</MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onSelect={() => console.log('draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => console.log('delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default App;
