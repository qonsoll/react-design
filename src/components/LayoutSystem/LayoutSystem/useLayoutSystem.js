import { useContext } from 'react'
import LayoutSystemContext from './LayoutSystem.context'

const useLayoutSystem = () => useContext(LayoutSystemContext)

export default useLayoutSystem
