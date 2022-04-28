import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CarouselComp from '../Carousel'
import NewsItem from '../NewsItem'
import { useSelector, useDispatch } from 'react-redux'
import { newsInfo } from '../../reducers/news/actions'

export default function News () {
  const { news } = useSelector(state => state.newsPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsInfo())
  }, [dispatch])

  return (
    <Container className='w-75 flex-grow-1'>
      <CarouselComp />
      <h3 className='text-center my-3'>Новости</h3>
      {news?.map(elem => {
        return <NewsItem post={elem} key={elem.id} />
      })}
    </Container>
  )
}
