import React from 'react'
import Layout from './Layout'
import Aside from '../Aside'
import Header from '../Header'
import Footer from '../Footer'
// import Box from '../../Box'
// import Img from '../../Media/Img'
import Navigation from '../../Navigation'
import PageWrapper from '../../Wrappers/PageWrapper'
import Avatar from '../../Media/Avatar'
import {
  AppstoreOutlined,
  CalendarOutlined,
  CarOutlined,
  UserOutlined
} from '@ant-design/icons'

export default {
  title: 'Components/Layout system/Layout',
  component: Layout,
  argTypes: {
    header: {
      description: 'Use to insert Header component.'
    },
    asideLeft: {
      description: 'Use to insert Aside component at the left side.'
    },
    asideRight: {
      description: 'Use to insert Aside component at the right side.'
    },
    footer: {
      description: 'Use to insert Footer component.'
    },
    asideLeftOuter: {
      description: 'Use to place left Aside component outer.'
    },
    asideRightOuter: {
      description: 'Use to place right Aside component outer.'
    }
  }
}
// React.cloneElement(asideLeft, isAsideAsDrawer && { isAsideAsDrawer: 'left' })
export const Template = (args) => {
  return (
    <Layout
      header={<Header />}
      asideLeft={
        <Aside
          // isAsideCollapsed
          isAsideAsDrawer
        >
          <Navigation vertical dataSource={navConfig} />
        </Aside>
      }
      asideRight={
        <Aside
        // isAsideCollapsed
        // isAsideAsDrawer
        >
          <Navigation vertical dataSource={navConfig} />
        </Aside>
      }
      footer={<Footer />}
      asideLeftOuter
      // asideRightOuter
      isHeaderSticky
      isFooterSticky
    >
      <PageWrapper
        headingProps={{
          title: 'Dashboard',
          titleSize: 2,
          subTitle: 'Payment updates',
          textAlign: 'left'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis cursus. Lobortis scelerisque fermentum dui faucibus in
        ornare quam viverra. Pulvinar elementum integer enim neque volutpat.
        Eget mi proin sed libero enim sed. Non nisi est sit amet. Vel elit
        scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
        Risus sed vulputate odio ut enim. Egestas sed sed risus pretium. Rhoncus
        aenean vel elit scelerisque. Suspendisse potenti nullam ac tortor. Fusce
        id velit ut tortor pretium viverra suspendisse potenti nullam. Velit
        laoreet id donec ultrices tincidunt arcu non. Integer quis auctor elit
        sed vulputate mi sit. Aliquam faucibus purus in massa tempor nec feugiat
        nisl. Eros in cursus turpis massa tincidunt dui ut. Libero justo laoreet
        sit amet. Vitae tortor condimentum lacinia quis vel eros donec ac odio.
        Tellus molestie nunc non blandit massa enim. Aliquam sem et tortor
        consequat id. Porttitor leo a diam sollicitudin tempor id. Turpis cursus
        in hac habitasse platea dictumst. Id venenatis a condimentum vitae
        sapien pellentesque. Purus sit amet luctus venenatis lectus magna
        fringilla urna porttitor. Congue nisi vitae suscipit tellus. Lorem
        mollis aliquam ut porttitor leo a diam. Eget mauris pharetra et
        ultrices. Lacinia at quis risus sed vulputate odio. Mauris pharetra et
        ultrices neque ornare aenean euismod elementum. Rhoncus est pellentesque
        elit ullamcorper dignissim cras tincidunt. Nulla at volutpat diam ut.
        Dictum sit amet justo donec. Ornare lectus sit amet est placerat in
        egestas erat. Amet luctus venenatis lectus magna fringilla urna
        porttitor rhoncus dolor. Posuere sollicitudin aliquam ultrices sagittis
        orci a scelerisque. Ut lectus arcu bibendum at varius. Risus quis varius
        quam quisque id diam vel. In nulla posuere sollicitudin aliquam ultrices
        sagittis orci a scelerisque. Morbi non arcu risus quis varius quam
        quisque id diam. Pharetra pharetra massa massa ultricies. Lorem dolor
        sed viverra ipsum nunc aliquet bibendum. Commodo nulla facilisi nullam
        vehicula. Risus nec feugiat in fermentum posuere. Volutpat ac tincidunt
        vitae semper quis lectus nulla at volutpat. Nam at lectus urna duis
        convallis. Metus dictum at tempor commodo ullamcorper a. Nulla facilisi
        morbi tempus iaculis urna id. Turpis egestas pretium aenean pharetra
        magna ac placerat. Vitae nunc sed velit dignissim sodales ut eu sem
        integer. Dignissim diam quis enim lobortis scelerisque fermentum dui
        faucibus in. Nunc lobortis mattis aliquam faucibus. Risus ultricies
        tristique nulla aliquet enim tortor at. Fermentum iaculis eu non diam.
        Ipsum dolor sit amet consectetur adipiscing elit. Morbi tristique
        senectus et netus et. Volutpat diam ut venenatis tellus in metus
        vulputate eu scelerisque. Tincidunt id aliquet risus feugiat in ante.
        Nunc sed velit dignissim sodales ut eu sem integer vitae. Massa
        tincidunt dui ut ornare lectus sit amet est. Praesent semper feugiat
        nibh sed pulvinar proin gravida. Aenean pharetra magna ac placerat.
        Magnis dis parturient montes nascetur ridiculus mus mauris. Placerat
        vestibulum lectus mauris ultrices eros. Eu ultrices vitae auctor eu
        augue ut lectus arcu. Massa sed elementum tempus egestas sed.
        Sollicitudin tempor id eu nisl. Etiam dignissim diam quis enim lobortis
        scelerisque fermentum dui. Vitae nunc sed velit dignissim sodales ut.
        Habitant morbi tristique senectus et netus et malesuada fames ac. Eget
        egestas purus viverra accumsan in nisl nisi scelerisque eu. Tristique
        magna sit amet purus gravida quis blandit. Ridiculus mus mauris vitae
        ultricies leo. Sit amet nisl purus in mollis nunc sed id. Convallis
        convallis tellus id interdum. Venenatis urna cursus eget nunc
        scelerisque viverra mauris in. Consectetur libero id faucibus nisl
        tincidunt eget. Fames ac turpis egestas maecenas pharetra convallis
        posuere. Felis donec et odio pellentesque diam volutpat commodo sed
        egestas. Consequat ac felis donec et odio. Elementum tempus egestas sed
        sed. Pulvinar etiam non quam lacus suspendisse faucibus. Nec tincidunt
        praesent semper feugiat nibh. Non arcu risus quis varius quam quisque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis cursus. Lobortis scelerisque fermentum dui faucibus in
        ornare quam viverra. Pulvinar elementum integer enim neque volutpat.
        Eget mi proin sed libero enim sed. Non nisi est sit amet. Vel elit
        scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
        Risus sed vulputate odio ut enim. Egestas sed sed risus pretium. Rhoncus
        aenean vel elit scelerisque. Suspendisse potenti nullam ac tortor. Fusce
        id velit ut tortor pretium viverra suspendisse potenti nullam. Velit
        laoreet id donec ultrices tincidunt arcu non. Integer quis auctor elit
        sed vulputate mi sit. Aliquam faucibus purus in massa tempor nec feugiat
        nisl. Eros in cursus turpis massa tincidunt dui ut. Libero justo laoreet
        sit amet. Vitae tortor condimentum lacinia quis vel eros donec ac odio.
        Tellus molestie nunc non blandit massa enim. Aliquam sem et tortor
        consequat id. Porttitor leo a diam sollicitudin tempor id. Turpis cursus
        in hac habitasse platea dictumst. Id venenatis a condimentum vitae
        sapien pellentesque. Purus sit amet luctus venenatis lectus magna
        fringilla urna porttitor. Congue nisi vitae suscipit tellus. Lorem
        mollis aliquam ut porttitor leo a diam. Eget mauris pharetra et
        ultrices. Lacinia at quis risus sed vulputate odio. Mauris pharetra et
        ultrices neque ornare aenean euismod elementum. Rhoncus est pellentesque
        elit ullamcorper dignissim cras tincidunt. Nulla at volutpat diam ut.
        Dictum sit amet justo donec. Ornare lectus sit amet est placerat in
        egestas erat. Amet luctus venenatis lectus magna fringilla urna
        porttitor rhoncus dolor. Posuere sollicitudin aliquam ultrices sagittis
        orci a scelerisque. Ut lectus arcu bibendum at varius. Risus quis varius
        quam quisque id diam vel. In nulla posuere sollicitudin aliquam ultrices
        sagittis orci a scelerisque. Morbi non arcu risus quis varius quam
        quisque id diam. Pharetra pharetra massa massa ultricies. Lorem dolor
        sed viverra ipsum nunc aliquet bibendum. Commodo nulla facilisi nullam
        vehicula. Risus nec feugiat in fermentum posuere. Volutpat ac tincidunt
        vitae semper quis lectus nulla at volutpat. Nam at lectus urna duis
        convallis. Metus dictum at tempor commodo ullamcorper a. Nulla facilisi
        morbi tempus iaculis urna id. Turpis egestas pretium aenean pharetra
        magna ac placerat. Vitae nunc sed velit dignissim sodales ut eu sem
        integer. Dignissim diam quis enim lobortis scelerisque fermentum dui
        faucibus in. Nunc lobortis mattis aliquam faucibus. Risus ultricies
        tristique nulla aliquet enim tortor at. Fermentum iaculis eu non diam.
        Ipsum dolor sit amet consectetur adipiscing elit. Morbi tristique
        senectus et netus et. Volutpat diam ut venenatis tellus in metus
        vulputate eu scelerisque. Tincidunt id aliquet risus feugiat in ante.
        Nunc sed velit dignissim sodales ut eu sem integer vitae. Massa
        tincidunt dui ut ornare lectus sit amet est. Praesent semper feugiat
        nibh sed pulvinar proin gravida. Aenean pharetra magna ac placerat.
        Magnis dis parturient montes nascetur ridiculus mus mauris. Placerat
        vestibulum lectus mauris ultrices eros. Eu ultrices vitae auctor eu
        augue ut lectus arcu. Massa sed elementum tempus egestas sed.
        Sollicitudin tempor id eu nisl. Etiam dignissim diam quis enim lobortis
        scelerisque fermentum dui. Vitae nunc sed velit dignissim sodales ut.
        Habitant morbi tristique senectus et netus et malesuada fames ac. Eget
        egestas purus viverra accumsan in nisl nisi scelerisque eu. Tristique
        magna sit amet purus gravida quis blandit. Ridiculus mus mauris vitae
        ultricies leo. Sit amet nisl purus in mollis nunc sed id. Convallis
        convallis tellus id interdum. Venenatis urna cursus eget nunc
        scelerisque viverra mauris in. Consectetur libero id faucibus nisl
        tincidunt eget. Fames ac turpis egestas maecenas pharetra convallis
        posuere. Felis donec et odio pellentesque diam volutpat commodo sed
        egestas. Consequat ac felis donec et odio. Elementum tempus egestas sed
        sed. Pulvinar etiam non quam lacus suspendisse faucibus. Nec tincidunt
        praesent semper feugiat nibh. Non arcu risus quis varius quam quisque.
      </PageWrapper>
    </Layout>
  )
}

// const footerLayout = [
//   {
//     cw: 'auto',
//     component: (
//       <Img
//         src='https://worktube.ai/images/wt-logo-full-color.svg'
//         alt='Logo'
//         height={28}
//       />
//     ),
//     alignSelf: 'center'
//   },
//   { component: <Box width={24} height={24} bg='#000' /> },
//   { cw: '3', component: <Box width={24} height={24} bg='#fff' /> }
// ]

const navConfig = [
  {
    text: 'Dashboard',
    icon: <AppstoreOutlined />,
    spaceBetween: 24
    // subMenu: true,
    // subMenuPlacement: 'rightTop',
    // subMenuTrigger: 'click'
  },
  {
    text: 'Scheduler',
    icon: <CalendarOutlined />,
    spaceBetween: 24
  },
  {
    text: 'My cars',
    icon: <CarOutlined />,
    spaceBetween: 24
    // badgeLabel: 'NEW'
  },
  {
    icon: <Avatar size='large' icon={<UserOutlined />} />,
    text: 'Evgeniy Bogdanov',
    caption: 'bogdanov.jn@gmail.com',
    spaceBetween: 20
    // subMenu: true,
    // subMenuPlacement: 'rightBottom'
  }
]
