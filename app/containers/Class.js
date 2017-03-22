import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Class  = ({ classData, displayClass }) => {
  if (typeof displayClass == 'string') {
    return <span>{displayClass}</span>
  } else {
    console.log('display class', displayClass)
    for (let type in displayClass) {
      console.log('display class', displayClass[type])
      console.log(type)
      switch(type) {
        case 'ObjectIntersectionOf':
          console.log('yyyyeeeaaahhs')
          return <span>{displayClass[type][0]}</span>
        default:
          console.log('the wrong thingy')
          return <span>COMPOUND_CONCEPT</span>
      }
    }
  }
}

Class.propTypes = {
  classData: PropTypes.object.isRequired
}

const mapStateToProps = ({classData}) => ({
  classData
})

export default connect(
  mapStateToProps
  // TODO:: create this action for advanced interaction
  // { classClicked }
)(Class)
