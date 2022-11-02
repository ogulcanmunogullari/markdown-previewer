import { MarkdownMD } from "./features/markdown/Markdown"
import UserTextArea from "./features/userTextArea/UserTextArea"
import { needHelp } from "../src/features/markdown/markdownSlice"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const help = useSelector((state) => state.markdown.help)
  return (
    <div
      style={{
        height: "100vh",
        width: "90%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}>
      <nav
        style={{
          height: "10em",
          alignItems: "center",
        }}>
        <ul
          style={{
            padding: 0,
            margin: 0,
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            background: "red",
          }}>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <a
              href="https://github.com/ogulcanmunogullari"
              target="_blank"
              style={{ padding: "50px 50px", background: "yellow" }}>
              Github
            </a>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <a
              href="http://ogulcanmunogullari.netlify.app/"
              target="_blank"
              style={{ padding: "50px 50px", background: "yellow" }}>
              Portfolio
            </a>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <a
              href="#"
              style={{ padding: "50px 50px", background: "yellow" }}
              onClick={() => dispatch(needHelp())}>
              Hint
            </a>
          </li>
        </ul>
      </nav>
      <h2 style={{ textAlign: "center" }}>
        {help ? "Hint is open" : "Hint is disable"}
      </h2>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}>
        <div style={{ width: "50%" }}>
          <UserTextArea />
        </div>
        <div style={{ width: "50%" }}>
          <MarkdownMD />
        </div>
      </div>
    </div>
  )
}

export default App
