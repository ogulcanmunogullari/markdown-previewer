import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Markdown from "marked-react"

export function MarkdownMD() {
  const [showedText, setShowedText] = useState("")
  const help = useSelector((state) => state.markdown.help)
  const helpText = useSelector((state) => state.markdown.helpText)
  const userText = useSelector((state) => state.markdown.userText)

  useEffect(() => {
    if (help) {
      setShowedText(helpText)
    } else {
      setShowedText(userText)
    }
  }, [userText, help, helpText])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "green",
        padding: "20px",
      }}>
      <Markdown value={showedText} />
    </div>
  )
}
