import React from 'react';

export default function Test() {
  const [focused, setFocused] = React.useState(false);
  const [isIntersecting, setIntersecting] = React.useState(false);
  const re = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (re.current) {
      re.current.onmouseenter = () => {
        console.log(8888888)
        setFocused(true);
      }
      re.current.onmouseleave = () => {
        console.log(777777)
        setFocused(false);
      }
    }
  }, [re])

  React.useEffect(() => {
    if (!re.current) return
    const isFixed = re.current.classList.contains('fix');
    const fix = focused && isIntersecting //&& !isFixed;
    if (fix) {
      re.current.classList.add('fix')
      console.log('fixing')
      // re.current.style.top = re.current.getBoundingClientRect().top + 'px'
    } else {
      // re.current.classList.remove('fix')
    }
    // console.log(entry.boundingClientRect.top)
  }, [focused])

  React.useEffect(() => {
    let options = {
      root: document,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const isFixed = entry.target.classList.contains('fix');
        console.log(entry.isIntersecting, isFixed, focused)
        if (entry.isIntersecting && !isFixed) {
          setIntersecting(true)
          console.log(999999)
          // entry.target.classList.add('fix')
          // // @ts-ignore
          // entry.target.style.top = entry.boundingClientRect.top + 'px'
          // console.log(entry.boundingClientRect.top)

          window.onscroll = (e) => {
            e.preventDefault()
            console.log(9090)
          }
        } else {
          setIntersecting(false)
          // entry.target.classList.remove('fix')
        }
      })
    }, options);
    // @ts-ignore
    observer.observe(re.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>

      <div ref={re} style={{
        height: '50vh',
        overflow: 'auto',
        scrollbarWidth: 'none'
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n, i) => (
          <div key={i} style={{
            padding: 10,
            backgroundColor: `${n % 2 === 0 ? 'darkgreen' : 'darkred'}`
          }}>num</div>
        ))}
      </div>

      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
      <h2 style={{ marginTop: 100 }}>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')