import React, { useCallback, useEffect, useState } from "react"

import { PUB_TOPIC } from "../publish"
import PubSub from "pubsub-js"

const Child = () => {
  const [pubsubstate, setPubsubstate] = useState(0)

  const handleSubscriber = useCallback((msg, data) => {
    setPubsubstate(data)
  }, [])

  useEffect(() => {
    PubSub.subscribe(PUB_TOPIC, handleSubscriber)
  }, [handleSubscriber])

  return (
    <div>
      <h1 style={{ color: "white" }}>{pubsubstate}</h1>
    </div>
  )
}

export default Child
