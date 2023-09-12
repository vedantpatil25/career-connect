import { Outlet } from "react-router-dom"

export default function BlogLayout() {
  return (
    <div className="careers-layout">
      <h2>Jobs</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      <Outlet />
    </div>
  )
}