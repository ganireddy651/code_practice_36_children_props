import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <div className="card-container">
            <div>
              <div className="container">
                <AiFillCheckCircle className="icon" />
                <h1 className="heading">Success</h1>
              </div>
              <p className="para">You can access all the files in the folder</p>
            </div>
            <GrFormClose />
          </div>
          <div className="card-container">
            <div>
              <div className="container">
                <RiErrorWarningFill className="icon" />
                <h1 className="heading">Error</h1>
              </div>
              <p className="para">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
            <GrFormClose />
          </div>
          <div className="card-container">
            <div>
              <div className="container">
                <MdWarning className="icon" />
                <h1 className="heading">Warning</h1>
              </div>
              <p className="para">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
            <GrFormClose />
          </div>
          <div className="card-container">
            <div>
              <div className="container">
                <MdInfo className="icon" />
                <h1 className="heading">Info</h1>
              </div>
              <p className="para">
                Anyone on the internet can view these files
              </p>
            </div>
            <GrFormClose />
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
