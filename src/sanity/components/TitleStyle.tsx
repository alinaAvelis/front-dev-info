import {ReactNode} from "react";

const TitleStyle = ({children}: {children: ReactNode}) => (
  <span style={{fontFamily: 'Garamond', fontSize: '2em'}}>{children} </span>
)

export default TitleStyle