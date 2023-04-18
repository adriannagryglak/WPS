import React from "react"
import { Link } from "gatsby"
import "./intro.scss"
import { useSpring, useInView, animated } from "react-spring"

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
}

export default function Intro() {
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()

  return (
    <section className="intro">
      <animated.div
        style={{
          opacity: inView2 ? 1 : 0,
          transition: "1s ease",
        }}
      >
        <p ref={ref2} className="container">
          tanie i niezawodne usługi telekomunikacyjne i teletransmisyjne z
          wieloletnim doświadczeniem
        </p>
        <Link to="/o-nas">wiecej o nas</Link>
      </animated.div>

      <div className="intro-data container" ref={ref}>
        <div className="intro-data__item ">
          <div className="number">
            {inView && <Number n={500} />}
            <span className="caption">klientów</span>
          </div>
        </div>
        <div className="intro-data__item">
          <div className="number">
            {inView && <Number n={24} />}
            <span className="number__unit">h</span>
            <span className="caption">serwis</span>
          </div>
        </div>
        <div className="intro-data__item">
          <div className="number">
            {inView && <Number n={740} />}
            <span className="number__unit">tys.</span>
            <span className="caption">minut</span>
          </div>
        </div>
        <div className="intro-data__item">
          <div className="number">
            {inView && <Number n={13786} />}
            <span className="caption">numerów</span>
          </div>
        </div>
        <div className="intro-data__item">
          <div className="number">
            {inView && <Number n={500} />}
            <span className="number__unit">tys.</span>
            <span className="caption double">
              połączeń <br />
              miesięcznie
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
