import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq' 
import Contact from './pages/help/Contact'
import NotFound  from './pages/NotFound'
import Blog, { blogLoader } from './pages/blogs/Blog'
// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import BlogLayout from './layouts/BlogLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path = "*" element={<NotFound/>}/>

      <Route path="blogs" element={<BlogLayout/>}>
        <Route 
          index 
          element={<Blog />} 
        />
      </Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App