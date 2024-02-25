import './page-btn.css'

function PageBtn({text, onBtnClick}) {
  return (
    <button onClick={onBtnClick}>
      {text}
    </button>
  )
}

export default PageBtn