import { Audio, RotatingLines } from 'react-loader-spinner'

export default function Loader() {
//     return (
// <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />
// )
      return(<RotatingLines
  visible={true}
  height="30"
  width="30"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)
}

