import './Footer.css'

function Footer() {
  return (
    <footer>
   <div className="footer-left">
  <div className="footer-col">
    <p>HOME</p>
    <p>ABOUT</p>
  </div>
  <div className="footer-col">
    <p>CONTACT</p>
    <p>CATALOG</p>
  </div>
</div>
      <div className = "footer-mid">
        <h1>ELLIS ART & TATTOO</h1>
        {/* img instagram,facebook logo */}
      </div>
      <div className="footer-right">
        <p>PRIVACY POLICY</p>
        <p>COOKIE POLICY</p>
      </div>
    </footer>
  )
}

export default Footer