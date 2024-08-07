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
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/fivestar_franchising.png',
                    style: 'max-width: 220px'
                });
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
                break;

            case 'five-star-marketing':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/five-star-marketing-logo.png',
                    style: 'max-width: 220px'
                });
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
                break;

            case 'Bio-One':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-logo.png',
                    style: 'max-width: 204px'
                });
                iconFolder = 'bio-one';
                jQuery('#displayName').css('color', '#f26a3d');
                break;

            case 'Bio-One-Tagline':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-tagline.png',
                    style: 'max-width: 204px'
                });
                iconFolder = 'bio-one';
                jQuery('#displayName').css('color', '#f26a3d');
                break;

            case 'Bio-One-Blue':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/bio-one-blue.png',
                    style: 'max-width: 204px'
                });
                iconFolder = 'bio-one-blue';
                jQuery('#displayName').css('color', '#f26a3d');
                break;

            case 'Mosquito-Shield':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/mosquito-shield-logo.png',
                    style: 'max-width: 194px'
                });
                iconFolder = 'mosquito-shield';
                jQuery('#displayName').css('color', '#cb171e');
                break;

            case 'Five-Star-Bath-Solutions':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/five-star-bath-solutions-logo.png',
                    style: 'max-width: 194px'
                });
                iconFolder = 'fsb';
                jQuery('#displayName').css('color', '#1c93d1');
                break;

            case '1-800-Packouts':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/packouts-logo.png',
                    style: 'max-width: 189px'
                });
                iconFolder = 'packouts';
                jQuery('#displayName').css('color', '#0076cf');
                break;

            case 'Gotcha-Covered':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/gotcha-covered-logo.png',
                    style: 'max-width: 212px'
                });
                iconFolder = 'gotcha-covered';
                jQuery('#displayName').css('color', '#2591d0');
                break;

            case 'Card-My-Yard':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/card-my-yard-logo1.png',
                    style: 'max-width: 220px'
                });
                iconFolder = 'card-my-yard';
                jQuery('#displayName').css('color', '#40b44a');
                break;

            case 'ProNexis':
                jQuery('#brandLogo').attr({
                    src: thisDomain + '/wp-content/plugins/email-signature-generator/images/pronexis-logo.png',
                    style: 'max-width: 220px'
                });
                iconFolder = 'pronexis';
                jQuery('#displayName').css('color', '#2591d0');
                break;

            default:
                console.log('image not updated');
                iconFolder = 'fsf';
                jQuery('#displayName').css('color', '#ab080d');
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

    async function copyElementToClipboard(element) {
        let text = document.getElementById(element).innerHTML;
        text = text.replace(/\s+/g, ' ').trim();


        window.getSelection().removeAllRanges();
        let range = document.createRange();
        range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();


        // const html = `<div><div class="fsf">fsf </div>${text}</div>`;

        // const clipboardItem = new ClipboardItem({
        //     "text/html": new Blob([html], { type: "text/html" }),
        //     "text/plain": new Blob([text], { type: "text/plain" })
        // });

        // console.log(clipboardItem);

        // try {
        //     await navigator.clipboard.write([clipboardItem]);
        //     console.log('Content copied to clipboard');
        // } catch (err) {
        //     console.error('Failed to copy: ', err);
        // }
    }

    jQuery('.copySignature').on('click', () => {
        copyElementToClipboard('signature');
    });
});
