<?php
/*
* Plugin Name: Email Signature Generator
* Description: Generate an email signature for any of Five Star Franchising's brands
* Version: 1.05.01
* Requires at least: 5.2
* Requires PHP: 7.2
* Author: Dave Barrington
* Author URI: dave-barrington@hotmail.com
* License: GPL v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: email-signature-generator
* Domain Path: /languages
*/

// Enqueue scripts
function form_plugin_enqueue_scripts()
{
    // Enqueue custom JavaScript file
    wp_enqueue_script('form-plugin-script', plugins_url('/js/email-sig-gen.js', __FILE__), array('jquery'), '1.0', true);

    // Enqueue custom CSS
    wp_enqueue_style('form-plugin-style', plugins_url('/css/style.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'form_plugin_enqueue_scripts');

// Function to display form HTML
function form_plugin_form_shortcode()
{
    ob_start(); // Start output buffering
?>
    <div class="email_sig_wrapper">
        <div id='inputForm'>
            <form id="mainForm">
                <div class="inputLine">
                    <input type="checkbox" name="includeName" id="includeName" title="Name is Required" checked disabled />
                    <div class="inputLine1">
                        <label for="inputName">Name:</label>
                        <input type="text" id="inputName" name="inputName" required>
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includePosition" id="includePosition" checked />
                    <div class="inputLine1">
                        <label for="inputPosition">Position:</label>
                        <input type="text" id="inputPosition" name="inputPosition" required>
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeBrand" id="includeBrand" title="Brand is Required" checked disabled />
                    <div class="inputLine1">
                        <label for="brandSelect">Brand:</label>
                        <select id="brandSelect" name="brandSelect">
                            <option value="five-star-franchising" selected>Five Star Franchising</option>
                            <option value="five-star-marketing">Five Star Marketing</option>
                            <option value="Bio-One">Bio-One</option>
                            <option value="Bio-One-Tagline">Bio-One Alternate Tagline</option>
                            <option value="Bio-One-Blue">Bio-One Blue</option>
                            <option value="Mosquito-Shield">Mosquito Shield</option>
                            <option value="Five-Star-Bath-Solutions">Five Star Bath Solutions</option>
                            <option value="1-800-Packouts">1-800-Packouts</option>
                            <option value="Gotcha-Covered">Gotcha Covered</option>
                            <option value="Card-My-Yard">Card My Yard</option>
                            <option value="ProNexis">ProNexis</option>
                        </select>
                    </div>
                </div>


                <div class="inputLine">
                    <input type="checkbox" name="includePhone" id="includePhone" checked />
                    <div class="inputLine1">

                        <label for="inputPhone">Phone Number:</label>
                        <div id="phoneFields">
                            <div class="phoneField"><input type="tel" class="phoneNumber" id="inputPhone0" name="inputPhone0"></div>
                        </div>
                        <button class="addField" id="addPhoneBtn"><img src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/add_field.svg" /><span class="btnText">Add Another Field</span></button>

                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeMobile" id="includeMobile" checked />
                    <div class="inputLine1">

                        <label for="inputMobile">Mobile Number:</label>
                        <div id="mobileFields">
                            <div class="mobileField"><input type="tel" class="phoneNumber" id="inputMobile0" name="inputMobile0"></div>
                        </div>
                        <button class="addField" id="addMobileBtn"><img src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/add_field.svg" /><span class="btnText">Add Another Field</span></button>

                    </div>
                </div>


                <div class="inputLine">
                    <input type="checkbox" name="includeEmail" id="includeEmail" checked />
                    <div class="inputLine1">
                        <label for="inputEmail">Email:</label>
                        <div id="emailFields">
                            <div class="emailField"><input type="email" id="inputEmail0" name="inputEmail0" /></div>
                        </div>
                        <button class="addField" id="addEmailBtn"><img src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/add_field.svg" /><span class="btnText">Add Another Field</span></button>

                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeAppointment" id="includeAppointment" checked />
                    <div class="inputLine1">
                        <label for="inputAppointment">Book an Appointment URL:</label>
                        <input type="url" id="inputAppointment" name="inputAppointment">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeConnectOnLi" id="includeConnectOnLi" checked />
                    <div class="inputLine1">
                        <label for="inputConnectOnLi">Connect on Linkedin URL:</label>
                        <input type="url" id="inputConnectOnLi" name="inputConnectOnLi">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeUrl" id="includeUrl" checked />
                    <div class="inputLine1">
                        <label for="inputUrl">Web Address:</label>
                        <div id="urlFields">
                            <div class="urlField"><input type="url" id="inputUrl0" name="inputUrl0"></div>
                        </div>
                        <button class="addField" id="addUrlBtn"><img src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/add_field.svg" /><span class="btnText">Add Another Field</span></button>

                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeLinkedin" id="includeLinkedin" checked />
                    <div class="inputLine1">
                        <label for="inputLinkedin">LinkedIn:</label>
                        <input type="url" id="inputLinkedin" name="inputLinkedin" value="https://www.linkedin.com/company/five-star-franchising">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeX" id="includeX" checked />
                    <div class="inputLine1">
                        <label for="inputX">X (Twitter):</label>
                        <input type="url" id="inputX" name="inputX" value="https://x.com/FiveStarFran">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeInstagram" id="includeInstagram" checked />
                    <div class="inputLine1">
                        <label for="inputInstagram">Instagram:</label>
                        <input type="url" id="inputInstagram" name="inputInstagram" value="https://www.instagram.com/explore/locations/268247198/five-star-franchising">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeFacebook" id="includeFacebook" checked />
                    <div class="inputLine1">
                        <label for="inputFacebook">Facebook:</label>
                        <input type="url" id="inputFacebook" name="inputFacebook" value="https://www.facebook.com/FiveStarFranchise/">
                    </div>
                </div>

                <div class="inputLine">
                    <input type="checkbox" name="includeInstagram" id="includeYoutube" checked />
                    <div class="inputLine1">
                        <label for="inputYoutube">Youtube:</label>
                        <input type="url" id="inputYoutube" name="inputYoutube" value="https://www.youtube.com/@fivestarfranchising">
                    </div>
                </div>

                <div class="inputLine noInput">
                    <input type="checkbox" name="includeDisclaimer" id="includeDisclaimer" checked />
                    <div class="inputLine1">
                        <label for="includeDisclaimer">Include disclaimer</label>

                    </div>
                </div>
            </form>
        </div>
        <div id="signatureColumn" style="font-family: Arial, Helvetica, sans-serif; line-height:1.3;">

            <div id="signature">
                <div id="displayName" style="font-size: 16px;  font-weight: bold; letter-spacing: 2px; color: #ab080d; text-transform: uppercase;">First Lastname</div>
                <div id="rowPosition" style="font-size: 14px; font-style:italic; font-weight: bold">Position</div>
                <div style="margin: 18px 0 14px;"><img id="brandLogo" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fivestar_franchising.png" style="width: 100%; max-width: 220px;" /></div>
                <table cellpadding="0" cellspacing="0" style="margin: 0 0 6px;">
                    <tr id="rowPhone">
                        <td style="width: 16px; height: 16px; vertical-align:middle;"><img id="phoneIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/phone.png" style="vertical-align: middle; margin: 0 auto;width: 100%; max-width: 15px;" /></td>
                        <td id="displayPhone" style="height: 16px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="tel:123.456.7890" style="color: #000">123.456.7890</a></td>
                    </tr>
                    <tr id="rowMobile">
                        <td style="width: 16px; height: 17px; vertical-align:middle; text-align:center"><img id="mobileIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/mobile.png" style="vertical-align: middle;width: 100%; max-width: 12px;" /></td>
                        <td id="displayMobile" style=" height: 17px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="#" style="color: #000">123.456.7890</a> | <a href="#" style="color: #000">123.456.7890</a></td>
                    </tr>
                    <tr id="rowEmail">
                        <td style="width: 16px; height: 12px; vertical-align:middle;"><img id="mailIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/mail.png" style="vertical-align: middle;width: 100%; max-width: 16px;" /></td>
                        <td id="displayEmail" style="height: 12px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="#" style="color: #000">name@brand.com</a></td>
                    </tr>
                    <tr id="rowAppointment">
                        <td style="width: 16px; height: 15px; vertical-align:middle;"><img id="calendarIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/calendar.png" style="vertical-align: middle;width: 100%; max-width: 14px;" /></td>
                        <td id="displayAppointment" style="height: 15px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="#" target="_blank" style="color: #000">Book an Appointment</a></td>
                    </tr>
                    <tr id="rowConnectOnLi">
                        <td style="width: 16px; height: 14px; vertical-align:middle;"><img id="connectLiIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/linkedin_1.png" style="vertical-align: middle;width: 100%; max-width: 14px;" /></td>
                        <td id="displayConnectOnLi" style="height: 14px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="#" target="_blank" style="color: #000">Connect on Linkedin</a></td>
                    </tr>
                    <tr id="rowUrl">
                        <td style="width: 16px; height: 14px; vertical-align:middle;"><img id="urlIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/url.png" style="vertical-align: middle; width: 100%; max-width: 15px;" /></td>
                        <td id="displayUrl" style="height: 14px; vertical-align:middle; font-size: 12px; padding-left: 10px;"><a href="#" style="color: #000">Brand.com</a></td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" style="margin: 0 0 15px;">
                    <tr>
                        <td id="rowX" style="width: 34px;"><a href="https://x.com/FiveStarFran" target="_blank"><img id="xIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/x.png" style="width: 100%; max-width: 17px;" /></a></td>
                        <td id="rowInstagram" style="width: 34px;"><a href="https://www.instagram.com/fivestarfranchising/" target="_blank"><img id="instagramIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/instagram.png" style="width: 100%; max-width: 17px;" /></a></td>
                        <td id="rowFacebook" style="width: 34px;"><a href="https://www.facebook.com/FiveStarFranchise" target="_blank"><img id="facebookIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/facebook.png" style="width: 100%; max-width: 17px;" /></a></td>
                        <td id="rowLinkedin" style="width: 34px;"><a href="https://www.linkedin.com/company/five-star-franchising" target="_blank"><img id="linkedinIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/linkedin.png" style="width: 100%; max-width: 17px;" /></a></td>
                        <td id="rowYoutube" style="width: 34px;"><a href="https://www.youtube.com/@fivestarfranchising" target="_blank"><img id="youtubeIcon" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/fsf/youtube.png" style="width: 100%; max-width: 17px;" /></a></td>
                    </tr>
                </table>
                <div style="margin: 0 0 16px"><img id="driveBanner" src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/drive.png" style="width: 100%; max-width: 570px;" /></div>
                <div id="rowDisclaimer" style="padding: 20px 0; border-top: #939598 1px solid; color: #808285; font-size: 10px; width: 570px; max-width: 100%;">This e-mail and any files transmitted with it are confidential and are intended solely for the use of the individual or entity to which they are addressed. If you are not the intended recipient or the person responsible for delivering the e-mail to the intended recipient, be advised that you have received this e-mail in error. You should delete this message and are hereby notified that any use, dissemination, forwarding, printing, or copying of this e-mail is strictly prohibited.</div>
            </div>
            <button class="addField copySignature">Add to Your Email</button>
        </div>
    </div>
    <div class="modalWrapper">
        <div class="modalContent">
            <img src="<?php echo get_site_url(); ?>/wp-content/plugins/email-signature-generator/images/exit_1.png" id="exit" />
            <h2>How to Add Your New Signature to Your Email</h2>

            <p>All it takes is copying and pasting your new signature to your Google or Outlook signature settings.</p>

            <p class="modMargin">You can find detailed instructions below:</p>
            <ol>
                <li>Select the entire signature and copy it</li>
                <li>Go to your email platform of choice and go to the signature settings page</li>
                <li>Paste the signature into the text box</li>
                <li>Don't forget to click 'Save'</li>
            </ol>

            <p class="modMargin">If you need more guidance, click your preferred email platform below:</p>
            <ul>
                <li><a href="https://support.google.com/mail/answer/8395?hl=en&co=GENIE.Platform%3DDesktop" target="_blank">Gmail</a></li>
                <li><a href="https://support.microsoft.com/en-us/office/create-and-add-an-email-signature-in-outlook-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2#PickTab=New_Outlook" target="_blank">Outlook for PC</a></li>
                <li><a href="https://support.microsoft.com/en-us/office/create-and-insert-a-signature-in-outlook-for-mac-f4d21492-0956-4429-95ad-2769745b539c" target="_blank">Outlook for Mac</a></li>
            </ul>
        </div>
    </div>
    <script>
        jQuery('document').ready(function() {
            jQuery('#brandSelect').val('five-star-franchising');
            jQuery('#mainForm').get(0).reset();
        });
    </script>
<?php

    return ob_get_clean(); // End and return output buffering
}

// Register shortcode
add_shortcode('email-signature-generator', 'form_plugin_form_shortcode');
