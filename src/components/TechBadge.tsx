import { motion } from 'framer-motion'

interface TechBadgeProps {
    name: string
    index?: number
}

export default function TechBadge({ name, index = 0 }: TechBadgeProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{
                delay: index * 0.05,
                duration: 0.2
            }}
            style={{
                fontSize: '0.75rem',
                padding: '0.375rem 0.75rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'var(--color-text)',
                fontWeight: '500',
                cursor: 'default'
            }}
        >
            {name}
        </motion.span>
    )
}
