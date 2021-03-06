import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import NavigationBar from './NavigationBar';
import { memo } from 'react';
import { FE_DOMAIN } from '../assets/urlConstants';

const CategoryPage = lazy(() => import('./CategoryPage'));
const AddNewPostPage = lazy(() => import('./AddNewPostPage'));
const Post = lazy(() => import('./Post'));
// const ErrorPage = lazy(() => import('./ErrorPage'));
const LoginPage = lazy(() => import('./LoginPage'));
const Homepage = lazy(() => import('./Homepage'));

const Routes = () => {
  const categories = useSelector((state) => state.categories);
  const posts = useSelector((state) => state.posts);
  // const errors = useSelector(state => state.errors);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="mt-16 text-sm font-bold text-center animate-pulse">
            LOADING...
          </div>
        }
      >
        <NavigationBar />

        <Switch>
          <Route exact path={`${FE_DOMAIN}/login`} component={LoginPage}>
            {isLogin && <Redirect to={`${FE_DOMAIN}`} />}
          </Route>
          <Route exact path={`${FE_DOMAIN}/`} component={Homepage} />
          <Route
            exact
            path={`${FE_DOMAIN}/create-post`}
            component={AddNewPostPage}
          />
          {categories.map((category) => (
            <Route
              key={category._id}
              exact
              path={`${FE_DOMAIN}/${category.title}`}
            >
              <CategoryPage category={category.title} />
            </Route>
          ))}
          {posts.map((post) => (
            <Route
              key={post._id}
              exact
              path={`${FE_DOMAIN}/${post.category}/${post._id}`}
            >
              <Post post={post} />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default memo(Routes);
