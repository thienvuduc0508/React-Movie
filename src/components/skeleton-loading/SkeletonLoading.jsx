import React from 'react'

const SkeletonLoading = () => {
  return (
    <div>
        <div className="skeleton__item">
                <div className="carousel__item-poster skeleton"></div>
                <div className="carousel__item-block">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
    </div>
  )
}

export default SkeletonLoading