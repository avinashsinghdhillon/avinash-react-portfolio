// import { useState } from 'react'
const ResponsiveLayout = () => {
  const width = window.innerWidth;
  // TODO: add the event eventListeners and useContext to apply reponsiveness
  // const [width, setWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   const handleResize = () => {
  //   setWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => { window.removeEventListener('resize', handleResize) }
  // }, [])
  return (width > 1200 ? '65%' : '100%');
}
export default ResponsiveLayout;