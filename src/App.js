import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';

const Axiosgetpost = lazy(() => import('./AxiosGetPostPatchDelete'))
const Axiosget = lazy(() => import('./AxiosGet'));
const AxiosPost = lazy(() => import('./axiosPost'));
const AxiosPatchPut = lazy(() => import('./axiosPatch'));
const AxiosDelete = lazy(() => import('./AxiosDelete'));
const AxiosAsyncAwait = lazy(()=>import ('./axiosAsyncAwait'));
const AxiosInstance = lazy(()=>import('./axiosInstances'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div> Loading ............ </div>} >
          <AxiosInstance/>
          {

            //<AxiosAsyncAwait/>
            //<AxiosDelete />
            //<AxiosPatchPut/>
            //<AxiosPost />
            //<Axiosget/>
            //<Axiosgetpost />

          }

        </Suspense>
      </header>
    </div>
  );
}

export default App;
