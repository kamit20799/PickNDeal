class loginObject {
    h1 = "h1"
    username = '#userName'
    password = '#password'
    button = '.btn'
    userProfile = `div:nth-of-type(1) > .formGroup > .form-label`
    alert = '.alert'
    forget_heading = '.text-start'
    suplier_Profile = '[data-role="supplier"]'

    businessName = '#business_name'
    service = '.multiselect'
    removeTag1 = '[aria-label=" amnTest---1 ❎"] > .multiselect-tag-remove'
    removeTag2 = '[aria-label=" Auto Service ❎"] > .multiselect-tag-remove > .multiselect-tag-remove-icon'
    removeTag3 = '[aria-label=" Silk ❎"] > .multiselect-tag-remove'
    removeTag4 ='[aria-label=" oreo ❎"] > .multiselect-tag-remove > .multiselect-tag-remove-icon'
    adress1 = ':nth-child(4) > .formGroup > #address'
    adress2 = ':nth-child(5) > .formGroup > #address'
    noofHours = ':nth-child(6) > .formGroup > #address'
    countryDropdown = '#vs1__combobox'
    stateDropdown = '#vs2__combobox'
    cityDropdown = '#vs3__combobox'
    noOption = 'Sorry, no matching options.'
    zipCode = '#zip'
    dayDropdown = 'select.mb-2'
    timeFrom1 = ':nth-child(2) > .ml-1'
    timeFrom2 = 'div.mb-2 > .ml-1'
    timeFrom3 = ':nth-child(2) > .col-sm-10 > .row > :nth-child(2) > .ml-1'
    timeFrom4 = ':nth-child(2) > .col-sm-10 > .row > div.mb-2 > .ml-1'
    timeFrom5 = ':nth-child(3) > .col-sm-10 > .row > :nth-child(2) > .ml-1'
    timeFrom6 = ':nth-child(3) > .col-sm-10 > .row > div.mb-2 > .ml-1'
    addButton = '.col-sm-12 > .btn'
    deleteButton = ':nth-child(1) > .col-sm-10 > .row > .mt-1 > .btn'
    about = '[rows]'
    imgUpload = 'input#uploads'
    submit = '.mb-3 > .btn'
}

export default loginObject