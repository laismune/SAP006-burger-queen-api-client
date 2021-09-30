     
import { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { MenuModal } from '../../../components/Modal/Modal';

import { products } from '../../../data/products';

import './Menu.scss';

export const Menu = () => { 
  const history = useHistory();
  const [showAll, setShowAll] = useState(true);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const [modalData, setModalData] = useState({});
  const [showIngredients, setShowIngredients] = useState(false);
  

  const filterMenuButtons = (productProp, value) => {
    const filteredMenu = products.filter((product) => product[productProp] === value);
    return filteredMenu;
  }

  const importMenuImages = (files) => {
    let importedImages = {};
    files.keys().map(imgPath => importedImages[imgPath.replace('./', '').replace('.png', '')] = files(imgPath));
    return importedImages;  
  } 
  const importedImages = importMenuImages(require.context('../../../assets/images-menu', false, /\.(png)$/));
  products.map(produt => produt.importedImg = importedImages[produt.name].default);


  return (
    <div className='product-card-div'>
      <header>
        <NavbarRoom/>
      </header>
      <main className='menu-filter menu-main'> 
        <section className='filter-buttons-div'>
          <Button 
            ButtonClass='menu-go-back' 
            ButtonOnClick={()=>history.push('/room')}
          />
          <Button 
            ButtonClass='menu-filter menu-all' 
            children='Alles'
            ButtonOnClick={() =>[
              setShowAll(true)
            ]}
          />
          <Button 
            ButtonClass='menu-filter menu-petit-dej' 
            children='Morgen'
            ButtonOnClick={() =>[setShowAll(false), setFilteredMenu(filterMenuButtons('menu', 'cafe-da-manha'))]}
          />
          <Button 
            ButtonClass='menu-filter menu-pour-la-journee' 
            children='Dag'
            ButtonOnClick={() =>[setShowAll(false), setFilteredMenu(filterMenuButtons('menu', 'dia'))]}
          />
          <Button 
            ButtonClass='menu-filter menu-to-drink' 
            children='Eten'
            ButtonOnClick={() =>[setShowAll(false), setFilteredMenu(filterMenuButtons('setor', 'comida'))]}
          />
          <Button 
            ButtonClass='menu-filter menu-to-eat' 
            children='Drankje'
            ButtonOnClick={() =>[setShowAll(false), setFilteredMenu(filterMenuButtons('setor', 'bebida'))]}
          />
        </section>
        <section className='menu-cards-section'>
          {showAll 
          ? products.map((product) => 
            <ProductCard 
              products={product}
              ButtonOnClick={(event)=> [
                setModalData(products.filter(product => product.id === event.target.id)),
                setShowIngredients(true)]}
            />
          )
          : filteredMenu.map((product) => 
          <ProductCard 
            products={product}
            ButtonOnClick={(event)=> [
              setModalData(products.filter(product => product.id === event.target.id)),
              setShowIngredients(true)]}
          />
        )}
        </section>
      </main>
      <section>
      {showIngredients && 
        <MenuModal 
          ModalTitle = {modalData[0].title}
          ModalContent= {modalData[0].ingredientes}
          ButtonOnClick={() => {
            setShowIngredients(false)
            document.body.style.overflow = "scroll";
          }}
        />
      }
      </section>
    </div>
    )
  }








    


