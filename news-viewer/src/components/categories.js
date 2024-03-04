import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 14.6.1 카테고리 선택 UI 만들기
const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

//카테고리 NavLink
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  /* 카테고리가 active일 경우 적용될 클래스: active */
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;
function Categories() {
  return (
    //카테고리 wrap
    <CategoriesBlock>
      {/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
      {categories.map((c) => (
        //key에는 고유한 이름이 들어가도록 c.name을 쓴다
        <Category
          key={c.name}
          //active 상태면 active 클래스를, 아니면 그없
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          //NavLink의 주소!
          //'all'이면 기본페이지로 그 외의 카테고리면 '/카테고리이름'
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
