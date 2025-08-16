function Schedule() {
  return (
    <div className="schedule">
      <div className="title">
        <a href="https://www.facebook.com/jhinbangcoyo" target="_blank" rel="noreferrer">
          <img src="logo/profile.png" alt="Profile"/>
        </a>
        <h4>Bangcoyo, Kiryll Dave U.</h4>
        <img src="video/itachi.gif" alt="Itachi"/>
        <h1>CLASS SCHEDULE</h1>
        <div className="evsu">
          <img src="logo/logo.jpg" alt="EVSU Logo"/>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <th className="subjects">📖 Subjects Enrolled for AY : 2025-2026, Sem : 1</th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status3"></th>
          </tr>
          <tr>
            <th className="status">
              Enrollment Status: <span className="enrolled">✅ Officially Enrolled</span>
            </th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status3"></th>
          </tr>

          <tr>
            <th>Subjcode</th>
            <th>Section</th>
            <th>Description</th>
            <th>Days</th>
            <th>Time</th>
            <th>Room</th>
            <th>Professor</th>
          </tr>

          <tr className="klase">
            <td>IT 373</td>
            <td>3B</td>
            <td>Web Systems and Technology 2</td>
            <td>Monday</td>
            <td>10:00AM - 12:00NN</td>
            <td>IT Room 4</td>
            <td>MIRO, POL A.</td>
          </tr>

          <tr className="klase">
            <td></td>
            <td></td>
            <td>-- Lab schedule --</td>
            <td>Monday</td>
            <td>1:00PM - 4:00PM</td>
            <td>IT Room 2</td>
            <td>MIRO, POL A.</td>
          </tr>

          <tr className="klase">
            <td>CCNA 313</td>
            <td>3B</td>
            <td>Scaling Networks</td>
            <td>Tuesday</td>
            <td>1:00PM - 3:00PM</td>
            <td>IT Room 4</td>
            <td>BERTULFO, EDWARD B.</td>
          </tr>

          <tr className="klase">
            <td></td>
            <td></td>
            <td>-- Lab schedule --</td>
            <td>Tuesday</td>
            <td>9:00AM - 12:00NN</td>
            <td>IT Room 1</td>
            <td>BERTULFO, EDWARD B.</td>
          </tr>

          <tr className="klase">
            <td>IT 333</td>
            <td>3B</td>
            <td>Systems Analysis and Design</td>
            <td>Tuesday</td>
            <td>5:30PM - 8:30PM</td>
            <td>IT Room 5</td>
            <td>PERANTE, WILFERD JUDE A.</td>
          </tr>

          <tr>
            <td className="rest_day"><b>WEDNESDAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
          </tr>

          <tr className="klase">
            <td>IT 313</td>
            <td>3B</td>
            <td>Advanced Database Systems</td>
            <td>Thursday</td>
            <td>7:00AM - 9:00AM</td>
            <td>IT Room 5</td>
            <td>CONDES, JAMES S.</td>
          </tr>

          <tr className="klase">
            <td></td>
            <td></td>
            <td>-- Lab schedule --</td>
            <td>Thursday</td>
            <td>9:00AM - 12:00NN</td>
            <td>IT Room 3</td>
            <td>CONDES, JAMES S.</td>
          </tr>

          <tr className="klase">
            <td>IT 353A</td>
            <td>3B</td>
            <td>-- Lab schedule --</td>
            <td>Thursday</td>
            <td>5:30PM - 8:30PM</td>
            <td>IT Room 2</td>
            <td>ASEO, MARC FRITZ Y.</td>
          </tr>

          <tr className="klase">
            <td>IT 393</td>
            <td>3B</td>
            <td>Social and Professional Issues</td>
            <td>Friday</td>
            <td>5:30PM - 8:30PM</td>
            <td>IT Room 6</td>
            <td>JEREZA, ROMULO JOSEPH M.</td>
          </tr>

          <tr className="klase">
            <td>IT 353A</td>
            <td>3B</td>
            <td>Systems Integration and Architecture 1</td>
            <td>Saturday</td>
            <td>10:00AM - 12:00NN</td>
            <td>IT Room 2</td>
            <td>ASEO, MARC FRITZ Y.</td>
          </tr>

          <tr className="rest_day">
            <td className="rest_day"><b>SUNDAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
          </tr>
        </tbody>
      </table>

      <br />
      <div className="music">
        <audio controls autoPlay loop>
          <source src="music/habibi.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  );
}

export default Schedule;
