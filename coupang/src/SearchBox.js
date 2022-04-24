import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <div>
          <select name="category">
            <option value="all">전체</option>
            <option value="c1">여성패션</option>
            <option value="c2">남성패션</option>
            <option value="c3">남녀 공용 의류</option>
            <option value="c4">유아동패션</option>
            <option value="c5">뷰티</option>
            <option value="c6">출산/유아동</option>
            <option value="c7">식품</option>
            <option value="c8">주방용품</option>
            <option value="c9">생활용품</option>
            <option value="c10">홈인테리어</option>
            <option value="c11">가전디지털</option>
            <option value="c12">스포츠/레저</option>
            <option value="c13">자동차용품</option>
            <option value="c14">도서/음반/DVD</option>
            <option value="c15">완구/취미</option>
            <option value="c16">문구/오피스</option>
            <option value="c17">반려동물용품</option>
            <option value="c18">헬스/건강식품</option>
            <option value="c19">국내여행</option>
            <option value="c20">해외여행</option>
            <option value="c21">로켓설치</option>
            <option value="c22">공간별 집꾸미기</option>
            <option value="c23">헬스케어 전문관</option>
            <option value="c24">쿠팡 Only</option>
            <option value="c25">싱글라이프</option>
            <option value="c26">악기전문관</option>
            <option value="c27">결혼준비</option>
            <option value="c28">아트/공예</option>
            <option value="c29">홈카페</option>
            <option value="c30">실버스토어</option>
          </select>
          <div>
            <input
              id="keyword"
              type="text"
              placeholder="찾고 싶은 상품을 검색해보세요!"
            ></input>
            <a href="#">검색</a>
          </div>
        </div>
      </div>
    );
  }
}
