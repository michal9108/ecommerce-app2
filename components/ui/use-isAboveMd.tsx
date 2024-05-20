import React, { useEffect, useState } from "react"

const useIsAboveMd = () => {
  const [isAboveMd, setIsAboveMd] = useState(false)

  const updateWindowSize = () => {
    setIsAboveMd(window.innerWidth >= 768)
  }

  useEffect(() => {
    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)

    return () => {
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [])

  return { isAboveMd }
}

export default useIsAboveMd
