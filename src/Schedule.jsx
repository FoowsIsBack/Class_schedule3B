function Schedule() {
  return (
    <div className="schedule">
      <div className="title">
        <a href="https://www.facebook.com/jhinbangcoyo" target="_blank" rel="noreferrer">
          <img src="/logo/profile.png" alt="Profile"/>
        </a>
        <h4>Bangcoyo, Kiryll Dave U.</h4>
        <img src="video/itachi.gif" alt="Itachi"/>
        <h1>CLASS SCHEDULE</h1>
        <div className="evsu">
          <a href="https://www.facebook.com/myEVSU.ormoc" target="_blank" rel="noreferrer">
            <img src="/logo/logo.jpg" alt="EVSU Logo"/>
          </a>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <th className="subjects">📖 Subjects Enrolled for AY : 2025-2026, Sem : S</th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status3"></th>
          </tr>
            
          <tr>
            <th className="status">Enrollment Status: <span className="enrolled">✅ Officially Enrolled</span></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status2"></th>
            <th className="status3"></th>
          </tr>

          <tr>
            <th className="head">Subjcode</th>
            <th className="head">Section</th>
            <th className="head">Description</th>
            <th className="head">Days</th>
            <th className="head">Time</th>
            <th className="head">Room</th>
            <th className="head">Professor</th>
          </tr>

          <tr className="klase">
            <td>IT 303A</td>
            <td>3A</td>
            <td>Capstone Project and Research 1</td>
            <td>Monday</td>
            <td>9:00 AM - 12:00 NN</td>
            <td>Online Class</td>
            <td>MORPOS, JOSEPH JAYMEL S.</td>
          </tr>

          <tr className="klase">
            <td>IT 303</td>
            <td>3B</td>
            <td>Information Assurance and Security 2 <br /> <strong>(Lab Schedule)</strong></td>
            <td>Monday</td>
            <td>1:00 PM - 4:00 PM</td>
            <td>IT Room 1</td>
            <td>BERTULFO, EDWARD B.</td>
          </tr>

          <tr className="klase">
            <td>IT 303</td>
            <td>3B</td>
            <td>Information Assurance and Security 2 <br /> <strong>(Lab Schedule)</strong></td>
            <td>Tuesday</td>
            <td>1:00 PM - 4:00 PM</td>
            <td>IT Room 1</td>
            <td>BERTULFO, EDWARD B.</td>
          </tr>

          <tr className="klase">
            <td>IT 303</td>
            <td>3B</td>
            <td>Information Assurance and Security 2 <br /> <strong>(Lab Schedule)</strong></td>
            <td>Wednesday</td>
            <td>1:00 PM - 4:00 PM</td>
            <td>IT Room 1</td>
            <td>BERTULFO, EDWARD B.</td>
          </tr>

          <tr>
            <td className="rest_day"><b>THURSDAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
          </tr>

          <tr>
            <td className="rest_day"><b>FRIDAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
          </tr>

          <tr>
            <td className="rest_day"><b>SATURDAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
            <td className="rest_day"><b>REST DAY</b></td>
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

