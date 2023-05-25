import {
  FaGoogle,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'
import HeaderContextContainer from '../../context/HeaderContextContainer'
import './index.css'

const FooterContainer = () => (
  <HeaderContextContainer.Consumer>
    {value => {
      const {isDarkTheme} = value

      const footerDarkText = isDarkTheme ? 'footer-dark-text' : ''

      return (
        <div className="footer-container">
          <div className="icons-container">
            <a href="mailto:gkirang4@gmail.com" className="footer-icon-button">
              <FaGoogle className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/gottumukkalakiran/"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaLinkedin className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://github.com/gottumukkalakiran"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaGithub className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://www.twitter.com"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaTwitter className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://www.instagram.com/kiran_gottumukkala/"
              target="__blank"
              rel="noopener noreferrer"
              type="button"
              className="footer-icon-button"
            >
              <FaInstagram className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://www.youtube.com/@kirangottumukkala/featured"
              target="__blank"
              rel="noopener noreferrer"
              type="button"
              className="footer-icon-button"
            >
              <FaYoutube className={`footer-icon ${footerDarkText}`} />
            </a>
          </div>
          <p className={`contact-us-text ${footerDarkText}`}>Contact us</p>
        </div>
      )
    }}
  </HeaderContextContainer.Consumer>
)

export default FooterContainer
