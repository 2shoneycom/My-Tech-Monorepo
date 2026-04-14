declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@sean/header-type-b' {
  import React from 'react';
  const Header: React.FC;
  export default Header;
}