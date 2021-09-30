import React from "react"

const SearchFom = ({name, actionHandler, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input required name={name} onChange={actionHandler} type="text" />
            <button>Add</button>
        </form>
    )
}

export default SearchFom