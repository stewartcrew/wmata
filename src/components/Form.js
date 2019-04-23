import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
      <p>{this.props.stationId}</p>
      <form onSubmit={this.props.getTrainStatus}>
        <select name="station" value={this.props.stationID} >
          <option value="G03">Addison Road-Seat Pleasant</option>
          <option value="F06">Anacostia</option>
          <option value="F02">Archives-Navy Memorial-Penn Quarter</option>
          <option value="C06">Arlington Cemetery</option>
          <option value="K04">Ballston-MU</option>
          <option value="G01">Benning Road</option>
          <option value="A09">Bethesda</option>
          <option value="C12">Braddock Road</option>
          <option value="F11">Branch Ave</option>
          <option value="B05">Brookland-CUA</option>
          <option value="G02">Capitol Heights</option>
          <option value="D05">Capitol South</option>
          <option value="D11">Cheverly</option>
          <option value="K02">Clarendon</option>
          <option value="A05">Cleveland Park</option>
          <option value="E09">College Park-U of Md</option>
          <option value="E04">Columbia Heights</option>
          <option value="F07">Congress Heights</option>
          <option value="K01">Court House</option>
          <option value="C09">Crystal City</option>
          <option value="D10">Deanwood</option>
          <option value="K07">Dunn Loring-Merrifield</option>
          <option value="A03">Dupont Circle</option>
          <option value="K05">East Falls Church</option>
          <option value="D06">Eastern Market</option>
          <option value="C14">Eisenhower Avenue</option>
          <option value="A02">Farragut North</option>
          <option value="C03">Farragut West</option>
          <option value="D04">Federal Center SW</option>
          <option value="D01">Federal Triangle</option>
          <option value="C04">Foggy Bottom-GWU</option>
          <option value="B09">Forest Glen</option>
          <option value="B06,E06">Fort Totten</option>
          <option value="J03">Franconia-Springfield</option>
          <option value="A08">Friendship Heights</option>
          <option value="B01,F01">Gallery Pl-Chinatown</option>
          <option value="E05">Georgia Ave-Petworth</option>
          <option value="B11">Glenmont</option>
          <option value="E10">Greenbelt</option>
          <option value="N03">Greensboro</option>
          <option value="A11">Grosvenor-Strathmore</option>
          <option value="C15">Huntington</option>
          <option value="B02">Judiciary Square</option>
          <option value="C13">King St-Old Town</option>
          <option value="D03,F03">L'Enfant Plaza</option>
          <option value="D12">Landover</option>
          <option value="G05">Largo Town Center</option>
          <option value="N01">McLean</option>
          <option value="C02">McPherson Square</option>
          <option value="A10">Medical Center</option>
          <option value="A01,C01">Metro Center</option>
          <option value="D09">Minnesota Ave</option>
          <option value="G04">Morgan Boulevard</option>
          <option value="E01">Mt Vernon Sq 7th St-Convention Center</option>
          <option value="F05">Navy Yard-Ballpark</option>
          <option value="F09">Naylor Road</option>
          <option value="D13">New Carrollton</option>
          <option value="B35">NoMa-Gallaudet U</option>
          <option value="C07">Pentagon</option>
          <option value="C08">Pentagon City</option>
          <option value="D07">Potomac Ave</option>
          <option value="E08">Prince George's Plaza</option>
          <option value="B04">Rhode Island Ave-Brentwood</option>
          <option value="A14">Rockville</option>
          <option value="C10">Ronald Reagan Washington National Airport</option>
          <option value="C05">Rosslyn</option>
          <option value="A15">Shady Grove</option>
          <option value="E02">Shaw-Howard U</option>
          <option value="B08">Silver Spring</option>
          <option value="T81">Silver Spring Transit Center</option>
          <option value="D02">Smithsonian</option>
          <option value="F08">Southern Avenue</option>
          <option value="N04">Spring Hill</option>
          <option value="D08">Stadium-Armory</option>
          <option value="F10">Suitland</option>
          <option value="B07">Takoma</option>
          <option value="A07">Tenleytown-AU</option>
          <option value="A13">Twinbrook</option>
          <option value="N02">Tysons Corner</option>
          <option value="E03">U Street/African-Amer Civil War Memorial/Cardozo</option>
          <option value="B03">Union Station</option>
          <option value="J02">Van Dorn Street</option>
          <option value="A06">Van Ness-UDC</option>
          <option value="K08">Vienna/Fairfax-GMU</option>
          <option value="K03">Virginia Square-GMU</option>
          <option value="F04">Waterfront</option>
          <option value="K06">West Falls Church-VT/UVA</option>
          <option value="E07">West Hyattsville</option>
          <option value="B10">Wheaton</option>
          <option value="A12">White Flint</option>
          <option value="N06">Wiehle-Reston East</option>
          <option value="A04">Woodley Park-Zoo/Adams Morgan</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default Form
