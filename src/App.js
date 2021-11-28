import React, { useState, useEffect } from 'react'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'
import './App.css'

import { data } from './data'

function App() {
  /*[{
     id: '1',
     picture: 'http://placehold.it/32x32',
     stock: 5,
     name: 'iPhone 12 Pro',
     price: 25000,
    tags: '蘋果,大螢幕',
   }]*/

  // 商品列表
  const [products, setProducts] = useState([])
  // 各項篩選的列表
  const [displayProducts, setDisplayProducts] = useState([])
  // 搜索框
  const [searchWord, setSearchWord] = useState('')
  // 排序框
  const [sortBy, setSortBy] = useState('')
  // 價格篩選
  const [priceRange, setPriceRange] = useState([])
  // 價格篩選條件
  const priceRangeTypes = ['所有', '1萬以下', '1~2萬', '2萬以上']
  // 標籤篩選
  const [tags, setTags] = useState([])
  // 標籤篩選條件
  const tagTypes = ['大螢幕', '一般螢幕', '小螢幕', '蘋果', '安卓']

  // 載入中動畫
  const [isLoading, setIsLoading] = useState(true)

  // 初始狀態
  useEffect(() => {
    // 開啟載入中
    setIsLoading(true)

    // 將商品資料設定到商品列表和篩選列表
    setProducts(data)
    setDisplayProducts(data)

    // 1秒後關閉載入中動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // 處理搜索框
  const handleSearch = (products, searchWord) => {
    let newProducts = []

    // 如果搜索框有內容
    if (searchWord) {
      // 迴圈返回包含搜索框內容的product
      newProducts = [...products].filter((v, i) => {
        return v.name.includes(searchWord)
      })
    } else {
      newProducts = [...products]
    }

    // 返回新的商品列表
    return newProducts
  }

  // 處理價格排序方式

  const handleSortBy = (products, sortBy) => {
    let newProducts = [...products]

    // value = 1 低至高
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => {
        return a.price - b.price
      })
    }

    // value = 2 高至低
    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => {
        return b.price - a.price
      })
    }

    // value = 空字串 並且商品列表內容數 > 0
    // id 低至高
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => {
        return a.id - b.id
      })
    }

    return newProducts
  }

  // 處理價格標籤

  const hanldePriceRange = (products, priceRange) => {
    let newProducts = [...products]

    switch (priceRange) {
      case '1萬以下':
        newProducts = [...newProducts].filter((v) => {
          return v.price <= 10000
        })
        break
      case '1~2萬':
        newProducts = [...newProducts].filter((v) => {
          return v.price >= 10001 && v.price <= 20000
        })
        break
      case '2萬以上':
        newProducts = [...newProducts].filter((v) => {
          return v.price > 20000
        })
        break
      default:
        break
    }
    return newProducts
  }

  // 處理標籤

  const hanldeTags = (products, tags) => {
    let newProducts = [...products]

    // 如果tags狀態有內容
    if (tags.length > 0) {
      // 迴圈商品列表頁
      newProducts = [...newProducts].filter((v) => {
        let isFound = false

        // split 將字串轉為陣列
        const newProductTags = v.tags.split(',')

        // 如果有商品的標籤包含tags裡的內容，就返回
        for (let i = 0; i < tags.length; i++) {
          if (newProductTags.includes(tags[i])) {
            return true
          }
        }
        return isFound
      })
    }

    return newProducts
  }

  // 更新狀態
  useEffect(() => {
    // 開啟載入中
    setIsLoading(true)
    //  設定空的新商品列表
    let newProducts = []

    // 搜索框
    // 只有第一個更新狀態的函式的第一個參數是原本的商品列表狀態，其餘都是新的商品列表狀態
    newProducts = handleSearch(products, searchWord)
    // 價格排序方式
    newProducts = handleSortBy(newProducts, sortBy)
    // 價格標籤
    newProducts = hanldePriceRange(newProducts, priceRange)
    // 標籤
    newProducts = hanldeTags(newProducts, tags)

    setDisplayProducts(newProducts)

    // 1秒後關閉載入中動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [products, searchWord, sortBy, priceRange, tags])

  // 載入動畫標籤
  const spinner = (
    <div class="spinner-grow text-primary mt-5 ml-5" role="status">
      <span class="sr-only"></span>
    </div>
  )

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      priceRangeTypes={priceRangeTypes}
                      tags={tags}
                      setTags={setTags}
                      tagTypes={tagTypes}
                    />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />
                    {isLoading ? (
                      spinner
                    ) : (
                      <ProductList displayProducts={displayProducts} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
