
import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationControls from './PaginationControls';
import CategorySelect from './CategorySelect';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { fetchProducts, setCategory, selectProduct, setPage } from '../store/productSlice';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const { products, totalPages, currentPage, CATEGORY, selectedProduct, status } = useSelector((state) => state.products);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); 

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, category: CATEGORY }));
  }, [dispatch, currentPage, CATEGORY]);

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
    handleCloseCategory();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const showDetails = (product) => {
    dispatch(selectProduct(product));
    setIsDetailsOpen(true); 
  };
  const closeProductDetails = () => {
    setIsDetailsOpen(false); 
  };

  const handleOpenModal = () => {
    setIsCategoryOpen(true); 
  };

  const handleCloseCategory = () => {
    setIsCategoryOpen(false); 
  };

  return (
    <div>
      <button className='selectBtn' onClick={handleOpenModal}>
        Select Photo Type
      </button>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
      <CategorySelect isOpen={isCategoryOpen} onClose={handleCloseCategory} CATEGORY={CATEGORY} handleCategoryChange={handleCategoryChange} />

      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <ProductList products={products} showDetails={showDetails} />}
      {status === 'failed' && <p>Error loading products.</p>}

      <ProductDetails isOpen={isDetailsOpen} onClose={closeProductDetails} product={selectedProduct} />

    </div>
  );
};

export default PaginationComponent;