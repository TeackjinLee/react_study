import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewList';
import { useParams } from 'react-router-dom';

const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  //   const category = match.params.category || 'all';
  const { category } = useParams();
  const selectCategory = category || 'all';
  console.log(selectCategory);
  return (
    <>
      <Categories />
      <NewsList category={selectCategory} />
    </>
  );
};

export default NewsPage;
