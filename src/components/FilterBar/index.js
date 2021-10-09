import React from 'react'
import PriceRangeRadio from './PriceRangeRadio'
import TagCheckbox from './TagCheckbox'

function FilterBar(props) {
  const {
    priceRange,
    setPriceRange,
    priceRangeTypes,
    tags,
    setTags,
    tagTypes,
  } = props

  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <hr />

      <h4>價格</h4>
      {priceRangeTypes.map((v, i) => {
        return (
          <PriceRangeRadio
            value={v}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        )
      })}
      <hr />

      <h4>
        標籤
        <button
          className="btn btn-link btn-sm"
          onClick={() => {
            setTags('')
          }}
        >
          重設
        </button>
      </h4>
      {tagTypes.map((v, i) => {
        return <TagCheckbox value={v} tags={tags} setTags={setTags} />
      })}

      <p>有包含勾選標籤均會顯示</p>

      <div className="padding"></div>
    </>
  )
}

export default FilterBar
