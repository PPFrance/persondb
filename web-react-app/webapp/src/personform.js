import React, { Component } from 'react';
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



class PersonForm extends Component {
    constructor() {
        super();
        this.state = {
            person_name: '',
            person_country: '',
        };
    }

    onChange = (e) => {
         this.setState({ [e.target.name]: e.target.value });
         
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { person_name, person_country } = this.state;

        axios.post('http://localhost:5000/person', { 'name': person_name, 'iso_country': person_country } ).then((result) => {});
    }

    render() {
        const { person_name, person_country } = this.state;
        return (
            <form onSubmit={this.onSubmit}>

                <TextField
                id="person_name"
                label="Name"
                onChange={this.onChange}
                margin="normal"
                />

                    
                <Select
                id="person_iso_country"
                label="Nationality"
                onChange={this.onChange}
                margin="normal"
                >

                    <MenuItem value="AF">Afghanistan</MenuItem>
                    <MenuItem value="AL">Albania</MenuItem>
                    <MenuItem value="DZ">Algeria</MenuItem>
                    <MenuItem value="AS">American Samoa</MenuItem>
                    <MenuItem value="AD">Andorra</MenuItem>
                    <MenuItem value="AO">Angola</MenuItem>
                    <MenuItem value="AI">Anguilla</MenuItem>
                    <MenuItem value="AQ">Antarctica</MenuItem>
                    <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                    <MenuItem value="AR">Argentina</MenuItem>
                    <MenuItem value="AM">Armenia</MenuItem>
                    <MenuItem value="AW">Aruba</MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                    <MenuItem value="AT">Austria</MenuItem>
                    <MenuItem value="AZ">Azerbaijan</MenuItem>
                    <MenuItem value="BS">Bahamas</MenuItem>
                    <MenuItem value="BH">Bahrain</MenuItem>
                    <MenuItem value="BD">Bangladesh</MenuItem>
                    <MenuItem value="BB">Barbados</MenuItem>
                    <MenuItem value="BY">Belarus</MenuItem>
                    <MenuItem value="BE">Belgium</MenuItem>
                    <MenuItem value="BZ">Belize</MenuItem>
                    <MenuItem value="BJ">Benin</MenuItem>
                    <MenuItem value="BM">Bermuda</MenuItem>
                    <MenuItem value="BT">Bhutan</MenuItem>
                    <MenuItem value="BO">Bolivia</MenuItem>
                    <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                    <MenuItem value="BW">Botswana</MenuItem>
                    <MenuItem value="BV">Bouvet Island</MenuItem>
                    <MenuItem value="BR">Brazil</MenuItem>
                    <MenuItem value="VG">British Virgin Islands</MenuItem>
                    <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                    <MenuItem value="BN">Brunei Darussalam</MenuItem>
                    <MenuItem value="BG">Bulgaria</MenuItem>
                    <MenuItem value="BF">Burkina Faso</MenuItem>
                    <MenuItem value="BI">Burundi</MenuItem>
                    <MenuItem value="KH">Cambodia</MenuItem>
                    <MenuItem value="CM">Cameroon</MenuItem>
                    <MenuItem value="CA">Canada</MenuItem>
                    <MenuItem value="CV">Cape Verde</MenuItem>
                    <MenuItem value="KY">Cayman Islands</MenuItem>
                    <MenuItem value="CF">Central African Republic</MenuItem>
                    <MenuItem value="TD">Chad</MenuItem>
                    <MenuItem value="CL">Chile</MenuItem>
                    <MenuItem value="CN">China</MenuItem>
                    <MenuItem value="HK">Hong Kong, SAR China</MenuItem>
                    <MenuItem value="MO">Macao, SAR China</MenuItem>
                    <MenuItem value="CX">Christmas Island</MenuItem>
                    <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                    <MenuItem value="CO">Colombia</MenuItem>
                    <MenuItem value="KM">Comoros</MenuItem>
                    <MenuItem value="CG">Congo (Brazzaville)</MenuItem>
                    <MenuItem value="CD">Congo, (Kinshasa)</MenuItem>
                    <MenuItem value="CK">Cook Islands</MenuItem>
                    <MenuItem value="CR">Costa Rica</MenuItem>
                    <MenuItem value="CI">Côte dIvoire</MenuItem>
                    <MenuItem value="HR">Croatia</MenuItem>
                    <MenuItem value="CU">Cuba</MenuItem>
                    <MenuItem value="CY">Cyprus</MenuItem>
                    <MenuItem value="CZ">Czech Republic</MenuItem>
                    <MenuItem value="DK">Denmark</MenuItem>
                    <MenuItem value="DJ">Djibouti</MenuItem>
                    <MenuItem value="DM">Dominica</MenuItem>
                    <MenuItem value="DO">Dominican Republic</MenuItem>
                    <MenuItem value="EC">Ecuador</MenuItem>
                    <MenuItem value="EG">Egypt</MenuItem>
                    <MenuItem value="SV">El Salvador</MenuItem>
                    <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                    <MenuItem value="ER">Eritrea</MenuItem>
                    <MenuItem value="EE">Estonia</MenuItem>
                    <MenuItem value="ET">Ethiopia</MenuItem>
                    <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                    <MenuItem value="FO">Faroe Islands</MenuItem>
                    <MenuItem value="FJ">Fiji</MenuItem>
                    <MenuItem value="FI">Finland</MenuItem>
                    <MenuItem value="FR">France</MenuItem>
                    <MenuItem value="GF">French Guiana</MenuItem>
                    <MenuItem value="PF">French Polynesia</MenuItem>
                    <MenuItem value="TF">French Southern Territories</MenuItem>
                    <MenuItem value="GA">Gabon</MenuItem>
                    <MenuItem value="GM">Gambia</MenuItem>
                    <MenuItem value="GE">Georgia</MenuItem>
                    <MenuItem value="DE">Germany</MenuItem>
                    <MenuItem value="GH">Ghana</MenuItem>
                    <MenuItem value="GI">Gibraltar</MenuItem>
                    <MenuItem value="GR">Greece</MenuItem>
                    <MenuItem value="GL">Greenland</MenuItem>
                    <MenuItem value="GD">Grenada</MenuItem>
                    <MenuItem value="GP">Guadeloupe</MenuItem>
                    <MenuItem value="GU">Guam</MenuItem>
                    <MenuItem value="GT">Guatemala</MenuItem>
                    <MenuItem value="GG">Guernsey</MenuItem>
                    <MenuItem value="GN">Guinea</MenuItem>
                    <MenuItem value="GW">Guinea-Bissau</MenuItem>
                    <MenuItem value="GY">Guyana</MenuItem>
                    <MenuItem value="HT">Haiti</MenuItem>
                    <MenuItem value="HM">Heard and Mcdonald Islands</MenuItem>
                    <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                    <MenuItem value="HN">Honduras</MenuItem>
                    <MenuItem value="HU">Hungary</MenuItem>
                    <MenuItem value="IS">Iceland</MenuItem>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="ID">Indonesia</MenuItem>
                    <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                    <MenuItem value="IQ">Iraq</MenuItem>
                    <MenuItem value="IE">Ireland</MenuItem>
                    <MenuItem value="IM">Isle of Man</MenuItem>
                    <MenuItem value="IL">Israel</MenuItem>
                    <MenuItem value="IT">Italy</MenuItem>
                    <MenuItem value="JM">Jamaica</MenuItem>
                    <MenuItem value="JP">Japan</MenuItem>
                    <MenuItem value="JE">Jersey</MenuItem>
                    <MenuItem value="JO">Jordan</MenuItem>
                    <MenuItem value="KZ">Kazakhstan</MenuItem>
                    <MenuItem value="KE">Kenya</MenuItem>
                    <MenuItem value="KI">Kiribati</MenuItem>
                    <MenuItem value="KP">Korea (North)</MenuItem>
                    <MenuItem value="KR">Korea (South)</MenuItem>
                    <MenuItem value="KW">Kuwait</MenuItem>
                    <MenuItem value="KG">Kyrgyzstan</MenuItem>
                    <MenuItem value="LA">Lao PDR</MenuItem>
                    <MenuItem value="LV">Latvia</MenuItem>
                    <MenuItem value="LB">Lebanon</MenuItem>
                    <MenuItem value="LS">Lesotho</MenuItem>
                    <MenuItem value="LR">Liberia</MenuItem>
                    <MenuItem value="LY">Libya</MenuItem>
                    <MenuItem value="LI">Liechtenstein</MenuItem>
                    <MenuItem value="LT">Lithuania</MenuItem>
                    <MenuItem value="LU">Luxembourg</MenuItem>
                    <MenuItem value="MK">Macedonia, Republic of</MenuItem>
                    <MenuItem value="MG">Madagascar</MenuItem>
                    <MenuItem value="MW">Malawi</MenuItem>
                    <MenuItem value="MY">Malaysia</MenuItem>
                    <MenuItem value="MV">Maldives</MenuItem>
                    <MenuItem value="ML">Mali</MenuItem>
                    <MenuItem value="MT">Malta</MenuItem>
                    <MenuItem value="MH">Marshall Islands</MenuItem>
                    <MenuItem value="MQ">Martinique</MenuItem>
                    <MenuItem value="MR">Mauritania</MenuItem>
                    <MenuItem value="MU">Mauritius</MenuItem>
                    <MenuItem value="YT">Mayotte</MenuItem>
                    <MenuItem value="MX">Mexico</MenuItem>
                    <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                    <MenuItem value="MD">Moldova</MenuItem>
                    <MenuItem value="MC">Monaco</MenuItem>
                    <MenuItem value="MN">Mongolia</MenuItem>
                    <MenuItem value="ME">Montenegro</MenuItem>
                    <MenuItem value="MS">Montserrat</MenuItem>
                    <MenuItem value="MA">Morocco</MenuItem>
                    <MenuItem value="MZ">Mozambique</MenuItem>
                    <MenuItem value="MM">Myanmar</MenuItem>
                    <MenuItem value="NA">Namibia</MenuItem>
                    <MenuItem value="NR">Nauru</MenuItem>
                    <MenuItem value="NP">Nepal</MenuItem>
                    <MenuItem value="NL">Netherlands</MenuItem>
                    <MenuItem value="AN">Netherlands Antilles</MenuItem>
                    <MenuItem value="NC">New Caledonia</MenuItem>
                    <MenuItem value="NZ">New Zealand</MenuItem>
                    <MenuItem value="NI">Nicaragua</MenuItem>
                    <MenuItem value="NE">Niger</MenuItem>
                    <MenuItem value="NG">Nigeria</MenuItem>
                    <MenuItem value="NU">Niue</MenuItem>
                    <MenuItem value="NF">Norfolk Island</MenuItem>
                    <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                    <MenuItem value="NO">Norway</MenuItem>
                    <MenuItem value="OM">Oman</MenuItem>
                    <MenuItem value="PK">Pakistan</MenuItem>
                    <MenuItem value="PW">Palau</MenuItem>
                    <MenuItem value="PS">Palestinian Territory</MenuItem>
                    <MenuItem value="PA">Panama</MenuItem>
                    <MenuItem value="PG">Papua New Guinea</MenuItem>
                    <MenuItem value="PY">Paraguay</MenuItem>
                    <MenuItem value="PE">Peru</MenuItem>
                    <MenuItem value="PH">Philippines</MenuItem>
                    <MenuItem value="PN">Pitcairn</MenuItem>
                    <MenuItem value="PL">Poland</MenuItem>
                    <MenuItem value="PT">Portugal</MenuItem>
                    <MenuItem value="PR">Puerto Rico</MenuItem>
                    <MenuItem value="QA">Qatar</MenuItem>
                    <MenuItem value="RE">Réunion</MenuItem>
                    <MenuItem value="RO">Romania</MenuItem>
                    <MenuItem value="RU">Russian Federation</MenuItem>
                    <MenuItem value="RW">Rwanda</MenuItem>
                    <MenuItem value="BL">Saint-Barthélemy</MenuItem>
                    <MenuItem value="SH">Saint Helena</MenuItem>
                    <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                    <MenuItem value="LC">Saint Lucia</MenuItem>
                    <MenuItem value="MF">Saint-Martin (French part)</MenuItem>
                    <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                    <MenuItem value="VC">Saint Vincent and Grenadines</MenuItem>
                    <MenuItem value="WS">Samoa</MenuItem>
                    <MenuItem value="SM">San Marino</MenuItem>
                    <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                    <MenuItem value="SA">Saudi Arabia</MenuItem>
                    <MenuItem value="SN">Senegal</MenuItem>
                    <MenuItem value="RS">Serbia</MenuItem>
                    <MenuItem value="SC">Seychelles</MenuItem>
                    <MenuItem value="SL">Sierra Leone</MenuItem>
                    <MenuItem value="SG">Singapore</MenuItem>
                    <MenuItem value="SK">Slovakia</MenuItem>
                    <MenuItem value="SI">Slovenia</MenuItem>
                    <MenuItem value="SB">Solomon Islands</MenuItem>
                    <MenuItem value="SO">Somalia</MenuItem>
                    <MenuItem value="ZA">South Africa</MenuItem>
                    <MenuItem value="GS">South Georgia and the South Sandwich Islands</MenuItem>
                    <MenuItem value="SS">South Sudan</MenuItem>
                    <MenuItem value="ES">Spain</MenuItem>
                    <MenuItem value="LK">Sri Lanka</MenuItem>
                    <MenuItem value="SD">Sudan</MenuItem>
                    <MenuItem value="SR">Suriname</MenuItem>
                    <MenuItem value="SJ">Svalbard and Jan Mayen Islands</MenuItem>
                    <MenuItem value="SZ">Swaziland</MenuItem>
                    <MenuItem value="SE">Sweden</MenuItem>
                    <MenuItem value="CH">Switzerland</MenuItem>
                    <MenuItem value="SY">Syrian Arab Republic (Syria)</MenuItem>
                    <MenuItem value="TW">Taiwan, Republic of China</MenuItem>
                    <MenuItem value="TJ">Tajikistan</MenuItem>
                    <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                    <MenuItem value="TH">Thailand</MenuItem>
                    <MenuItem value="TL">Timor-Leste</MenuItem>
                    <MenuItem value="TG">Togo</MenuItem>
                    <MenuItem value="TK">Tokelau</MenuItem>
                    <MenuItem value="TO">Tonga</MenuItem>
                    <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                    <MenuItem value="TN">Tunisia</MenuItem>
                    <MenuItem value="TR">Turkey</MenuItem>
                    <MenuItem value="TM">Turkmenistan</MenuItem>
                    <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                    <MenuItem value="TV">Tuvalu</MenuItem>
                    <MenuItem value="UG">Uganda</MenuItem>
                    <MenuItem value="UA">Ukraine</MenuItem>
                    <MenuItem value="AE">United Arab Emirates</MenuItem>
                    <MenuItem value="GB">United Kingdom</MenuItem>
                    <MenuItem value="US">United States of America</MenuItem>
                    <MenuItem value="UM">US Minor Outlying Islands</MenuItem>
                    <MenuItem value="UY">Uruguay</MenuItem>
                    <MenuItem value="UZ">Uzbekistan</MenuItem>
                    <MenuItem value="VU">Vanuatu</MenuItem>
                    <MenuItem value="VE">Venezuela (Bolivarian Republic)</MenuItem>
                    <MenuItem value="VN">Viet Nam</MenuItem>
                    <MenuItem value="VI">Virgin Islands, US</MenuItem>
                    <MenuItem value="WF">Wallis and Futuna Islands</MenuItem>
                    <MenuItem value="EH">Western Sahara</MenuItem>
                    <MenuItem value="YE">Yemen</MenuItem>
                    <MenuItem value="ZM">Zambia</MenuItem>

                
                </Select>
        
                

                <Button variant="contained" type="submit">Submit</Button>

            </form>
       );
     }
 }

 export default PersonForm;
 