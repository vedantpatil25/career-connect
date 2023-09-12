import { Link, useLoaderData } from "react-router-dom"
import blogs from "../../data/Data"
export default function Blog() {
  const blogs = useLoaderData()

  return (
    <div className="faq">
        <h3>Job Openings</h3>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
      </div>
  )
}

