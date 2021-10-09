import React from 'react'

function SortBar(props) {
  const { sortBy, setSortBy } = props
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value)
              }}
            >
              <option value="">請選擇</option>
              <option value="1">依價格排序-由低至高</option>
              <option value="2">依價格排序-由高至低</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortBar
