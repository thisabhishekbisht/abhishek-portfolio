import { FaJava, FaAndroid, FaReact } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import type { Skill } from '../types'

export const skills: Skill[] = [
    { icon: <FaJava size={28} />, name: 'Java', level: 'Advanced' },
    { icon: <FaAndroid size={28} />, name: 'Android', level: 'Advanced' },
    { icon: <SiFlutter size={28} />, name: 'Flutter', level: 'Intermediate' },
    { icon: <FaReact size={28} />, name: 'React', level: 'Intermediate' }
]
