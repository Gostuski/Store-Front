import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Posts from './components/Posts';
import MyPosts from './components/MyPosts';
import PostCreate from './components/CreatePost';
const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    meta: {
      requires_auth: false
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    meta: {
      requires_auth: false
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: {
      requires_auth: true
    }
  },
  {
    path: '/myposts',
    name: 'myposts',
    component: MyPosts,
    meta: {
      requires_auth: true
    }
  },
  {
    path: '/postCreate',
    name: 'postCreate',
    component: PostCreate,
    meta: {
      requires_auth: true
    }
  }
];
export default routes;
