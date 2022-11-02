import React, { useEffect, useState } from "react"
import { changeUserText } from "../markdown/markdownSlice"
import { useDispatch, useSelector } from "react-redux"

function UserTextArea() {
  const [text, setText] = useState("")
  const help = useSelector((state) => state.markdown.help)
  const helpText = useSelector((state) => state.markdown.helpText)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeUserText(text))
  }, [text])

  useEffect(() => {
    if (help) {
      setText(helpText)
    } else {
      setText("")
    }
  }, [help])

  return (
    <div style={{ height: "100%" }}>
      <textarea
        disabled={help}
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          margin: "0px",
          padding: "20px",
          resize: "none",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}

export default UserTextArea
