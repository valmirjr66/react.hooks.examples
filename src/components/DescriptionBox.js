const DescriptionBox = ({ text }) => {
  return (
    <div style={{
      backgroundColor: 'green',
      padding: 16,
      width: '50vw',
      border: '2px solid lightgreen',
      margin: 16,
      borderRadius: 10
    }}>
      {text}
    </div>
  )
}

export default DescriptionBox;