import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPagination } from '../../redux/actions'
import './Pagination.css'

const Pagination = () => {
  const dispatch = useDispatch()
  const pagination = useSelector(state => state.pagination)
  return (
    <div className='pagination'>
        <button className="pagination__btn" onClick={() => dispatch(getPagination(pagination, 'before'))}><i class="fa-solid fa-chevron-left"></i><span>Prev page</span></button>
        <button className="pagination__btn" onClick={() => dispatch(getPagination(pagination, 'after'))}><span>Next page</span><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

export default Pagination