import React from 'react'

function TagCheckbox(props) {
  const { value, tags, setTags } = props

  const hanldeCheck = (e) => {
    const value = e.target.value

    let newTags = []

    if (tags.includes(value)) {
      newTags = tags.filter((v, i) => {
        return v !== value
      })
    }

    if (!tags.includes(value)) {
      newTags = [...tags, value]
    }

    setTags(newTags)
  }
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            checked={tags.includes(value)}
            onChange={hanldeCheck}
          />
          {value}
        </label>
      </div>
    </>
  )
}

export default TagCheckbox
