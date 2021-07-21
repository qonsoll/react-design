import React from 'react'
import PropTypes from 'prop-types'
import BaseLayout from '../BaseLayout'
import DirectionLayout from '../DirectionLayout'
import CompositionLayout from '../CompositionLayout'

const Layout = (props) => {
  const {
    children,
    header,
    asideLeft,
    asideRight,
    footer,
    asideLeftOuter,
    asideRightOuter
  } = props

  const isOuterLayoutExists = asideLeftOuter || asideRightOuter

  return (
    <>
      <BaseLayout direction={isOuterLayoutExists ? 'row' : 'column'}>
        {isOuterLayoutExists ? (
          <>
            {asideLeftOuter && asideLeft}
            <DirectionLayout direction='column'>
              <CompositionLayout
                header={header}
                asideLeft={asideLeft}
                asideRight={asideRight}
                footer={footer}
                asideLeftOuter={asideLeftOuter}
                asideRightOuter={asideRightOuter}
              >
                {children}
              </CompositionLayout>
            </DirectionLayout>
            {asideRightOuter && asideRight}
          </>
        ) : (
          <CompositionLayout
            header={header}
            asideLeft={asideLeft}
            asideRight={asideRight}
            footer={footer}
            asideLeftOuter={asideLeftOuter}
            asideRightOuter={asideRightOuter}
          >
            {children}
          </CompositionLayout>
        )}
      </BaseLayout>
    </>
  )
}

Layout.propTypes = {
  header: PropTypes.node,
  asideLeft: PropTypes.node,
  asideRight: PropTypes.node,
  footer: PropTypes.node,
  asideLeftOuter: PropTypes.bool,
  asideRightOuter: PropTypes.bool
}

export default Layout
