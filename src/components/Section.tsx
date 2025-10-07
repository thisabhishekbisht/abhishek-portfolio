import { motion, useReducedMotion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  className?: string
  title?: string
  subtitle?: string
}>

export default function Section({ id, className, title, subtitle, children }: SectionProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      }

  return (
    <section id={id} className={`section ${className ?? ''}`.trim()}>
      <div className="container">
        {title && (
          <div style={{ marginBottom: '1.25rem' }}>
            <motion.h2
              className="section-title"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className="muted"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={variants}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}


