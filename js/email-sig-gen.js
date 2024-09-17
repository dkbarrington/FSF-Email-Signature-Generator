jQuery(function () {
    let iconFolder = 'red';

    const thisDomain = location.protocol + '//' + location.hostname;

    let emailArr = ['name@name.com'];
    let phoneArr = ['888-555-9999'];
    let mobileArr = ['888-999-5555'];
    let urlArr = ['website.com'];

    const updateEmail = () => {
        let emailStr = '';
        emailArr.forEach((item, index, arr) => {
            if (item.length > 0) {
                if (index > 0) emailStr += ' | ';
                emailStr += '<a href="mailto:' + item + '" style="color: #000" \>' + item + '</a>';
            }
        });
        jQuery('#displayEmail').html(emailStr);
    };

    const updatePhone = () => {
        let phoneStr = '';
        phoneArr.forEach((item, index) => {
            if (item.length > 0) {
                if (index > 0) phoneStr += ' | ';
                phoneStr += '<a href="tel:' + item + '" style="color: #000" \>' + item + '</a>';
            }
        });
        jQuery('#displayPhone').html(phoneStr);
    };

    const updateMobile = () => {
        let mobileStr = '';
        mobileArr.forEach((item, index) => {
            if (item.length > 0) {
                if (index > 0) mobileStr += ' | ';
                mobileStr += '<a href="tel:' + item + '" style="color: #000" \>' + item + '</a>';
            }
        });
        jQuery('#displayMobile').html(mobileStr);
    };

    const updateUrl = () => {
        let urlStr = '';
        urlArr.forEach((item, index) => {
            if (item.length > 0) {
                if (index > 0) urlStr += ' | ';
                urlStr += '<a href="https://' + item + '" target="_blank" style="color: #000" \>' + item + '</a>';
            }
        });
        jQuery('#displayUrl').html(urlStr);
    };

    // Brand Selection
    jQuery('#brandSelect').change(function () {

        switch (this.value) {
            case 'five-star-franchising':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/fivestar_franchising.png'
                });
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
                jQuery('#inputUrl0').val('https://fivestarfranchising.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/five-star-franchising');
                jQuery('#inputFacebook').val('https://www.facebook.com/FiveStarFranchise');
                jQuery('#inputYoutube').val('https://www.youtube.com/@fivestarfranchising');
                jQuery('#inputInstagram').val('https://www.instagram.com/fivestarfranchising/');
                jQuery('#inputX').val('https://x.com/FiveStarFran');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/five-star-franchising');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/FiveStarFranchise');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@fivestarfranchising');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/fivestarfranchising/');
                jQuery('#rowX a').attr('href', 'https://x.com/FiveStarFran');
                break;

            case 'five-star-marketing':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/five-star-marketing-logo.png'
                });
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
                jQuery('#inputUrl0').val('https://fivestarmarketingservice.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/five-star-marketing-service/');
                jQuery('#inputFacebook').val('https://www.facebook.com/fivestarmarketingservice');
                jQuery('#inputYoutube').val('https://www.youtube.com/@FiveStarMarketingService');
                jQuery('#inputInstagram').val('https://www.instagram.com/fivestarmarketingservice/');
                jQuery('#inputX').val('https://x.com/FiveStarMktgSvc');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/five-star-marketing-service/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/fivestarmarketingservice');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@FiveStarMarketingService');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/fivestarmarketingservice/');
                jQuery('#rowX a').attr('href', 'https://x.com/FiveStarMktgSvc');
                break;

            case 'Bio-One':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-logo.png'
                });
                iconFolder = 'bio-one';
                jQuery('#displayName').css('color', '#f26a3d');
                jQuery('#inputUrl0').val('https://biooneinc.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#inputFacebook').val('https://www.facebook.com/BioOneInc/');
                jQuery('#inputYoutube').val('https://www.youtube.com/@bio-one');
                jQuery('#inputInstagram').val('https://www.instagram.com/biooneinc/');
                jQuery('#inputX').val('https://x.com/BioOneInc');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/BioOneInc/');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@bio-one');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/biooneinc/');
                jQuery('#rowX a').attr('href', 'https://x.com/BioOneInc');
                break;

            case 'Bio-One-Tagline':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-tagline.png'
                });
                iconFolder = 'bio-one';
                jQuery('#displayName').css('color', '#f26a3d');
                jQuery('#inputUrl0').val('https://biooneinc.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#inputFacebook').val('https://www.facebook.com/BioOneInc/');
                jQuery('#inputYoutube').val('https://www.youtube.com/@bio-one');
                jQuery('#inputInstagram').val('https://www.instagram.com/biooneinc/');
                jQuery('#inputX').val('https://x.com/BioOneInc');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/BioOneInc/');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@bio-one');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/biooneinc/');
                jQuery('#rowX a').attr('href', 'https://x.com/BioOneInc');
                break;

            case 'Bio-One-Blue':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-blue.png'
                });
                iconFolder = 'bio-one-blue';
                jQuery('#displayName').css('color', '#25a8e0');
                jQuery('#inputUrl0').val('https://biooneinc.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#inputFacebook').val('https://www.facebook.com/BioOneInc/');
                jQuery('#inputYoutube').val('https://www.youtube.com/@bio-one');
                jQuery('#inputInstagram').val('https://www.instagram.com/biooneinc/');
                jQuery('#inputX').val('https://x.com/BioOneInc');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/bio-one-inc/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/BioOneInc/');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@bio-one');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/biooneinc/');
                jQuery('#rowX a').attr('href', 'https://x.com/BioOneInc');
                break;

            case 'Mosquito-Shield':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/mosquito-shield-logo.png'
                });
                iconFolder = 'mosquito-shield';
                jQuery('#displayName').css('color', '#cb171e');
                jQuery('#inputUrl0').val('https://moshield.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/mosquito-shield/');
                jQuery('#inputFacebook').val('https://www.facebook.com/MosquitoShieldFranchiseCorp');
                jQuery('#inputYoutube').val('https://www.youtube.com/@mosquitoshield8169');
                jQuery('#inputInstagram').val('https://www.instagram.com/mosquitoshieldcorp/');
                jQuery('#inputX').val('https://x.com/mosquitoshield');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/mosquito-shield/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/MosquitoShieldFranchiseCorp');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@mosquitoshield8169');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/mosquitoshieldcorp/');
                jQuery('#rowX a').attr('href', 'https://x.com/mosquitoshield');
                break;

            case 'Five-Star-Bath-Solutions':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/five-star-bath-solutions-logo.png'
                });
                iconFolder = 'fsb';
                jQuery('#displayName').css('color', '#1c93d1');
                jQuery('#inputUrl0').val('https://fivestarbathsolutions.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/bath-solutions-inc-/');
                jQuery('#inputFacebook').val('https://www.facebook.com/BathSolutions/');
                jQuery('#inputYoutube').val('https://www.youtube.com/@bathsolutionsexpert');
                jQuery('#inputInstagram').val('https://www.instagram.com/fivestarbathsolutions/');
                jQuery('#inputX').val('https://x.com/BathSolutions');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/bath-solutions-inc-/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/BathSolutions/');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@bathsolutionsexpert');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/fivestarbathsolutions/');
                jQuery('#rowX a').attr('href', 'https://x.com/BathSolutions');
                break;

            case '1-800-Packouts':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/packouts-logo.png'
                });
                iconFolder = 'packouts';
                jQuery('#displayName').css('color', '#0076cf');
                jQuery('#inputUrl0').val('https://www.1800packouts.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/1-800-packouts-corporate/');
                jQuery('#inputFacebook').val('https://www.facebook.com/1800PACKOUTS');
                jQuery('#inputYoutube').val('https://www.youtube.com/@1800packouts');
                jQuery('#inputInstagram').val('https://www.instagram.com/1_800_packouts/');
                jQuery('#inputX').val('https://x.com/1800packouts');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/1-800-packouts-corporate/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/1800PACKOUTS');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@1800packouts');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/1_800_packouts/');
                jQuery('#rowX a').attr('href', 'https://x.com/1800packouts');
                break;

            case 'Gotcha-Covered':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/gotcha-covered-logo.png'
                });
                iconFolder = 'gotcha-covered';
                jQuery('#displayName').css('color', '#2591d0');
                jQuery('#inputUrl0').val('https://www.gotchacovered.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/gotcha-covered-franchising/');
                jQuery('#inputFacebook').val('https://www.facebook.com/GotchaCoveredCorporate/');
                jQuery('#inputYoutube').val('https://www.youtube.com/@GotchaCoveredHQ');
                jQuery('#inputInstagram').val('https://www.instagram.com/gotchacoveredcorporate/');
                jQuery('#inputX').val('https://x.com/gotchacoveredhq');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/gotcha-covered-franchising/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/GotchaCoveredCorporate/');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@GotchaCoveredHQ');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/gotchacoveredcorporate/');
                jQuery('#rowX a').attr('href', 'https://x.com/gotchacoveredhq');
                break;

            case 'Card-My-Yard':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/card-my-yard-logo1.png'
                });
                iconFolder = 'card-my-yard';
                jQuery('#displayName').css('color', '#40b44a');
                jQuery('#inputUrl0').val('https://cardmyyard.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/card-my-yard/');
                jQuery('#inputFacebook').val('https://www.facebook.com/cardmyyard');
                jQuery('#inputYoutube').val('https://www.youtube.com/@cardmyyard');
                jQuery('#inputInstagram').val('https://www.instagram.com/cardmyyard/');
                jQuery('#inputX').val('https://x.com/CardMyYard');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/card-my-yard/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/cardmyyard');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@cardmyyard');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/cardmyyard/');
                jQuery('#rowX a').attr('href', 'https://x.com/CardMyYard');
                break;

            case 'ProNexis':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/pronexis-logo.png'
                });
                iconFolder = 'pronexis';
                jQuery('#displayName').css('color', '#2591d0');
                jQuery('#inputUrl0').val('https://pronexis.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/pronexis/');
                jQuery('#inputFacebook').val('https://www.facebook.com/ProNexis');
                jQuery('#inputYoutube').val('https://www.youtube.com/@pronexis175');
                jQuery('#inputInstagram').val('https://www.instagram.com/pronexis/');
                jQuery('#inputX').val('https://x.com/ProNexisInc');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/pronexis/');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/ProNexis');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@pronexis175');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/pronexis/');
                jQuery('#rowX a').attr('href', 'https://x.com/ProNexisInc');
                break;

            default:
                console.log('image not updated');
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
                jQuery('#inputUrl0').val('https://fivestarfranchising.com/');
                jQuery('#inputLinkedin').val('https://www.linkedin.com/company/five-star-franchising');
                jQuery('#inputFacebook').val('https://www.facebook.com/FiveStarFranchise');
                jQuery('#inputYoutube').val('https://www.youtube.com/@fivestarfranchising');
                jQuery('#inputInstagram').val('https://www.instagram.com/fivestarfranchising/');
                jQuery('#inputX').val('https://x.com/FiveStarFran');

                jQuery('#rowLinkedin a').attr('href', 'https://www.linkedin.com/company/five-star-franchising');
                jQuery('#rowFacebook a').attr('href', 'https://www.facebook.com/FiveStarFranchise');
                jQuery('#rowYoutube a').attr('href', 'https://www.youtube.com/@fivestarfranchising');
                jQuery('#rowInstagram a').attr('href', 'https://www.instagram.com/fivestarfranchising/');
                jQuery('#rowX a').attr('href', 'https://x.com/FiveStarFran');
                break;

        }

        jQuery('#phoneIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/phone.png');
        jQuery('#mobileIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/mobile.png');
        jQuery('#mailIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/mail.png');
        jQuery('#calendarIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/calendar.png');
        jQuery('#connectLiIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/linkedin_1.png');
        jQuery('#urlIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/url.png');
        jQuery('#linkedinIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/linkedin.png');
        jQuery('#xIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/x.png');
        jQuery('#instagramIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/instagram.png');
        jQuery('#facebookIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/facebook.png');
        jQuery('#youtubeIcon').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/' + iconFolder + '/youtube.png');

        // Use black Drive banner
        const blackArr = ['Bio-One', 'Bio-One-Blue', 'Card-My-Yard', 'Bio-One-Tagline'];
        if (blackArr.includes(this.value)) {
            jQuery('#driveBanner').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/drive-black.png');
        } else {
            jQuery('#driveBanner').attr('src', thisDomain + '/wp-content/plugins/email-signature-generator/images/drive.png');
        }

        // Hide or Show Drive banner
        if (this.value === 'ProNexis') {
            jQuery('#driveBanner').hide();
        } else {
            jQuery('#driveBanner').show();
        }

    });

    const addHttps = (url) => {
        return url.includes('http') ? url : 'https://' + url;
    };

    // Update signature display
    jQuery('#inputName').keyup(function () {
        jQuery('#displayName').text(this.value);
    });

    jQuery('#inputPosition').keyup(function () {
        jQuery('#rowPosition').text(this.value);
    });

    jQuery('#emailFields').on('keyup', '.emailField input', function () {
        arrId = this.id.replace('inputEmail', '');
        emailArr[arrId] = this.value;
        updateEmail();
    });

    jQuery('#phoneFields').on('keyup', '.phoneField input', function () {
        arrId = this.id.replace('inputPhone', '');
        phoneArr[arrId] = this.value;
        updatePhone();
    });

    jQuery('#mobileFields').on('keyup', '.mobileField input', function () {
        arrId = this.id.replace('inputMobile', '');
        mobileArr[arrId] = this.value;
        updateMobile();
    });

    jQuery('#urlFields').on('keyup', '.urlField input', function () {
        arrId = this.id.replace('inputUrl', '');
        urlArr[arrId] = this.value;
        updateUrl();
    });

    jQuery('#inputAppointment').keyup(function () {
        jQuery('#displayAppointment a').attr('href', addHttps(this.value));
    });

    jQuery('#inputConnectOnLi').keyup(function () {
        jQuery('#displayConnectOnLi a').attr('href', addHttps(this.value));
    });


    // Social Icons
    jQuery('#inputLinkedin').keyup(function () {
        jQuery('#rowLinkedin a').attr('href', addHttps(this.value));
    });

    jQuery('#inputX').keyup(function () {
        jQuery('#rowX a').attr('href', addHttps(this.value));
    });

    jQuery('#inputInstagram').keyup(function () {
        jQuery('#rowInstagram a').attr('href', addHttps(this.value));
    });

    jQuery('#inputFacebook').keyup(function () {
        jQuery('#rowFacebook a').attr('href', addHttps(this.value));
    });

    jQuery('#inputYoutube').keyup(function () {
        jQuery('#rowYoutube a').attr('href', addHttps(this.value));
    });

    // Toggle display fields
    jQuery('input[type=checkbox]').change(function () {
        const rowId = this.id.replace('include', 'row');
        const inputId = this.id.replace('include', 'input');

        if (this.checked) {
            jQuery('#' + rowId).show();
            jQuery('#' + inputId).prop('disabled', false);
        } else {
            jQuery('#' + rowId).hide();
            jQuery('#' + inputId).prop('disabled', true);
        }
    });

    // Add email field
    let emailCounter = 0;
    jQuery('#addEmailBtn').on('click', function (e) {
        e.preventDefault();
        emailCounter++;
        jQuery('#emailFields').append(
            '<div class="emailField"><input type="email" id="inputEmail' + emailCounter + '" name="inputEmail' + emailCounter + '" /><img id="removeEmailBtn" class="squareBtn" src="/wp-content/plugins/email-signature-generator/images/minus_sign.svg" ></div>');
    });

    // Remove email field
    jQuery('#emailFields').on('click', '.emailField #removeEmailBtn', function () {
        const parent = this.closest('div');
        const fieldId = (parent.firstChild.id).replace('inputEmail', '');
        emailArr[fieldId] = '';
        parent.remove();
        updateEmail();
    });

    // Add url field
    let urlCounter = 0;
    jQuery('#addUrlBtn').on('click', function (e) {
        e.preventDefault();
        urlCounter++;
        jQuery('#urlFields').append(
            '<div class="urlField"><input type="text" id="inputUrl' + urlCounter + '" name="inputUrl' + urlCounter + '" /><img id="removeUrlBtn" class="squareBtn" src="/wp-content/plugins/email-signature-generator/images/minus_sign.svg" ></div>');
    });

    // Remove url field
    jQuery('#urlFields').on('click', '.urlField #removeUrlBtn', function () {
        const parent = this.closest('div');
        const fieldId = (parent.firstChild.id).replace('inputUrl', '');
        urlArr[fieldId] = '';
        parent.remove();
        updateUrl();
    });

    // Add phone field
    let phoneCounter = 0;
    jQuery('#addPhoneBtn').on('click', function (e) {
        e.preventDefault();
        phoneCounter++;
        jQuery('#phoneFields').append(
            '<div class="phoneField"><input type="tel" id="inputPhone' + phoneCounter + '" name="inputPhone' + phoneCounter + '" /><img id="removePhoneBtn" class="squareBtn" src="/wp-content/plugins/email-signature-generator/images/minus_sign.svg" ></div>');
    });

    // Remove phone field
    jQuery('#phoneFields').on('click', '.phoneField #removePhoneBtn', function () {
        const parent = this.closest('div');
        const fieldId = (parent.firstChild.id).replace('inputPhone', '');
        phoneArr[fieldId] = '';
        parent.remove();
        updatePhone();
    });

    // Add mobile field
    let mobileCounter = 0;
    jQuery('#addMobileBtn').on('click', function (e) {
        e.preventDefault();
        mobileCounter++;
        jQuery('#mobileFields').append(
            '<div class="mobileField"><input type="tel" id="inputMobile' + mobileCounter + '" name="inputMobile' + mobileCounter + '" /><img id="removeMobileBtn" class="squareBtn" src="/wp-content/plugins/email-signature-generator/images/minus_sign.svg" ></div>');
    });

    // Remove mobile field
    jQuery('#mobileFields').on('click', '.mobileField #removeMobileBtn', function () {
        const parent = this.closest('div');
        const fieldId = (parent.firstChild.id).replace('inputMobile', '');
        mobileArr[fieldId] = '';
        parent.remove();
        updateMobile();
    });

    // Handle Modal
    jQuery('.addField.copySignature').on('click', function () {
        jQuery('.modalWrapper').addClass('active');
    });

    jQuery('#exit, .modalWrapper').on('click', function (e) {
        jQuery('.modalWrapper').removeClass('active');
    });

    jQuery('.modalWrapper .modalContent').on('click', function (e) {
        e.stopPropagation();
    })


});
