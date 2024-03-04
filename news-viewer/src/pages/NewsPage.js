import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';
// 14.7.2 NewsPage 생성
const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  console.log(category);

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
