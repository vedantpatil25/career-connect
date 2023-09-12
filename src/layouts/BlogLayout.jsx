import { Outlet } from "react-router-dom"

export default function BlogLayout() {
  return (
    <div className="careers-layout">
      <h2>Job Openings</h2>
      <br />
      <Outlet />
    </div>
  )
}