import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import { Row, Col, Button } from 'reactstrap'

import AgentAbout from './AgentAbout'

import '@styles/react/pages/page-profile.scss'

const SheetResources = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/api/resources/agent', { id: 21 }).then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      {data !== null ? (
        <div id='user-profile'>
          <Row>
            <Col sm='8'>
              <AgentAbout selectedUser={data.user} />
            </Col>
	          <Col sm='4'>

	          </Col>
          </Row>


          <section id='profile-info'>

          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default SheetResources

// <Row>
//   <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
// 	<ProfileAbout data={data.userAbout} />
// 	<ProfileSuggestedPages data={data.suggestedPages} />
// 	<ProfileTwitterFeeds data={data.twitterFeeds} />
//   </Col>
//   <Col lg={{ size: 6, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
// 	<ProfilePosts data={data.post} />
//   </Col>
//   <Col lg={{ size: 3, order: 3 }} sm={{ size: 12 }} xs={{ order: 3 }}>
// 	<ProfileLatestPhotos data={data.latestPhotos} />
// 	<ProfileFriendsSuggestions data={data.suggestions} />
// 	<ProfilePoll data={data.polls} />
//   </Col>
// </Row>
// <Row>
//   <Col className='text-center' sm='12'>
// 	<Button color='primary' className='border-0 mb-1 profile-load-more' size='sm' onClick={handleBlock}>
// 	  <UILoader blocking={block} overlayColor='rgba(255,255,255, .5)'>
// 		<span> Load More</span>
// 	  </UILoader>
// 	</Button>
//   </Col>
// </Row>
