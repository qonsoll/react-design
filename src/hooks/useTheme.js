import { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'

const useTheme = (props) => {
  const context = useContext(ThemeContext)
  return context
}

export default useTheme
