import React from 'react'
import LinkInside from '../LinkInside/LinkInside'

const NavigationInside = () => {
  return (
    <aside>
      <nav>
        <LinkInside path="/dashboard/shirts">Roupas</LinkInside>
        <LinkInside path="/dashboard/categories">Categorias</LinkInside>
        <LinkInside path="/dashboard/brands">Marcas</LinkInside>
        <LinkInside path="/dashboard/galleries">Galerias</LinkInside>
      </nav>
    </aside>
  )
}

export default NavigationInside
